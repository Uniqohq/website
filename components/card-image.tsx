import Image from "next/image";

type CardImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function CardImage({ src, alt, width, height, className, priority }: CardImageProps) {
  return (
    // unoptimized: these renders go straight to the browser as the original PNG
    // bytes — no re-encoding pass (Next's optimizer previously reprocessed them
    // into AVIF/WebP, which is not what's being audited here).
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      unoptimized
      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 700px"
    />
  );
}
