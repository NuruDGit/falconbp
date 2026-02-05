import React, { useEffect, useMemo, useState } from 'react';
import worldMapSvg from '../../images/world_map.svg';

const PRICE_OPTIONS = [
    { id: 'single', label: 'Single session', price: 2000 },
    { id: 'package-4', label: '4-session package', price: 7200 },
    { id: 'package-6', label: '6-session package', price: 10200 },
    { id: 'package-8', label: '8-session package', price: 12800 }
];

const CURRENCIES = ['AED', 'USD', 'GBP', 'EUR', 'SAR', 'AUD', 'ZAR'] as const;

const FlagIcon: React.FC<{ code: typeof CURRENCIES[number] }> = ({ code }) => {
    const flags = {
        AED: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#00732F"/>
                <rect width="36" height="18" fill="#FFFFFF"/>
                <rect width="36" height="9" fill="#000000"/>
                <rect width="12" height="27" fill="#FF0000"/>
            </svg>
        ),
        USD: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#B22234"/>
                <path d="M0,3 h36 M0,6 h36 M0,9 h36 M0,12 h36 M0,15 h36 M0,18 h36 M0,21 h36 M0,24 h36" stroke="#FFF" strokeWidth="2.5"/>
                <rect width="14" height="12" fill="#3C3B6E"/>
            </svg>
        ),
        GBP: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#012169"/>
                <path d="M0,0 L36,27 M36,0 L0,27" stroke="#FFF" strokeWidth="5"/>
                <path d="M0,0 L36,27 M36,0 L0,27" stroke="#C8102E" strokeWidth="3"/>
                <path d="M18,0 v27 M0,13.5 h36" stroke="#FFF" strokeWidth="7"/>
                <path d="M18,0 v27 M0,13.5 h36" stroke="#C8102E" strokeWidth="4"/>
            </svg>
        ),
        EUR: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#003399"/>
                <circle cx="18" cy="13.5" r="4" fill="none" stroke="#FFCC00" strokeWidth="0.8"/>
                <g fill="#FFCC00">
                    {Array.from({ length: 12 }).map((_, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        return <circle key={i} cx={18 + 5 * Math.cos(angle)} cy={13.5 + 5 * Math.sin(angle)} r="0.6"/>;
                    })}
                </g>
            </svg>
        ),
        SAR: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#165B33"/>
                <text x="18" y="18" fontSize="16" fill="#FFF" textAnchor="middle" fontFamily="Arial">ﷲ</text>
            </svg>
        ),
        AUD: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#012169"/>
                <rect width="14" height="12" fill="#012169"/>
                <path d="M0,0 L14,12 M14,0 L0,12" stroke="#FFF" strokeWidth="2"/>
                <path d="M0,0 L14,12 M14,0 L0,12" stroke="#C8102E" strokeWidth="1"/>
                <path d="M7,0 v12 M0,6 h14" stroke="#FFF" strokeWidth="3"/>
                <path d="M7,0 v12 M0,6 h14" stroke="#C8102E" strokeWidth="2"/>
            </svg>
        ),
        ZAR: (
            <svg viewBox="0 0 36 27" className="w-5 h-4">
                <rect width="36" height="27" fill="#007A4D"/>
                <rect width="36" height="18" y="9" fill="#002395"/>
                <path d="M0,0 L12,13.5 L0,27 Z" fill="#000"/>
                <path d="M0,0 L15,13.5 L0,27 L0,24 L9,13.5 L0,3 Z" fill="#FFB81C"/>
                <rect width="36" height="5" y="11" fill="#FFF"/>
                <rect width="36" height="3" y="12" fill="#DE3831"/>
            </svg>
        )
    };
    return flags[code];
};

const CACHE_KEY = 'fb_fx_rates_v1';

const roundToNearest10 = (value: number) => Math.round(value / 10) * 10;

const formatCurrency = (value: number, currency: string) => {
    try {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            maximumFractionDigits: 0
        }).format(value);
    } catch {
        return `${currency} ${value.toLocaleString('en-US')}`;
    }
};

