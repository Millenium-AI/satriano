import type { CSSProperties, ReactNode } from 'react';

type PhoneLinkProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function PhoneLink({
  className,
  style,
  children,
}: PhoneLinkProps) {
  return (
    <span id="marine-phone" className={className} style={style}>
      {children}
    </span>
  );
}