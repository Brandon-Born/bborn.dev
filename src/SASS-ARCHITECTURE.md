# SASS Architecture

This document outlines the SASS architecture used in the bborn.dev project to maintain scalable and maintainable styles.

## Overview

We use a component-based architecture with a centralized stylesheet (`styles.scss`) containing shared variables, mixins, and utility classes. Each component has its own SCSS file that imports the shared styles.

## Main Stylesheet Structure

The main `styles.scss` file is organized into the following sections:

1. **Variables**: CSS custom properties (variables) for colors, spacing, typography, etc.
2. **Mixins**: Reusable SASS mixins for common patterns
3. **Reset & Base Styles**: Basic reset and styling for HTML elements
4. **Utilities**: Utility classes that can be used across the application
5. **Components**: Styles for common component patterns
6. **Animations**: Keyframe animations and animation utility classes

## Best Practices

When styling components, follow these best practices:

1. **Use the shared styles**: Import the main stylesheet with `@use '../../styles.scss' as *;`
2. **Leverage mixins**: Use the provided mixins for common patterns
3. **Extend utility classes**: Use `@extend` for utility classes
4. **Component-specific styles**: Only add styles specific to the component
5. **Media queries**: Use the provided media query mixins

## Example Component

```scss
@use '../../styles.scss' as *;

.component-container {
  @include section-container;
  
  .component-header {
    @include section-header;
  }
  
  .component-grid {
    @extend .grid-layout;
  }
  
  .component-card {
    @extend .card;
    // Component-specific styles here
  }
}

// Component-specific styles that don't fit in the patterns
.component-specific {
  // ...
}
```

## Budget Optimization

To avoid exceeding Angular's style budgets:

1. Use mixins and utility classes instead of duplicating styles
2. Keep component-specific styles minimal
3. Move common patterns to the shared stylesheet
4. Use media query mixins to reduce duplication

## Media Queries

Use the provided media query mixins for consistent breakpoints:

```scss
@include mobile {
  // Styles for mobile (max-width: 768px)
}

@include tablet {
  // Styles for tablet (min-width: 769px) and (max-width: 1024px)
}

@include desktop {
  // Styles for desktop (min-width: 1025px)
}
``` 