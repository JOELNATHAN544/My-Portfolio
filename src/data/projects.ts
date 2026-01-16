export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'linksphere',
    title: 'Linksphere App',
    category: 'Web Application',
    year: '2024',
    image: '/images/linksphere-icon.webp',
    description: 'A robust web application designed to simplify link management.',
    longDescription: 'Linksphere is a full-stack web application that allows users to upload, store, and organize URL links. It features secure user authentication, public and private link sharing, and a community feed of curated links. The application is built with a modern tech stack and is designed to be responsive and user-friendly.',
    features: [
      'Secure user authentication and profile management',
      'Public and private link sharing capabilities',
      'Real-time link preview generation',
      'Responsive design for mobile and desktop',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://linksphere-98u3.onrender.com/',
    githubUrl: 'https://github.com/Vitalisn4/LinkSphere',
  },
  {
    id: 'placeholder-2',
    title: 'Second Project',
    category: 'Coming Soon',
    year: '2024',
    image: '/images/joel-profile.webp', // Using profile as a placeholder
    description: 'Details about the second project will be added here soon.',
    longDescription: 'This is a placeholder for a future project. More information will be available shortly.',
    features: ['Feature A', 'Feature B', 'Feature C'],
    technologies: ['Tech X', 'Tech Y', 'Tech Z'],
    liveUrl: '#',
    githubUrl: '#',
  },
];
