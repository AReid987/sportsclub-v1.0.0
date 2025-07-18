---
triggers:
- testing
- quality assurance
- qa
- lint
- type check
- code quality
- validation
- ci checks
---

# Testing and Quality Assurance Guidelines

This project emphasizes code quality through comprehensive linting, type checking, and automated validation processes.

## Quality Assurance Strategy

### Multi-Layer Approach
1. **Static Analysis**: TypeScript type checking and ESLint
2. **Code Formatting**: Prettier and Biome for consistent style
3. **Build Validation**: Turbo build verification
4. **Git Hooks**: Pre-commit validation with lefthook
5. **CI/CD Checks**: Automated validation in GitHub Actions

## TypeScript Configuration

### Strict Type Checking
- **Strict Mode**: Enabled across all packages
- **Type Definitions**: Comprehensive interfaces and types
- **Compile-Time Validation**: `tsc --noEmit` for type checking
- **IDE Integration**: Real-time type checking in development

### Type Checking Commands
```bash
# Check types in all packages
turbo check-types

# Check types in specific package
pnpm --filter @sportsclub/web check-types

# Watch mode for development
tsc --noEmit --watch
```

## ESLint Configuration

### Shared Configuration (`/packages/eslint-config/`)
- **Zero Warnings Policy**: `--max-warnings 0` enforced
- **React Rules**: React and React Hooks specific linting
- **TypeScript Rules**: TypeScript-specific linting rules
- **Turbo Rules**: Turborepo-specific optimizations

### Linting Commands
```bash
# Lint all packages
pnpm lint

# Lint specific package
turbo lint --filter=@sportsclub/web

# Fix auto-fixable issues
turbo lint --fix
```

### Key ESLint Rules
- **Import Order**: Consistent import organization
- **Unused Variables**: Prevent unused code
- **React Hooks**: Proper hooks usage validation
- **TypeScript**: Type-aware linting rules

## Code Formatting

### Prettier Configuration
- **Consistent Style**: Automated code formatting
- **File Types**: TypeScript, TSX, and Markdown files
- **Integration**: Works with ESLint for style consistency

### Biome Integration
- **Additional Linting**: Complementary to ESLint
- **Performance**: Fast linting and formatting
- **Configuration**: Defined in `biome.json`

### Formatting Commands
```bash
# Format all files
pnpm format

# Check formatting without fixing
prettier --check '**/*.{ts,tsx,md}'
```

## Git Hooks and Pre-commit Validation

### Lefthook Configuration (`lefthook.yml`)
- **Pre-commit**: Runs linting and formatting checks
- **Commit Message**: Validates commit message format
- **Staged Files**: Only processes staged files for efficiency

### Commit Standards
- **Conventional Commits**: Enforced via commitlint
- **Message Format**: `type(scope): description`
- **Types**: feat, fix, docs, style, refactor, test, chore

## CI/CD Quality Checks

### GitHub Actions Pipeline (`.github/workflows/ci.yml`)
1. **Environment Setup**: Node.js 20, pnpm 10, Python 3.9
2. **Dependency Installation**: Frozen lockfile for consistency
3. **Linting**: Turbo lint across all packages
4. **Type Checking**: TypeScript validation
5. **Build Verification**: Ensure all packages build successfully

### Cache Optimization
- **pnpm Store**: Cached for faster dependency installation
- **Turbo Cache**: Build and lint results cached
- **Node Modules**: Efficient caching strategy

## Manual Testing Guidelines

### Development Testing
- **Hot Reload**: Use development server for immediate feedback
- **Browser Testing**: Test across different browsers and devices
- **Responsive Design**: Verify layouts at different screen sizes
- **Accessibility**: Keyboard navigation and screen reader testing

### Component Testing
- **Visual Verification**: Compare against design specifications
- **Interactive Testing**: Test all user interactions
- **Edge Cases**: Test with various data states
- **Performance**: Monitor for performance regressions

## Build Validation

### Production Builds
```bash
# Build all packages
pnpm build

# Build specific package
turbo build --filter=@sportsclub/web

# Verify build outputs
ls -la apps/web/.next/
```

### Build Optimization
- **Bundle Analysis**: Monitor JavaScript bundle sizes
- **Asset Optimization**: Ensure images and assets are optimized
- **Performance Metrics**: Track build performance over time

## Quality Metrics

### Code Quality Indicators
- **Zero ESLint Warnings**: Maintained across all packages
- **TypeScript Strict Mode**: No type errors allowed
- **Build Success**: All packages must build successfully
- **Consistent Formatting**: Automated formatting enforcement

### Performance Monitoring
- **Build Times**: Track Turbo build performance
- **Bundle Sizes**: Monitor JavaScript bundle growth
- **Development Speed**: Hot reload and development server performance

## Integration with BMAD Framework

### Agent-Driven Quality
- **Automated Validation**: Quality checks integrated into agent workflows
- **Documentation Standards**: Quality guidelines documented in `/docs/standards/`
- **Mode-Specific Rules**: Quality rules defined for different agent modes

### Quality Gates
- **Pre-commit**: Local validation before commits
- **Pull Request**: CI validation before merge
- **Deployment**: Production build validation

## Best Practices

### Development Workflow
1. **Write Code**: Follow TypeScript and ESLint guidelines
2. **Local Testing**: Use development server for immediate feedback
3. **Pre-commit**: Automated validation via git hooks
4. **Pull Request**: CI validation and peer review
5. **Merge**: Only after all quality checks pass

### Continuous Improvement
- **Regular Updates**: Keep linting rules and dependencies updated
- **Team Feedback**: Incorporate team feedback on quality standards
- **Automation**: Continuously improve automated validation
- **Documentation**: Keep quality guidelines up to date

### Troubleshooting Quality Issues
- **ESLint Errors**: Use `--fix` flag for auto-fixable issues
- **Type Errors**: Address TypeScript errors before committing
- **Build Failures**: Check dependency issues and configuration
- **Performance**: Profile and optimize slow builds or tests

Always prioritize code quality and ensure all quality checks pass before committing changes. The comprehensive quality assurance strategy ensures maintainable, reliable, and performant code across the entire monorepo.