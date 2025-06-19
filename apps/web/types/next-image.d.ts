declare module "next/image" {
    import * as React from "react";

    export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
        src: string | StaticImageData;
        alt: string;
        width?: number | string;
        height?: number | string;
        layout?: "fill" | "fixed" | "intrinsic" | "responsive";
        priority?: boolean;
        loading?: "lazy" | "eager";
        placeholder?: "blur" | "empty";
        blurDataURL?: string;
        unoptimized?: boolean;
        quality?: number | string;
        onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
        className?: string;
        style?: React.CSSProperties;
    }

    const Image: React.FC<ImageProps>;

    export default Image;
}
