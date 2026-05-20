export type Experience = {
  period: string
  role: string
  company: string
  description: string
  tags: string[]
  link?: string
}

export const experiences: Experience[] = [
  {
    period: '2025 — Present',
    role: 'Agentic AI Developer',
    company: 'Infinite Computer Solutions',
    description:
      'Designing and building autonomous AI systems using Azure AI Foundry, Claude, and FastAPI. Creating agentic workflows that reason, plan, and execute multi-step tasks — from prompt engineering and tool use to production-ready AI pipelines integrated with existing enterprise backends.',
    tags: ['Azure AI Foundry', 'Claude', 'FastAPI', 'Python', 'Agentic AI', 'Prompt Engineering'],
  },
  {
    period: '2023 — Present',
    role: 'Java Backend Developer',
    company: 'Infinite Computer Solutions',
    description:
      'Joined as a fresher and built scalable REST APIs for HMSA.com (healthcare management). Implemented Spring Security for auth flows, designed JPA/Hibernate data models, and shipped production-grade Spring Boot services with clean API contracts and robust error handling.',
    tags: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'JPA/Hibernate', 'HMSA.com'],
    link: 'https://hmsa.com/',
  },
]
