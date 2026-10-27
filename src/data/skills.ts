export type SkillCategory = {
  title: string;
  icon: 'terminal' | 'container' | 'gitBranch' | 'cloud' | 'activity' | 'cog' | 'network';
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Operating Systems',
    icon: 'terminal',
    skills: ['Linux', 'Ubuntu Server', 'Windows Server'],
  },
  {
    title: 'Containerization',
    icon: 'container',
    skills: ['Docker', 'Docker Compose'],
  },
  {
    title: 'CI/CD',
    icon: 'gitBranch',
    skills: ['Jenkins', 'Git', 'GitHub'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'cloud',
    skills: ['AWS', 'Azure', 'Cloudflare', 'Nginx'],
  },
  {
    title: 'Monitoring',
    icon: 'activity',
    skills: ['Prometheus', 'Grafana'],
  },
  {
    title: 'Automation',
    icon: 'cog',
    skills: ['Ansible', 'Bash Scripting'],
  },
  {
    title: 'Networking',
    icon: 'network',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Networking Fundamentals'],
  },
];
