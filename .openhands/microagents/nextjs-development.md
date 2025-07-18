---
triggers:
- nextjs
- next.js
- react development
- web app
- frontend
- ui components
- tailwind
---

# Next.js Development Guidelines

This project uses **Next.js 15.3.3** with **Turbopack** for the main web application located in `/apps/web/`.

## Development Setup

### Server Configuration
- **Port**: 12000 (configured for external access)
- **Development Command**: `pnpm dev` (uses Turbopack)
- **External Access**: Configured in `next.config.js` for iframe and CORS support
- **Host Binding**: Set to `0.0.0.0` for external accessibility

### Key Technologies
- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS with 8px grid system
- **UI Components**: Radix UI primitives (@radix-ui/react-*)
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics integration

## Project Structure

```
apps/web/
├── app/                 # App Router pages and layouts
├── src/
│   ├── components/      # Reusable UI components
│   └── lib/            # Utility functions and configurations
├── public/             # Static assets
├── next.config.js      # Next.js configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Design System Standards

### 8px Grid System
- **Sidebar Widths**: Collapsed (48px), Expanded (160px)
- **Component Heights**: Menu items (40px), Icons (32px)
- **Spacing**: All margins and padding align to 8px boundaries
- **Implementation**: Use Tailwind classes that align to 8px grid

### Component Architecture
- **Base Components**: Located in `/packages/ui/`
- **App Components**: Located in `/apps/web/src/components/`
- **Styling**: Tailwind CSS with class-variance-authority for variants
- **Accessibility**: Radix UI primitives ensure WCAG compliance

## Development Guidelines

### Code Quality
- **TypeScript**: Strict mode enabled with proper type definitions
- **Linting**: ESLint with `--max-warnings 0` policy
- **Type Checking**: `tsc --noEmit` for compile-time validation
- **Formatting**: Prettier for consistent code style

### Performance Optimization
- **Turbopack**: Fast development builds and hot reloading
- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Use Next.js Image component
- **Bundle Analysis**: Monitor build output for optimization opportunities

### State Management
- **React State**: Use built-in hooks for local state
- **Server State**: Leverage Next.js server components
- **Client State**: Minimize client-side state management
- **Form Handling**: Consider React Hook Form for complex forms

## Common Development Tasks

### Adding New Components
1. Create component in appropriate directory (`/src/components/` or `/packages/ui/`)
2. Follow 8px grid system for spacing and dimensions
3. Use Tailwind classes instead of inline styles
4. Implement proper TypeScript interfaces
5. Add to component exports if shared

### Styling Guidelines
- **Tailwind First**: Use Tailwind utilities over custom CSS
- **Grid Alignment**: Ensure all dimensions align to 8px boundaries
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Dark Mode**: Consider dark mode support in component design
- **Animations**: Use Framer Motion for complex animations, CSS transitions for simple ones

### Testing Approach
- **Type Safety**: Rely on TypeScript for compile-time validation
- **Manual Testing**: Use development server for UI testing
- **Build Validation**: Ensure production builds complete successfully
- **Accessibility**: Test with screen readers and keyboard navigation

## Integration with BMAD Framework

When working on Next.js components:
- Use `framework-nextjs` mode for Next.js-specific guidance
- Apply `design-tailwind` mode for styling decisions
- Reference `design-ui` mode for component architecture
- Follow established patterns in existing components

## Performance Considerations

- **Server Components**: Prefer server components for data fetching
- **Client Components**: Use sparingly with "use client" directive
- **Image Optimization**: Always use Next.js Image component
- **Font Loading**: Optimize web font loading strategies
- **Bundle Size**: Monitor and optimize JavaScript bundle size

Always test your changes with the development server on port 12000 and ensure compatibility with the established 8px grid system and component patterns.