export type Experience = {
  period: string
  role: string
  company: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    period: '2024 — Present',
    role: 'Full-Stack Developer',
    company: 'Infinite Computer Solutions',
    description:
      'Building production-grade Spring Boot services and React front-ends. Designing JWT-secured REST APIs, AOP logging, and AWS Beanstalk + RDS deployments with consolidated IAM and CloudWatch monitoring.',
    tags: ['Java', 'Spring Boot', 'React', 'AWS', 'JWT'],
  },
  {
    period: '2023 — 2024',
    role: 'Backend Engineer',
    company: 'Cloud & AI Projects',
    description:
      'Shipped microservices and CI/CD pipelines on AWS — Beanstalk, EC2, S3, RDS/Aurora. Built RAG pipelines with Spring AI, LangChain4j, and pgvector for private knowledge-base Q&A.',
    tags: ['Microservices', 'Spring AI', 'LangChain4j', 'pgvector'],
  },
  {
    period: '2022 — 2023',
    role: 'Java Developer',
    company: 'Early Career',
    description:
      'Hands-on with Spring MVC, Spring Security, JPA/Hibernate, and REST API design. Deep debugging across Nginx, ELB, and Beanstalk — turned messy infra problems into clean, reproducible runbooks.',
    tags: ['Spring MVC', 'Hibernate', 'REST', 'Debugging'],
  },
]
