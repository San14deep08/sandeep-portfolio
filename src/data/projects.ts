export type ProjectLink = {
  label: string
  href: string
  icon: 'globe' | 'github' | 'demo' | 'ios' | 'android'
}

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  accent?: string
}

export const featuredProjects: Project[] = [
  {
    slug: 'javaforge',
    title: 'JavaForge Portfolio',
    description:
      'A curated showcase of production-grade Java & Spring Boot services — JWT-secured REST APIs, JPA models, and AWS deployments wired through Beanstalk and RDS.',
    tags: ['Java', 'Spring Boot', 'JPA', 'AWS', 'REST'],
    links: [{ label: 'Github', href: '#', icon: 'github' }],
    accent: 'from-amber-100 to-rose-100',
  },
  {
    slug: 'devwithai',
    title: 'DevWithAI',
    description:
      'A YouTube + content automation pipeline that turns developer tutorials into multi-format publishing — script generation, captioning, and metadata, end-to-end.',
    tags: ['Spring AI', 'LangChain4j', 'Node', 'Automation'],
    links: [{ label: 'Website', href: '#', icon: 'globe' }],
    accent: 'from-sky-100 to-emerald-100',
  },
  {
    slug: 'rag-pgvector',
    title: 'RAG Knowledge Base',
    description:
      'A retrieval-augmented Q&A service over private docs — minimal system prompt, pgvector embeddings, Spring AI retrieval, and clean evaluation hooks.',
    tags: ['Spring AI', 'pgvector', 'PostgreSQL', 'RAG'],
    links: [{ label: 'Github', href: '#', icon: 'github' }],
    accent: 'from-violet-100 to-amber-100',
  },
]

export const personalProjects: Project[] = [
  {
    slug: 'utility-lib',
    title: 'Spring Utility Library',
    description:
      'A reusable Java utility library — validation helpers, error envelopes, and AOP logging aspects designed to drop into any Spring Boot service on day one.',
    tags: ['Java', 'Spring Boot', 'AOP', 'Maven'],
    links: [{ label: 'Github', href: '#', icon: 'github' }],
  },
  {
    slug: 'aws-cookbook',
    title: 'AWS Deploy Cookbook',
    description:
      'Battle-tested runbooks for Beanstalk, EC2, IAM, and CloudWatch — consolidated IAM policies, Nginx + ELB troubleshooting, and CI/CD pipeline templates.',
    tags: ['AWS', 'Beanstalk', 'IAM', 'CloudWatch', 'CI/CD'],
    links: [{ label: 'Website', href: '#', icon: 'globe' }],
  },
  {
    slug: 'agentic-workflows',
    title: 'Agentic Workflows',
    description:
      'Prompt-engineered agent templates for Claude, ChatGPT, Gemini, and Azure AI — composable steps, structured output, and reproducible developer recipes.',
    tags: ['Claude', 'Prompting', 'Agents', 'TypeScript'],
    links: [
      { label: 'Github', href: '#', icon: 'github' },
      { label: 'Demo', href: '#', icon: 'demo' },
    ],
  },
  {
    slug: 'react-dash',
    title: 'React Admin Dash',
    description:
      'A clean, responsive admin dashboard scaffold — React, hooks-based routing, JWT auth flow wired to a Spring Boot backend, and a reusable component kit.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'JWT'],
    links: [{ label: 'Website', href: '#', icon: 'globe' }],
  },
]
