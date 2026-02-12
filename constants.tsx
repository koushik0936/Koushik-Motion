
import { Project, Service, ProcessStep, Industry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'SaaS Product Launch',
    category: 'Motion Graphics',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://picsum.photos/seed/saas/1280/720',
    description: 'A dynamic SaaS explainer video featuring complex UI animations and smooth transitions built in After Effects.'
  },
  {
    id: '2',
    title: 'Brand Storyteller',
    category: 'Commercial',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://picsum.photos/seed/brand/1280/720',
    description: 'Cinematic brand commercial edited in Premiere Pro, focusing on emotional pacing and high-end color grading.'
  },
  {
    id: '3',
    title: 'UI Animation Reel',
    category: 'Motion Design',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://picsum.photos/seed/ui/1280/720',
    description: 'High-fidelity UI/UX interactions animated to highlight software features and user workflows.'
  },
  {
    id: '4',
    title: 'Event Highlights',
    category: 'Video Editing',
    videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://picsum.photos/seed/event/1280/720',
    description: 'A fast-paced event recap showcasing rapid editing techniques and immersive sound design.'
  }
];

export const SERVICES: Service[] = [
  { title: 'SaaS Motion Design', icon: '💻', description: 'Transforming complex software interfaces into engaging, easy-to-understand motion stories.' },
  { title: 'After Effects Magic', icon: '✨', description: 'Advanced VFX, motion graphics, and UI animations that bring products to life.' },
  { title: 'Premiere Pro Editing', icon: '🎬', description: 'Precision cutting, rhythmic pacing, and seamless narrative assembly for high-end films.' },
  { title: 'Product Explainers', icon: '💡', description: 'Clear and compelling videos designed to demonstrate value and drive software adoption.' },
  { title: 'Color & Sound', icon: '🎨', description: 'Professional color grading and immersive sound design to elevate every production.' },
  { title: 'Ads & Socials', icon: '📱', description: 'Eye-catching content optimized for platforms like Instagram, LinkedIn, and YouTube.' }
];

export const INDUSTRIES: Industry[] = [
  {
    title: 'Creators & Influencers',
    icon: 'Users',
    items: ['YouTube Channels', 'Personal Brands', 'Educational Creators', 'Podcast Shows', 'Gaming Channels']
  },
  {
    title: 'E-commerce & Stores',
    icon: 'ShoppingBag',
    items: ['Shopify Stores', 'Dropshipping Brands', 'Amazon Product Listings', 'Facebook Ad Creatives']
  },
  {
    title: 'Business & Corporate',
    icon: 'Briefcase',
    items: ['Promotional Videos', 'Corporate Presentations', 'Brand Story Videos', 'Business Explainers']
  },
  {
    title: 'Marketing Agencies',
    icon: 'Megaphone',
    items: ['Social Media Campaigns', 'Commercial Ads', 'Client Video Campaigns', 'Short-Form Ad Creatives']
  },
  {
    title: 'Real Estate',
    icon: 'Home',
    items: ['Property Showcases', 'Agent Branding', 'Neighborhood Guides', 'Virtual Tour Edits']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: 'Script & UI', description: 'Reviewing the software UI and finalizing the narrative script.' },
  { title: 'Storyboard', description: 'Mapping out key frames and motion paths for the animation.' },
  { title: 'Motion Design', description: 'Building the core animations in After Effects with pixel-perfect precision.' },
  { title: 'Narrative Edit', description: 'Bringing it all together in Premiere Pro with music and VO.' },
  { title: 'Refinement', description: 'Polishing transitions and perfecting the flow based on feedback.' },
  { title: 'Delivery', description: 'Final high-res renders optimized for your specific platforms.' }
];
