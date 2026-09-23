import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  width?: number;
  height?: number;
}

export default function LazyImage({
  src,
  alt,
  className,
  style,
  onClick,
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      width={width}
      height={height}
      onClick={onClick}
      onLoad={() => setIsLoaded(true)}
      loading={loading}
      decoding={decoding}
    />
  );
}
