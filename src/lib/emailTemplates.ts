type Field = {
  label: string;
  value: string;
};

const BRAND = {
  navy: '#151C2F',
  navyDark: '#010614',
  gold: '#C7A975',
  grey: '#C5C6CB',
  white: '#FFFFFF',
};

const LOGO_URL = 'https://www.falconbp.com/logo.png';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export function buildBrandedEmail({
  title,
  subtitle,
  fields,
  footerNote,
}: {
  title: string;
  subtitle: string;
  fields: Field[];
  footerNote?: string;
}) {
  const rows = fields
    .map(
      (field) => `
        <tr>
          <td style="padding: 12px 0; color: ${BRAND.grey}; font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;">
            ${escapeHtml(field.label)}
          </td>
        </tr>
        <tr>
          <td style="padding: 0 0 18px; color: ${BRAND.white}; font-size: 16px; line-height: 1.6; border-bottom: 1px solid rgba(199,169,117,0.2);">
            ${escapeHtml(field.value).replace(/\n/g, '<br />')}
          </td>
        </tr>
      `
    )
    .join('');

  return `
  <div style="margin:0;padding:0;background:${BRAND.navy};font-family:'Helvetica Neue', Arial, sans-serif;color:${BRAND.grey};">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.navy};padding:36px 18px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:${BRAND.navyDark};border:1px solid rgba(199,169,117,0.2);border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;background:linear-gradient(135deg, rgba(199,169,117,0.14), rgba(1,6,20,0.2));">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="width:120px;">
                      <img src="${LOGO_URL}" alt="FalconBridge Partners" width="120" style="display:block;border:0;outline:none;" />
                    </td>
                    <td style="text-align:right;color:${BRAND.gold};font-size:11px;letter-spacing:0.32em;text-transform:uppercase;">
                      Confidential Intake
                    </td>
                  </tr>
                </table>
                <h1 style="margin:18px 0 6px;font-size:24px;line-height:1.3;color:${BRAND.white};font-weight:600;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin:0;color:${BRAND.grey};font-size:14px;line-height:1.6;">
                  ${escapeHtml(subtitle)}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background:${BRAND.navy};border-top:1px solid rgba(199,169,117,0.15);font-size:12px;color:${BRAND.grey};line-height:1.6;">
                ${footerNote ? escapeHtml(footerNote) : 'This request is reviewed manually and handled with discretion.'}
              </td>
            </tr>
          </table>
          <p style="margin:18px 0 0;color:rgba(197,198,203,0.6);font-size:11px;letter-spacing:0.08em;text-transform:uppercase;">
            FalconBridge Partners · Decision-grade research & advisory
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
}
