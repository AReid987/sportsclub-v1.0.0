# 🏆 Sportsclub Platform

> **Sports Prediction & Betting Platform** - A comprehensive monorepo built with Turborepo, Next.js, and FastAPI microservices.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **pnpm** 9+
- **Python** 3.11+ and **PDM**
- **Docker** and **Docker Compose**

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd sportsclub-v1.0.0
   pnpm install
   ```

2. **Set up environment:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start development services:**
   ```bash
   # Start databases (PostgreSQL, Redis, MongoDB)
   docker-compose -f infra/docker/docker-compose.dev.yml up -d

   # Start all applications
   pnpm dev
   ```

4. **Access applications:**
   - 🌐 **Web App**: http://localhost:3000
   - 📚 **Docs**: http://localhost:3001
   - 🔐 **Auth Service**: http://localhost:8001
   - 🤖 **Prediction Service**: http://localhost:8002

## 🏗️ Architecture

### Monorepo Structure

```
sportsclub-v1.0.0/
├── apps/                          # Applications
│   ├── web/                       # Next.js Frontend (Port 3000)
│   └── docs/                      # Documentation Site (Port 3001)
├── packages/                      # Shared packages & microservices
│   ├── shared-libs/               # Shared TypeScript types & utilities
│   ├── ui/                        # Shared React components
│   ├── eslint-config/             # ESLint configurations
│   ├── typescript-config/         # TypeScript configurations
│   ├── auth-service/              # FastAPI Authentication (Port 8001)
│   ├── prediction-service/        # FastAPI Prediction Engine (Port 8002)
│   ├── data-ingestion-service/    # FastAPI Data Ingestion (Port 8003)
│   ├── ai-assistant-service/      # FastAPI AI Assistant (Port 8004)
│   ├── leaderboard-service/       # FastAPI Leaderboards (Port 8005)
│   └── notification-service/      # FastAPI Notifications (Port 8006)
├── infra/                         # Infrastructure as Code
│   ├── docker/                    # Docker configurations
│   ├── kubernetes/                # K8s manifests
│   ├── terraform/                 # Terraform configs
│   └── aws/                       # AWS CDK/CloudFormation
└── docs/                          # Project documentation
```

### Technology Stack

#### Frontend
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + Radix UI
- **State Management**: Zustand + TanStack Query
- **Animations**: Framer Motion

#### Backend
- **API Framework**: FastAPI (Python 3.11+)
- **Package Management**: PDM
- **Database**: PostgreSQL + Redis + MongoDB
- **Authentication**: JWT + OAuth2

#### DevOps
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## 📦 Available Scripts

```bash
# Development
pnpm dev              # Start all apps in development mode
pnpm dev:web          # Start only web app
pnpm dev:docs         # Start only docs

# Building
pnpm build            # Build all packages and apps
pnpm build:web        # Build only web app

# Code Quality
pnpm lint             # Lint all packages
pnpm lint:fix         # Fix linting issues
pnpm check-types      # Type check all TypeScript
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode

# Utilities
pnpm clean            # Clean all build artifacts
pnpm commit           # Conventional commit with Commitizen
```

## 🔧 Development Workflow

### Adding a New Package

1. Create package directory in `packages/`
2. Add `package.json` with `@sportsclub/` namespace
3. Configure TypeScript and ESLint
4. Update workspace dependencies

### Adding a New Microservice

1. Create service directory in `packages/`
2. Set up `pyproject.toml` with PDM
3. Configure FastAPI application
4. Add service to Docker Compose
5. Update environment variables

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Shared configurations
- **Prettier**: Consistent formatting
- **Conventional Commits**: Standardized commit messages
- **Husky**: Pre-commit hooks

## 🚀 Deployment

### Development
```bash
docker-compose -f infra/docker/docker-compose.dev.yml up
```

### Production
```bash
# Build production images
pnpm build
docker-compose -f infra/docker/docker-compose.prod.yml up
```

### Cloud Deployment
- **Frontend**: Vercel
- **Backend**: AWS ECS/EKS
- **Database**: AWS RDS + ElastiCache + DocumentDB

## 📚 Documentation

- **API Documentation**: Available at service endpoints `/docs`
- **Component Storybook**: `pnpm storybook`
- **Architecture Docs**: `docs/architecture/`
- **Deployment Guide**: `docs/deployment/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'feat: add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/your-org/sportsclub/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/sportsclub/discussions)
- **Email**: admin@twgsportsclub.com

---

**Built with ❤️ by the Sportsclub Team**