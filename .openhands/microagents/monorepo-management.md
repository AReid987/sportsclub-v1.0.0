---
triggers:
- monorepo
- turborepo
- turbo
- workspace
- pnpm
- package management
- build system
---

# Monorepo Management Guidelines

This project uses **Turborepo** with **pnpm workspaces** for efficient monorepo management.

## Repository Structure

### Workspaces Configuration
```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### Applications (`/apps/`)
- **`web/`**: Main Next.js sports club management application
- **`docs/`**: Documentation application

### Packages (`/packages/`)
- **`ui/`**: Shared UI component library
- **`auth-service/`**: Python-based authentication service
- **`eslint-config/`**: Shared ESLint configuration
- **`typescript-config/`**: Shared TypeScript configuration
- **`backlog-generator/`**: Project backlog generation tools

## Package Manager: pnpm

### Key Benefits
- **Efficient Storage**: Shared dependencies across workspaces
- **Fast Installs**: Content-addressable storage
- **Strict Dependencies**: Prevents phantom dependencies
- **Workspace Protocol**: Internal package linking with `workspace:*`

### Common Commands
```bash
# Install all dependencies
pnpm install

# Install dependency to specific workspace
pnpm add <package> --filter @sportsclub/web

# Run command in specific workspace
pnpm --filter @sportsclub/web dev

# Run command in all workspaces
pnpm -r build
```

## Turborepo Configuration

### Task Pipeline (`turbo.json`)
```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### Task Execution
- **Dependency Order**: `^build` ensures dependencies build first
- **Caching**: Intelligent caching for faster subsequent runs
- **Parallel Execution**: Runs tasks in parallel when possible
- **Output Tracking**: Tracks build outputs for cache invalidation

## Development Workflow

### Starting Development
```bash
# Start all development servers
pnpm dev

# Start specific application
pnpm --filter @sportsclub/web dev
```

### Building Projects
```bash
# Build all projects
pnpm build

# Build specific project
turbo build --filter=@sportsclub/web
```

### Linting and Quality Checks
```bash
# Lint all packages
pnpm lint

# Type check all packages
turbo check-types

# Format all code
pnpm format
```

## Package Dependencies

### Internal Dependencies
- Use `workspace:*` protocol for internal package references
- Example: `"@sportsclub/ui": "workspace:*"`
- Ensures latest local version is always used

### External Dependencies
- Install at workspace root for shared dependencies
- Install in specific packages for package-specific needs
- Use exact versions in package.json for consistency

## CI/CD Integration

### GitHub Actions Optimization
- **pnpm Cache**: Caches pnpm store for faster CI builds
- **Frozen Lockfile**: Uses `--frozen-lockfile` for reproducible builds
- **Turbo Cache**: Leverages Turbo's caching in CI environment

### Build Optimization
- **Incremental Builds**: Only rebuilds changed packages
- **Dependency Tracking**: Automatic dependency resolution
- **Output Caching**: Reuses build outputs when possible

## Best Practices

### Package Organization
- **Single Responsibility**: Each package has a clear, focused purpose
- **Minimal Dependencies**: Avoid unnecessary cross-package dependencies
- **Consistent Naming**: Use `@sportsclub/` namespace for all packages

### Development Efficiency
- **Workspace Commands**: Use pnpm workspace commands for targeted operations
- **Turbo Filters**: Use Turbo filters to run tasks on specific packages
- **Cache Utilization**: Leverage Turbo's caching for faster development cycles

### Dependency Management
- **Version Consistency**: Keep shared dependencies at consistent versions
- **Peer Dependencies**: Use peer dependencies for shared libraries
- **Dev Dependencies**: Install dev tools at workspace root when possible

## Troubleshooting

### Common Issues
- **Cache Problems**: Run `turbo prune` to clear Turbo cache
- **Dependency Issues**: Run `pnpm install --frozen-lockfile` to reset
- **Build Failures**: Check dependency order and build outputs

### Performance Optimization
- **Selective Builds**: Use filters to build only necessary packages
- **Cache Warming**: Run builds locally to warm CI cache
- **Dependency Analysis**: Use `pnpm why` to understand dependency trees

## Integration with BMAD Framework

The monorepo structure supports the BMAD methodology by:
- **Modular Architecture**: Separate packages for different concerns
- **Agent Integration**: Specialized modes can work with specific packages
- **Documentation Standards**: Consistent structure across all packages
- **Build Orchestration**: Coordinated builds across the entire system

Always consider the impact of changes across the entire monorepo and use appropriate workspace commands for efficient development.