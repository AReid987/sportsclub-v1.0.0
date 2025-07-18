# Repository Purpose

This is the **SportsClub v1.0.0** repository - a comprehensive sports club management application built with Next.js and integrated with the BMAD (Business, Management, Architecture, Development) framework. The project serves as both a functional sports club management system and a demonstration of the BMAD methodology with its extensive agent-based development approach.

## Key Components

- **Sports Club Web Application**: Modern Next.js application with Tailwind CSS for sports club management
- **BMAD Framework Integration**: Comprehensive business methodology with 100+ specialized agent modes
- **Roo Commander**: AI-powered project management and development orchestration system
- **IntelliManage**: Project management system integrated with the BMAD methodology

# Setup Instructions

## Prerequisites
- Node.js 20+ (LTS recommended)
- pnpm 9.0.0+ (specified in packageManager)
- Python 3.9+ (for auth-service package)

## Installation
```bash
# Install dependencies
pnpm install

# Development server (Next.js with Turbopack)
pnpm dev

# Build for production
pnpm build

# Lint all packages
pnpm lint

# Format code
pnpm format
```

## Development Server Configuration
- **Port**: 12000 (configured for external access)
- **Framework**: Next.js 15.3.3 with Turbopack
- **Styling**: Tailwind CSS with 8px grid system
- **UI Components**: Radix UI primitives with custom components

# Repository Structure

## Core Applications
- `/apps/web/` - Main Next.js sports club management application
- `/apps/docs/` - Documentation application

## Shared Packages
- `/packages/ui/` - Shared UI component library
- `/packages/auth-service/` - Authentication service (Python-based)
- `/packages/eslint-config/` - Shared ESLint configuration
- `/packages/typescript-config/` - Shared TypeScript configuration
- `/packages/backlog-generator/` - Project backlog generation tools

## BMAD Framework & Agent System
- `/modes/` - 100+ specialized agent modes organized by category:
  - `agent-*` - Core agent types (analyst, architect, dev, etc.)
  - `framework-*` - Framework-specific agents (nextjs, react, etc.)
  - `design-*` - Design and UI agents (tailwind, shadcn, etc.)
  - `cloud-*` - Cloud platform agents (aws, azure, gcp)
  - `data-*` - Database and data agents
  - `auth-*` - Authentication system agents
  - `test-*` - Testing framework agents
  - `util-*` - Utility and specialized agents

## Documentation & Standards
- `/docs/` - Comprehensive documentation with 9 main sections
- `/docs/standards/` - Development standards and conventions
- `/rules/` - Agent behavior rules and guidelines
- `/repo_docs/` - Repository-specific documentation

## Configuration & Tools
- `/roo-commander/` - AI orchestration and project management tools
- `turbo.json` - Turborepo configuration for monorepo management
- `biome.json` - Code formatting and linting configuration
- `lefthook.yml` - Git hooks configuration
- `commitlint.config.js` - Commit message linting

# CI/CD Workflows

## GitHub Actions
- **`ci.yml`**: Main CI pipeline that runs on push/PR to main
  - Checkout repository
  - Setup Node.js 20 and pnpm 10
  - Cache pnpm store for faster builds
  - Install dependencies with frozen lockfile
  - Setup Python 3.9 for auth-service
  - Run linting across all packages with Turbo

## Build System
- **Turborepo**: Manages monorepo builds with dependency caching
- **Tasks**: `build`, `lint`, `check-types`, `dev` with proper dependency chains
- **Caching**: Optimized build caching with Turbo for faster CI/CD

# Development Guidelines

## Code Quality Standards
- **TypeScript**: Strict type checking enabled across all packages
- **ESLint**: Shared configuration with max 0 warnings policy
- **Prettier**: Consistent code formatting for TS, TSX, and MD files
- **Biome**: Additional linting and formatting rules

## Design System
- **8px Grid System**: All UI components align to 8px boundaries
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Component Architecture**: Radix UI primitives with custom styling
- **Responsive Design**: Mobile-first approach with proper breakpoints

## Git Workflow
- **Conventional Commits**: Enforced via commitlint
- **Feature Branches**: Use `feat/` prefix for new features
- **Pre-commit Hooks**: Automated linting and formatting via lefthook
- **PR Requirements**: All checks must pass before merge

## Testing Strategy
- **Type Checking**: `tsc --noEmit` for compile-time validation
- **Linting**: ESLint with strict rules across all packages
- **Build Validation**: Turbo build verification in CI

## BMAD Methodology Integration
- **Agent-Driven Development**: Use specialized modes for different tasks
- **Structured Documentation**: Follow TOML+MD format standards
- **Session Management**: Proper artifact tracking and version control
- **Multi-Project Support**: Designed for complex project hierarchies

## Package Management
- **pnpm Workspaces**: Efficient dependency management across packages
- **Workspace Protocol**: Internal package references use `workspace:*`
- **Frozen Lockfile**: Ensures consistent dependency versions in CI

## Security Considerations
- **Dependency Scanning**: GitHub Dependabot enabled for vulnerability detection
- **Authentication**: Dedicated auth-service package for secure user management
- **Environment Variables**: Proper handling of sensitive configuration

Always ensure tests pass and code is properly formatted before committing changes. The repository uses a sophisticated agent-based development approach - familiarize yourself with the BMAD methodology and available modes in `/modes/` for optimal development experience.