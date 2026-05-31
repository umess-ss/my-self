export type BlogPost = {
  id: number;
  title: string;
  category: string;
  tag: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  tags: string[];
  filters: string[];
  iconType: "ai" | "cloud" | "devops" | "python" | "go" | "backend" | "database";
  content: string;
};

export const blogFilters = ["All", "Backend", "Cloud", "DevOps", "AI", "Python", "Go", "System Design"];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Orchestrating LLMs: Building RAG Pipelines with LangChain and Gemini",
    category: "AI / Backend",
    tag: "AI / Backend",
    date: "14 Feb 2026",
    readTime: "6 min read",
    author: "Umesh Rajbanshi",
    excerpt: "How RAG pipelines connect LLMs with live data using LangChain, Gemini, vector search, and retrieval workflows.",
    tags: ["LangChain", "Gemini", "RAG", "Python", "Crawl4AI"],
    filters: ["AI", "Backend", "Python"],
    iconType: "ai",
    content: `
## Why RAG Matters

Large language models are useful, but they are limited when the answer depends on private documents, fresh website data, or internal project knowledge. Retrieval-Augmented Generation adds a lookup step before generation, so the model can respond with context instead of guessing.

For a backend engineer, the interesting part is not only the prompt. It is the system around the prompt: ingestion, chunking, embeddings, vector search, retrieval quality, and response grounding.

## A Practical Pipeline

A simple RAG flow usually looks like this:

1. Collect source documents from files, APIs, or crawled pages.
2. Clean and chunk the content into retrieval-friendly sections.
3. Embed each chunk and store it in a vector index.
4. Retrieve the most relevant chunks for a user query.
5. Send the retrieved context to Gemini with a focused prompt.

\`\`\`python
def answer_question(query, retriever, model):
    context = retriever.search(query, top_k=5)
    prompt = f"""
    Use only this context to answer:
    {context}

    Question: {query}
    """
    return model.invoke(prompt)
\`\`\`

## Lessons Learned

RAG quality depends heavily on data preparation. Bad chunks create weak retrieval, and weak retrieval creates vague answers. The best improvements often come from better document cleaning, smaller focused chunks, metadata filters, and simple evaluation prompts.

> A good RAG system is less about making the model sound smart and more about making the retrieved context trustworthy.

## Where LangChain Fits

LangChain is useful for connecting loaders, splitters, retrievers, prompts, and model calls. Gemini handles the reasoning, while tools like Crawl4AI can turn messy web pages into cleaner markdown for indexing.

The backend challenge is making the pipeline reliable enough to run repeatedly, observe failures, and improve retrieval over time.
    `
  },
  {
    id: 2,
    title: "MLOps Essentials: Containerizing Deep Learning Models with Docker",
    category: "MLOps / DevOps",
    tag: "MLOps / DevOps",
    date: "10 Feb 2026",
    readTime: "5 min read",
    author: "Umesh Rajbanshi",
    excerpt: "A practical note on packaging computer vision models like YOLO and MiDaS using Docker and CI/CD-friendly workflows.",
    tags: ["Docker", "MLOps", "YOLO", "MiDaS", "GitHub Actions"],
    filters: ["DevOps", "AI"],
    iconType: "devops",
    content: `
## Why Containerize Models

Computer vision projects often depend on exact versions of Python, model weights, OpenCV, PyTorch, and system libraries. Docker gives the model a repeatable runtime, which makes development, testing, and deployment much easier.

When models like YOLO or MiDaS move from a notebook into an application, the deployment workflow matters as much as the model code.

## A Clean Container Setup

A practical image should keep dependencies explicit and avoid unnecessary weight.

\`\`\`dockerfile
FROM python:3.11-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["python", "app.py"]
\`\`\`

## CI/CD Friendly Workflow

The deployment flow can be simple:

1. Push code to GitHub.
2. Run tests and lint checks.
3. Build a Docker image.
4. Push the image to a registry.
5. Deploy the new image to a service.

This creates a stable path from experiment to production.

## MLOps Takeaway

MLOps is not only model training. It is packaging, versioning, reproducibility, monitoring, and rollback. Docker is usually the first serious step toward making AI projects operational.
    `
  },
  {
    id: 3,
    title: "Scaling Backend Infrastructure on AWS: From EC2 to VPC Security",
    category: "Cloud Operations",
    tag: "Cloud Operations",
    date: "05 Feb 2026",
    readTime: "7 min read",
    author: "Umesh Rajbanshi",
    excerpt: "Lessons learned while setting up secure and scalable AWS infrastructure for production-style backend systems.",
    tags: ["AWS", "EC2", "VPC", "Security", "Backend"],
    filters: ["Cloud", "Backend", "System Design"],
    iconType: "cloud",
    content: `
## From Server to Infrastructure

Running a backend on one EC2 instance is a useful start, but production systems need clearer boundaries. Networking, security groups, subnets, secrets, logs, and deployment strategy all become part of the backend.

The first shift is thinking in layers: public entry points, private services, secure configuration, and observability.

## VPC and Security Basics

A safer AWS layout separates what users can access from what only internal services should reach.

- Public subnets can host load balancers.
- Private subnets can run application services.
- Security groups should allow only required traffic.
- Secrets should not live in code or plain environment files.

## Observability Matters

CloudWatch logs, alarms, and metrics make debugging possible after deployment. Without logs, every production issue becomes guesswork.

> A backend is not production-ready just because it runs. It is production-ready when it can be monitored, updated, and recovered.

## What I Learned

AWS rewards clear architecture. Small decisions like naming resources, isolating services, and using parameter stores make the system easier to operate later.
    `
  },
  {
    id: 4,
    title: "Deploying a Backend with ECS Fargate, ALB, ECR, and GitHub Actions",
    category: "Cloud / DevOps",
    tag: "Cloud / DevOps",
    date: "16 Feb 2026",
    readTime: "8 min read",
    author: "Umesh Rajbanshi",
    excerpt: "A build log from deploying a real backend using Docker, Amazon ECS Fargate, ECR, Application Load Balancer, ACM, SSM, and GitHub Actions.",
    tags: ["AWS ECS", "Docker", "ECR", "ALB", "CI/CD", "Terraform"],
    filters: ["Cloud", "DevOps", "Backend"],
    iconType: "cloud",
    content: `
## Deployment Goal

The goal was to deploy a backend in a way that feels close to production: containerized builds, managed compute, load balancing, secure configuration, logs, and automated delivery.

The stack used Docker, Amazon ECR, ECS Fargate, Application Load Balancer, ACM, SSM Parameter Store, CloudWatch, Terraform, and GitHub Actions.

## Deployment Flow

The high-level CI/CD path looks like this:

\`\`\`text
GitHub push
  -> Build Docker image
  -> Push image to ECR
  -> Update ECS service
  -> Route traffic through ALB
  -> Observe logs in CloudWatch
\`\`\`

## Why ECS Fargate

Fargate removes server management while still keeping the deployment model container-native. For backend APIs, it provides a good balance between operational simplicity and production structure.

## Practical Lessons

SSM Parameter Store is useful for configuration, CloudWatch is essential for debugging, and ALB health checks force you to think carefully about readiness endpoints.

Terraform makes the infrastructure repeatable, which matters when rebuilding or changing environments.
    `
  },
  {
    id: 5,
    title: "Building an ORM from Scratch in Python",
    category: "Python Internals",
    tag: "Python Internals",
    date: "18 Feb 2026",
    readTime: "6 min read",
    author: "Umesh Rajbanshi",
    excerpt: "What I learned about descriptors, metaclasses, model fields, SQLite, and query abstraction by building a minimal ORM.",
    tags: ["Python", "SQLite", "ORM", "Descriptors", "Metaclasses"],
    filters: ["Python", "Backend", "System Design"],
    iconType: "python",
    content: `
## Why Build an ORM

Using an ORM is easy. Understanding one is different. Building a minimal ORM from scratch helped me see how models become tables, how fields map to columns, and how Python internals support clean developer APIs.

The project focused on model fields, descriptors, metaclasses, SQLite integration, and simple query logic.

## Descriptors and Fields

Descriptors let a class control how attribute access works. That makes them a natural fit for model fields.

\`\`\`python
class Field:
    def __set_name__(self, owner, name):
        self.name = name

    def __get__(self, instance, owner):
        return instance.__dict__.get(self.name)

    def __set__(self, instance, value):
        instance.__dict__[self.name] = value
\`\`\`

## Metaclasses and Model Mapping

A metaclass can inspect model definitions when the class is created. That is where field collection and table mapping can happen.

## Takeaway

Building the small version makes the large version less magical. Django ORM and SQLAlchemy are deep systems, but the core idea starts with mapping Python objects to database rows in a predictable way.
    `
  },
  {
    id: 6,
    title: "Building a Banking API with Go",
    category: "Go Backend",
    tag: "Go Backend",
    date: "20 Feb 2026",
    readTime: "5 min read",
    author: "Umesh Rajbanshi",
    excerpt: "Notes from building a Go backend with middleware, config, PostgreSQL repositories, migrations, safe transactions, auth, and account ownership.",
    tags: ["Go", "PostgreSQL", "REST API", "JWT", "Transactions"],
    filters: ["Go", "Backend", "System Design"],
    iconType: "go",
    content: `
## Why Go for a Banking API

Go is a good fit for backend APIs because it is simple, fast, explicit, and easy to deploy. A banking API is a useful practice project because it requires authentication, ownership rules, database consistency, and careful error handling.

## Core Backend Pieces

The project included:

- Configuration management
- HTTP middleware
- Response helpers
- PostgreSQL repositories
- Database migrations
- Register and login flows
- Protected routes
- Account ownership checks
- Safe database transactions

## Transaction Safety

Banking-style operations need transaction boundaries. A transfer should not debit one account unless the matching credit also succeeds.

\`\`\`go
tx, err := db.Begin(ctx)
if err != nil {
    return err
}
defer tx.Rollback(ctx)

// debit, credit, write ledger entry

return tx.Commit(ctx)
\`\`\`

## What I Practiced

This project strengthened my understanding of clean package structure, repository patterns, middleware, and defensive backend design.
    `
  }
];
