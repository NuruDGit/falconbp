declare module '*.png' {
    const value: string | import('next/image').StaticImageData;
    export default value;
}

declare module '*.svg' {
    const content: string | import('next/image').StaticImageData;
    export default content;
}

declare module '*.jpg' {
    const value: string | import('next/image').StaticImageData;
    export default value;
}

declare module '*.jpeg' {
    const value: string | import('next/image').StaticImageData;
    export default value;
}

declare module '*.gif' {
    const value: string | import('next/image').StaticImageData;
    export default value;
}

declare module '*.webp' {
    const value: string | import('next/image').StaticImageData;
    export default value;
}
