
export interface Project {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  thumbnail: string;
  description: string;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Industry {
  title: string;
  items: string[];
  icon: string;
}
