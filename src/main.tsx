import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Google Ads Phone Conversion Tracking
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

window.dataLayer = window.dataLayer || [];
function gtag(...args: any[]) {
  window.dataLayer.push(arguments);
}
window.gtag = gtag;
gtag('js', new Date());

console.log('✓ gtag initialized in React');

const phoneCallback = function(formatted_number: string, mobile_number: string) {
  console.log('✅ CALLBACK FIRED!', formatted_number, mobile_number);
  const e = document.getElementById('marine-phone');
  console.log('Element found:', e);
  if (e) {
    (e as HTMLAnchorElement).href = 'tel:' + mobile_number;
    e.innerHTML = formatted_number;
    console.log('✅ Updated phone number to:', formatted_number);
  }
};

console.log('🔵 Firing gtag config...');
gtag('config', 'AW-2165924815/4ob6CPDnvfsaEOLZz8gq', {
  'phone_conversion_number': '727-954-0041',
  'phone_conversion_callback': phoneCallback
});
console.log('🔵 gtag config complete');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
