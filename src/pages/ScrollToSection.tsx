// src/pages/ScrollToSection.tsx
// Navigates to home and scrolls to a target section id.
// Used for routes like /services that map to homepage sections.
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  sectionId: string;
  // Section to scroll to instead, below the 'desktop' (1400px) breakpoint.
  // Some sections (e.g. #services) are hidden on mobile/tablet and their
  // content is shown inside another section instead (e.g. #about).
  mobileSectionId?: string;
}

const DESKTOP_BREAKPOINT = 1400;

export default function ScrollToSection({ sectionId, mobileSectionId }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    // Replace current history entry with home so Back button works correctly
    navigate('/', { replace: true });

    // Wait for Home to mount then scroll to section
    const timer = setTimeout(() => {
      const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;
      const targetId = isDesktop ? sectionId : mobileSectionId ?? sectionId;
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);

    return () => clearTimeout(timer);
  }, [navigate, sectionId, mobileSectionId]);

  return null;
}
