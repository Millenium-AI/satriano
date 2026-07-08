// src/pages/ScrollToSection.tsx
// Navigates to home and scrolls to a target section id.
// Used for routes like /services that map to homepage sections.
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  sectionId: string;
}

export default function ScrollToSection({ sectionId }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current history entry with home so Back button works correctly
    navigate('/', { replace: true });

    // Wait for Home to mount then scroll to section
    const timer = setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    return () => clearTimeout(timer);
  }, [navigate, sectionId]);

  return null;
}
