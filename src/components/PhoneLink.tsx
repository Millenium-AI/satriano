import type { CSSProperties, MouseEvent, ReactNode } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type PhoneLinkProps = {
  phone?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function PhoneLink({
  phone = '727-954-0041',
  className,
  style,
  children,
}: PhoneLinkProps) {
  const telHref = `tel:${phone.replace(/[^\d+]/g, '')}`;

  const reportCallConversion = (url?: string) => {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11426589922/itrRCJry488cEOLZz8gq',
        value: 3.0,
        currency: 'USD',
        event_callback: callback,
      });

      setTimeout(callback, 1000);
      return;
    }

    callback();
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    reportCallConversion(telHref);
  };

  return (
    <a href={telHref} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}