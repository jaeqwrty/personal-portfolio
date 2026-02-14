export interface Project {
  id: string;
  title: string;
  description: string;
  category: "flutter" | "web" | "other";
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "mobile" | "backend" | "tools";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NeonChat",
    description: "A real-time messaging app built with Flutter featuring end-to-end encryption and sleek Material 3 design.",
    category: "flutter",
    technologies: ["Flutter", "Dart", "Firebase", "WebSocket"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "PixelTracker",
    description: "Habit tracking app with beautiful pixel-art visualizations and gamification elements.",
    category: "flutter",
    technologies: ["Flutter", "Dart", "SQLite", "Riverpod"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "RetroBoard",
    description: "A collaborative kanban board with real-time updates, drag-and-drop, and retro synthwave theming.",
    category: "web",
    technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "SynthAPI",
    description: "RESTful API dashboard with interactive documentation, real-time monitoring, and neon-themed UI.",
    category: "web",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "5",
    title: "WaveForm",
    description: "Music visualization app that creates stunning audio-reactive animations synced to your beats.",
    category: "flutter",
    technologies: ["Flutter", "Dart", "AudioKit", "Custom Painter"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "6",
    title: "GridRunner",
    description: "Portfolio template generator with drag-and-drop builder and multiple retro-themed templates.",
    category: "web",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    image: "/placeholder.svg",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const skills: Skill[] = [
  { name: "Flutter", level: 95, category: "mobile" },
  { name: "Dart", level: 90, category: "mobile" },
  { name: "React", level: 88, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Firebase", level: 85, category: "backend" },
  { name: "Supabase", level: 80, category: "backend" },
  { name: "Git", level: 88, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
];

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "hello@example.com",
};
