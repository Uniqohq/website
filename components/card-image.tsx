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
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 700px"
    />
  );
}
