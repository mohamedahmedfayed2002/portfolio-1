export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  documentation: string;
  liveDemo: string | null;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Dockerized Web Application Deployment',
    description:
      'Deploying a web application using containers, reverse proxy, and database integration.',
    technologies: ['Ubuntu Server', 'Docker', 'Nginx', 'PostgreSQL'],
    github: 'https://github.com/mohamedahmed/dockerized-web-app',
    documentation: 'https://drive.google.com/drive/folders/project1-docs',
    liveDemo: null,
  },
  {
    id: 2,
    title: 'CI/CD Automation Pipeline',
    description:
      'Automating application build, testing, and deployment workflows.',
    technologies: ['Jenkins', 'GitHub', 'Docker'],
    github: 'https://github.com/mohamedahmed/cicd-pipeline',
    documentation: 'https://drive.google.com/drive/folders/project2-docs',
    liveDemo: null,
  },
  {
    id: 3,
    title: 'Infrastructure Monitoring',
    description:
      'Monitoring server resources, CPU, memory, and infrastructure health.',
    technologies: ['Prometheus', 'Grafana', 'Linux'],
    github: 'https://github.com/mohamedahmed/infrastructure-monitoring',
    documentation: 'https://drive.google.com/drive/folders/project3-docs',
    liveDemo: null,
  },
  {
    id: 4,
    title: 'Load Testing & Performance Analysis',
    description:
      'Simulating concurrent users and analyzing application performance.',
    technologies: ['k6', 'Docker'],
    github: 'https://github.com/mohamedahmed/load-testing',
    documentation: 'https://drive.google.com/drive/folders/project4-docs',
    liveDemo: null,
  },
];
