---
triggers:
- design system
- 8px grid
- tailwind
- ui components
- styling
- design tokens
- spacing
- layout
---

# Design System Guidelines

This project implements a comprehensive design system based on an **8px grid system** with **Tailwind CSS** and **Radix UI** components.

## 8px Grid System

### Core Principle
All dimensions, spacing, and layout elements align to 8px boundaries for visual consistency and mathematical harmony.

### Implementation Examples
- **Sidebar Widths**: Collapsed (48px = 6×8px), Expanded (160px = 20×8px)
- **Component Heights**: Menu items (40px = 5×8px), Icons (32px = 4×8px)
- **Spacing**: Margins and padding use 8px increments (8px, 16px, 24px, 32px)

### Tailwind Mapping
```css
/* 8px grid aligned Tailwind classes */
.space-1  /* 4px - half grid */
.space-2  /* 8px - 1 grid unit */
.space-4  /* 16px - 2 grid units */
.space-6  /* 24px - 3 grid units */
.space-8  /* 32px - 4 grid units */
```

## Component Architecture

### Base Components (`/packages/ui/`)
- **Radix Primitives**: Accessible, unstyled components
- **Custom Styling**: Tailwind CSS with consistent design tokens
- **Variant System**: class-variance-authority for component variants

### Application Components (`/apps/web/src/components/`)
- **Composed Components**: Built from base components
- **Business Logic**: Application-specific functionality
- **Layout Components**: Page structure and navigation

## Styling Standards

### Tailwind CSS Configuration
- **Custom Grid**: Configured for 8px alignment
- **Design Tokens**: Consistent colors, typography, and spacing
- **Responsive Design**: Mobile-first breakpoint system
- **Dark Mode**: Support for light/dark theme switching

### Component Styling Approach
1. **Tailwind First**: Use utility classes over custom CSS
2. **Grid Alignment**: Ensure all dimensions align to 8px boundaries
3. **Semantic Classes**: Use meaningful class combinations
4. **Responsive Design**: Mobile-first with proper breakpoints

## Typography System

### Font Hierarchy
- **Headings**: Clear hierarchy with proper line heights
- **Body Text**: Optimized for readability
- **UI Text**: Consistent sizing for interface elements
- **Code**: Monospace fonts for technical content

### Implementation
```tsx
// Example typography classes
<h1 className="text-3xl font-bold leading-tight">  // 32px height
<h2 className="text-2xl font-semibold">           // 24px height
<p className="text-base leading-relaxed">         // 16px base with good line height
```

## Color System

### Color Palette
- **Primary**: Brand colors for main actions and highlights
- **Secondary**: Supporting colors for secondary actions
- **Neutral**: Grays for text, borders, and backgrounds
- **Semantic**: Success, warning, error, and info colors

### Usage Guidelines
- **Contrast**: Ensure WCAG AA compliance for text contrast
- **Consistency**: Use defined color tokens consistently
- **Accessibility**: Consider color blindness and low vision users

## Spacing and Layout

### Spacing Scale
```css
/* 8px grid spacing scale */
space-2:  8px   (1 grid unit)
space-4:  16px  (2 grid units)
space-6:  24px  (3 grid units)
space-8:  32px  (4 grid units)
space-12: 48px  (6 grid units)
space-16: 64px  (8 grid units)
```

### Layout Patterns
- **Container**: Consistent max-widths and centering
- **Grid**: CSS Grid for complex layouts
- **Flexbox**: Flexible component layouts
- **Stack**: Vertical spacing between elements

## Component Guidelines

### Sidebar Component Example
```tsx
// Collapsed state: 48px (6×8px)
<div className="w-12 transition-all duration-300">
  
// Expanded state: 160px (20×8px)  
<div className="w-40 transition-all duration-300">

// Menu items: 40px height (5×8px)
<button className="h-10 px-4 w-full">
```

### Button System
- **Heights**: 32px (small), 40px (medium), 48px (large)
- **Padding**: Horizontal padding maintains grid alignment
- **States**: Hover, focus, active, and disabled states
- **Variants**: Primary, secondary, outline, ghost

### Form Components
- **Input Heights**: 40px (5×8px) for optimal touch targets
- **Label Spacing**: 8px gap between labels and inputs
- **Field Spacing**: 24px (3×8px) between form fields
- **Validation**: Consistent error and success states

## Animation and Transitions

### Transition Standards
- **Duration**: 300ms for most UI transitions
- **Easing**: Use CSS easing functions for natural motion
- **Properties**: Transform and opacity for performance
- **Reduced Motion**: Respect user preferences

### Implementation
```tsx
// Standard transition classes
className="transition-all duration-300 ease-in-out"

// Framer Motion for complex animations
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.3 }}
>
```

## Accessibility Standards

### WCAG Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Touch Targets**: Minimum 44px for touch interfaces

### Implementation
- **Radix UI**: Provides accessible primitives out of the box
- **Semantic HTML**: Use proper HTML elements for meaning
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible

## Development Workflow

### Component Creation
1. **Design Tokens**: Use established spacing and color tokens
2. **Grid Alignment**: Ensure all dimensions align to 8px grid
3. **Responsive Design**: Test across different screen sizes
4. **Accessibility**: Verify keyboard and screen reader support

### Quality Assurance
- **Visual Testing**: Compare against design specifications
- **Grid Validation**: Use browser dev tools to verify alignment
- **Accessibility Testing**: Use automated and manual testing tools
- **Cross-browser Testing**: Ensure consistency across browsers

## Integration with BMAD Framework

The design system supports the BMAD methodology by:
- **Consistency**: Standardized components across all applications
- **Efficiency**: Reusable components reduce development time
- **Quality**: Built-in accessibility and responsive design
- **Maintainability**: Centralized design tokens and components

Always reference the established design system when creating new components or modifying existing ones. Maintain the 8px grid alignment and use the defined color and typography tokens for consistency.