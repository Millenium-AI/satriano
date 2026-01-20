// src/data/services.ts
import {
  Anchor,
  Wrench,
  Search,
  Sparkles,
  Settings,
  ClipboardCheck,
} from 'lucide-react';

// Import your images
import dockConstruction from '../assets/dock-construction.jpg';
import dockRepair from '../assets/dock-repair.jpg';
import accessories from '../assets/accessories.jpg';
import boatLiftInstall from '../assets/boat-lift-install.jpg';
import boatLiftRepair from '../assets/boat-lift-repair.jpg';
import inspections from '../assets/inspections.jpg';

export type ServiceSlug =
  | 'new-dock-design-construction'
  | 'dock-repair-maintenance'
  | 'dock-boat-lift-accessories'
  | 'new-boat-lift-design-installation'
  | 'boat-lift-repair-maintenance'
  | 'dock-boat-lift-inspections';

export interface ServiceItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  color: string;
  slug: ServiceSlug;
  image: string;
}

export const services: ServiceItem[] = [
  {
    icon: Anchor,
    title: 'New Dock Design & Construction',
    description:
      'Custom dock design and construction tailored to your waterfront property. We handle everything from permits to completion.',
    color: 'from-burgundy to-burgundy',
    slug: 'new-dock-design-construction',
    image: dockConstruction,
  },
  {
    icon: Wrench,
    title: 'Dock Repair & Maintenance',
    description:
      'Expert repair and maintenance services to keep your dock safe and functional. We fix damage from storms, age, and wear.',
    color: 'from-burgundy to-burgundy',
    slug: 'dock-repair-maintenance',
    image: dockRepair,
  },
  {
    icon: Sparkles,
    title: 'Dock & Boat Lift Accessories',
    description:
      'Wide selection of premium accessories to enhance your dock and boat lift including bumpers, cleats, ladders, and more.',
    color: 'from-gold to-gold',
    slug: 'dock-boat-lift-accessories',
    image: accessories,
  },
  {
    icon: Settings,
    title: 'New Boat Lift Design & Installation',
    description:
      'Professional boat lift design and installation for vessels of all sizes. Quality motors, cables, and remote controls.',
    color: 'from-burgundy to-gold',
    slug: 'new-boat-lift-design-installation',
    image: boatLiftInstall,
  },
  {
    icon: Search,
    title: 'Boat Lift Repair & Maintenance',
    description:
      'Complete boat lift service including motor replacement, cable repair, adjustments, and preventative maintenance.',
    color: 'from-burgundy to-burgundy',
    slug: 'boat-lift-repair-maintenance',
    image: boatLiftRepair,
  },
  {
    icon: ClipboardCheck,
    title: 'Dock & Boat Lift Inspections',
    description:
      'Thorough inspections for buyers, sellers, and owners. Detailed reports on dock and boat lift integrity and safety.',
    color: 'from-gold to-gold',
    slug: 'dock-boat-lift-inspections',
    image: inspections,
  },
];
