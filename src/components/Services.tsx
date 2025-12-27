import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Anchor, Wrench, Search, Sparkles, Settings, ArrowRight, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Anchor,
      title: 'New Dock Design & Construction',
      description: 'Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.',
      color: 'from-[#800020] to-[#A0522D]',
      slug: 'dock-design'
    },
    {
      icon: Wrench,
      title: 'Dock Repair & Maintenance',
      description: 'Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, an
