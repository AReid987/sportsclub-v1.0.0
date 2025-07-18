# 🚀 Sportsclub CI/CD Pipeline

This directory contains the complete CI/CD pipeline configuration for the Sportsclub platform using GitHub Actions.

## 📋 Workflow Overview

### 🔄 Main CI Pipeline (`ci.yml`)
**Triggers**: Push to `main`/`develop`, Pull Requests
**Purpose**: Comprehensive testing and validation

**Jobs**:
- **🔍 Change Detection**: Optimizes pipeline by detecting which parts of the monorepo changed
- **🧹 Lint & Format**: ESLint and Prettier validation
- **🔍 Type Check**: TypeScript compilation validation
- **🧪 Test**: Unit and integration tests with database services
- **🏗️ Build**: Build verification for all applications
- **🔒 Security**: Vulnerability scanning with Trivy
- **📋 Summary**: Comprehensive results reporting

**Features**:
- ✅ Turborepo integration with caching
- ✅ Parallel job execution
- ✅ Database services (PostgreSQL, Redis)
- ✅ Multi-language support (Node.js, Python)
- ✅ Artifact uploading
- ✅ Code coverage reporting

### 🚀 Staging Deployment (`deploy-staging.yml`)
**Triggers**: Push to `develop`, Manual dispatch
**Purpose**: Automated staging environment deployment

**Jobs**:
- **🔍 Pre-deployment Checks**: Validation before deployment
- **🌐 Frontend Deployment**: Vercel deployment with environment-specific config
- **🔧 Backend Deployment**: Docker container deployment for all microservices
- **🏥 Health Checks**: Comprehensive service health validation
- **📢 Notifications**: Deployment status notifications

**Features**:
- ✅ Environment-specific configurations
- ✅ Docker multi-service deployment
- ✅ Health check validation
- ✅ Rollback capabilities
- ✅ PR comment integration

### 🚀 Production Deployment (`deploy-production.yml`)
**Triggers**: Push to `main`, Tags (`v*`), Manual dispatch
**Purpose**: Production deployment with enhanced security

**Jobs**:
- **🔍 Pre-deployment Validation**: Security and authorization checks
- **🔒 Security Scanning**: Comprehensive security validation
- **🌐 Frontend Deployment**: Production Vercel deployment
- **🔧 Backend Deployment**: Production container deployment
- **🗄️ Database Migration**: Automated database updates
- **🏥 Health Checks**: Production service validation
- **🔄 Rollback**: Automatic rollback on failure
- **📦 Release Creation**: GitHub release generation

**Features**:
- ✅ Enhanced security scanning
- ✅ Database migration automation
- ✅ Automatic rollback on failure
- ✅ GitHub release creation
- ✅ Production health monitoring

### 🔒 Security Scanning (`security.yml`)
**Triggers**: Daily schedule, Push, Pull Requests, Manual dispatch
**Purpose**: Continuous security monitoring

**Jobs**:
- **🔍 Dependency Scan**: npm audit for vulnerability detection
- **🔍 Code Security**: CodeQL analysis for code vulnerabilities
- **🐳 Container Scan**: Trivy scanning for container vulnerabilities
- **🔐 Secrets Detection**: TruffleHog for exposed secrets
- **📄 License Compliance**: License compatibility checking
- **📊 Security Report**: Comprehensive security status reporting

**Features**:
- ✅ Multi-layer security scanning
- ✅ SARIF report integration
- ✅ Daily automated scans
- ✅ Security issue notifications

### 📦 Release Management (`release.yml`)
**Triggers**: Manual dispatch with version selection
**Purpose**: Automated release creation and deployment

**Jobs**:
- **🎯 Release Preparation**: Version calculation and changelog generation
- **🧪 Full Test Suite**: Comprehensive testing before release
- **📦 Release Creation**: GitHub release with automated versioning
- **🚀 Deployment Trigger**: Automatic production deployment

**Features**:
- ✅ Semantic versioning (major/minor/patch)
- ✅ Automated changelog generation
- ✅ Pre-release support
- ✅ Comprehensive testing
- ✅ Automatic deployment triggering

## 🛠️ Setup Requirements

### Repository Secrets
Configure these secrets in your GitHub repository:

#### Turborepo
- `TURBO_TOKEN`: Turborepo Remote Cache token
- `TURBO_TEAM`: Turborepo team identifier

#### Vercel (Frontend Deployment)
- `VERCEL_TOKEN`: Vercel deployment token
- `VERCEL_ORG_ID`: Vercel organization ID
- `VERCEL_PROJECT_ID`: Vercel project ID

#### Container Registry
- `CONTAINER_REGISTRY`: Container registry URL
- `CONTAINER_REGISTRY_USERNAME`: Registry username
- `CONTAINER_REGISTRY_PASSWORD`: Registry password
- `PRODUCTION_REGISTRY`: Production registry URL
- `PRODUCTION_REGISTRY_USERNAME`: Production registry username
- `PRODUCTION_REGISTRY_PASSWORD`: Production registry password

#### Environment URLs
- `STAGING_API_URL`: Staging API base URL
- `STAGING_FRONTEND_URL`: Staging frontend URL
- `PRODUCTION_API_URL`: Production API base URL

#### External Services
- `CODECOV_TOKEN`: Code coverage reporting token
- `ANALYTICS_ID`: Analytics service ID

### Repository Variables
Configure these variables in your GitHub repository:

- `TURBO_TEAM`: Turborepo team name

### Environment Protection
Set up environment protection rules:

#### Staging Environment
- **Required reviewers**: 1
- **Deployment branches**: `develop`

#### Production Environment
- **Required reviewers**: 2
- **Deployment branches**: `main`, `v*` tags
- **Wait timer**: 5 minutes

## 🔧 Local Development

### Running CI Locally
```bash
# Install dependencies
pnpm install

# Run full CI pipeline
pnpm run ci

# Individual steps
pnpm run lint
pnpm run check-types
pnpm run test
pnpm run build
```

### Testing Workflows
```bash
# Install act for local GitHub Actions testing
brew install act

# Run CI workflow locally
act -j lint-and-format

# Run with secrets
act -j build --secret-file .secrets
```

## 📊 Monitoring & Observability

### Build Status
- **CI Pipeline**: Visible in PR checks and repository Actions tab
- **Deployment Status**: Environment-specific status in repository
- **Security Scans**: Security tab with vulnerability reports

### Notifications
- **PR Comments**: Deployment URLs and status updates
- **GitHub Releases**: Automated release notes and changelogs
- **Security Alerts**: Automated security issue notifications

### Metrics
- **Build Times**: Tracked in workflow summaries
- **Test Coverage**: Reported via Codecov
- **Security Score**: Tracked in security dashboard

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
1. Check dependency installation logs
2. Verify Turborepo cache status
3. Review test failure details
4. Check TypeScript compilation errors

#### Deployment Failures
1. Verify environment secrets configuration
2. Check container registry authentication
3. Review health check endpoints
4. Validate environment-specific configurations

#### Security Scan Failures
1. Review vulnerability reports in Security tab
2. Update dependencies with known vulnerabilities
3. Check for exposed secrets in code
4. Verify license compatibility

### Getting Help
- **GitHub Issues**: Report pipeline issues
- **Documentation**: Refer to individual workflow files
- **Team Chat**: Contact DevOps team for urgent issues

---

**Maintained by**: Sportsclub DevOps Team  
**Last Updated**: 2025-07-18  
**Version**: 1.0.0