const PricingCalculator: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(PRICE_OPTIONS[0].id);
    const [currency, setCurrency] = useState<(typeof CURRENCIES)[number]>('AED');
    const [rates, setRates] = useState<Record<string, number>>({ AED: 1 });
    const [status, setStatus] = useState<'idle' | 'loading' | 'ready'>('idle');

    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        const hasWindow = typeof window !== 'undefined';
        const cachedRaw = hasWindow ? window.localStorage.getItem(CACHE_KEY) : null;
        let cachedRates: Record<string, number> | null = null;

        if (cachedRaw) {
            try {
                const cached = JSON.parse(cachedRaw) as { date: string; rates: Record<string, number> };
                if (cached?.rates) {
                    cachedRates = cached.rates;
                    if (cached.date === today) {
                        setRates({ AED: 1, ...cached.rates });
                        setStatus('ready');
                        return;
                    }
                }
            } catch {
                // ignore invalid cache
            }
        }

        const fetchRates = async () => {
            setStatus('loading');
            try {
                const response = await fetch(
                    'https://api.exchangerate.host/latest?base=AED&symbols=USD,GBP,EUR,SAR,AUD,ZAR'
                );
                const data = await response.json();
                if (data?.rates) {
                    setRates({ AED: 1, ...data.rates });
                    if (hasWindow) {
                        window.localStorage.setItem(
                            CACHE_KEY,
                            JSON.stringify({ date: today, rates: data.rates })
                        );
                    }
                    return;
                }
            } catch {
                // ignore and try fallback
            }

            try {
                const response = await fetch('https://open.er-api.com/v6/latest/AED');
                const data = await response.json();
                if (data?.rates) {
                    const filtered = {
                        USD: data.rates.USD,
                        GBP: data.rates.GBP,
                        EUR: data.rates.EUR,
                        SAR: data.rates.SAR,
                        AUD: data.rates.AUD,
                        ZAR: data.rates.ZAR
                    };
                    setRates({ AED: 1, ...filtered });
                    if (hasWindow) {
                        window.localStorage.setItem(
                            CACHE_KEY,
                            JSON.stringify({ date: today, rates: filtered })
                        );
                    }
                    return;
                }
            } catch {
                // ignore fallback failure
            }

            if (cachedRates) {
                setRates({ AED: 1, ...cachedRates });
            } else {
                setRates({ AED: 1 });
            }
        };

        fetchRates().finally(() => setStatus('ready'));
    }, []);

    const selectedPrice = useMemo(() => {
        return PRICE_OPTIONS.find((option) => option.id === selectedOption)?.price ?? 2000;
    }, [selectedOption]);

    const convertedPrice = useMemo(() => {
        if (currency === 'AED') return selectedPrice;
        const rate = rates[currency] ?? 1;
        return roundToNearest10(selectedPrice * rate);
    }, [currency, rates, selectedPrice]);

    return (
        <div className="relative bg-white/2 border border-white/5 rounded-3xl p-10 overflow-hidden">
            {/* SVG World Map Background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img src={worldMapSvg} alt="" className="w-full h-full object-cover" />
            </div>
            
            <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                <div>
                    <p className="text-[0.7rem] font-technical uppercase tracking-widest text-brand-gold mb-3">Coaching Pricing</p>
                    <h3 className="text-2xl font-technical">Transparent pricing for decision support.</h3>
                </div>
                <div className="text-white/40 text-xs font-technical uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        {status === 'loading' ? 'Refreshing exchange rates…' : 'Rates refreshed daily'}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="space-y-3">
                        <p className="text-xs font-technical uppercase tracking-widest text-white/40">Session Type</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {PRICE_OPTIONS.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`text-left px-4 py-3 rounded-xl border transition-all ${
                                        selectedOption === option.id
                                            ? 'border-brand-gold/60 bg-brand-gold/10 text-white'
                                            : 'border-white/10 bg-white/5 text-white/70 hover:border-brand-gold/30'
                                    }`}
                                >
                                    <div className="text-sm font-technical">{option.label}</div>
                                    <div className="text-xs text-white/40">{formatCurrency(option.price, 'AED')}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-xs font-technical uppercase tracking-widest text-white/40">Currency</p>
                        <div className="flex flex-wrap gap-3">
                            {CURRENCIES.map((code) => (
                                <button
                                    key={code}
                                    type="button"
                                    onClick={() => setCurrency(code)}
                                    className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-technical tracking-widest transition-all ${
                                        currency === code
                                            ? 'bg-brand-gold text-brand-navy'
                                            : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    <span className="inline-block transition-transform group-hover:scale-110">
                                        <FlagIcon code={code} />
                                    </span>
                                    {code}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                    <div>
                        <p className="text-xs font-technical uppercase tracking-widest text-white/40">Base Price (AED)</p>
                        <div className="text-3xl font-technical text-white">{formatCurrency(selectedPrice, 'AED')}</div>
                    </div>
                    <div>
                        <p className="text-xs font-technical uppercase tracking-widest text-white/40">Converted Price ({currency})</p>
                        <div className="text-3xl font-technical text-brand-gold">{formatCurrency(convertedPrice, currency)}</div>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">
                        Indicative conversion based on live exchange rates, rounded deliberately to the nearest 10 units.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default PricingCalculator;
