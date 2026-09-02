import type { CSSProperties, ReactNode } from 'react';

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

  return (
    <a href={telHref} className={`marine-phone ${className || ''}`} style={style}>
      {children}
    </a>
  );
}