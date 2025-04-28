# Component Architecture

This document outlines the structure and connections of the Angular components within this project.

## Core Components

These components form the main layout and are present on most pages.

*   **`AppComponent` (`src/app/app.component.ts`)**
    *   **Role:** The root component and main application shell.
    *   **Connections:**
        *   Hosts `HeaderComponent` and `FooterComponent`.
        *   Contains the primary `<router-outlet>` where page-level components are rendered based on the current route.
        *   Manages the initial loading state to prevent layout flashes.
        *   Initializes global theme settings and listeners.
*   **`HeaderComponent` (`src/app/core/header/header.component.ts`)**
    *   **Role:** Displays the main site navigation and logo.
    *   **Connections:**
        *   Provides navigation links using `routerLink`.
        *   Includes theme toggling functionality (light/dark mode).
        *   Handles the mobile navigation menu display and interactions.
*   **`FooterComponent` (`src/app/core/footer/footer.component.ts`)**
    *   **Role:** Displays site information, copyright, social links, and potentially a newsletter signup.
    *   **Connections:**
        *   Contains static information and external links.
        *   May include form elements (e.g., newsletter signup).

## Page-Level Components (Routed Components)

These components represent the main content areas for different sections of the site, loaded via the Angular Router. They are typically loaded into the `AppComponent`'s `<router-outlet>`.

*   **`HomeComponent` (`src/app/home/home.component.ts`)**
    *   **Role:** The main landing page of the website. Likely showcases key information, projects, or calls to action.
    *   **Connections:** May link to other sections like Projects, Services, or Contact.
*   **`ProjectsListComponent` (`src/app/projects/projects-list/projects-list.component.ts`)**
    *   **Role:** Displays a list or grid of projects. Includes filtering/sorting functionality by category and tags.
    *   **Connections:**
        *   Fetches project data (likely via a `ProjectService`).
        *   Links to individual project details using `[routerLink]="['/projects', project.id]"`.
*   **`ProjectDetailComponent` (`src/app/projects/project-detail/project-detail.component.ts`)** (Assumed path)
    *   **Role:** Displays detailed information about a single project, identified by a route parameter (e.g., `/projects/:id`).
    *   **Connections:** Fetches data for a specific project based on the route parameter (likely via `ProjectService`).
*   **`ServicesComponent` (`src/app/services/services.component.ts`)**
    *   **Role:** Describes the services offered.
    *   **Connections:** May link to a `ServiceDetailComponent` or the `ContactComponent`.
*   **`ServiceDetailComponent` (`src/app/services/service-detail/service-detail.component.ts`)** (Assumed path)
    *   **Role:** Displays detailed information about a specific service.
    *   **Connections:** May link to the `ContactComponent`.
*   **`AboutComponent` (`src/app/about/about.component.ts`)**
    *   **Role:** Provides information about the developer, company, or project background.
    *   **Connections:** Primarily displays static content.
*   **`ContactComponent` (`src/app/contact/contact.component.ts`)**
    *   **Role:** Provides contact information and a form for users to send messages. Includes FAQ section.
    *   **Connections:** Handles form submission, potentially interacting with a backend service or email API.
*   **`BlogListComponent` (`src/app/blog/blog-list/blog-list.component.ts`)**
    *   **Role:** Displays a list of blog posts with filtering options (e.g., by category).
    *   **Connections:**
        *   Fetches blog post data (likely via a `BlogService`).
        *   Links to individual blog posts using `[routerLink]="['/blog', post.id]"`.
*   **`BlogPostComponent` (`src/app/blog/blog-post/blog-post.component.ts`)** (Assumed path)
    *   **Role:** Displays the full content of a single blog post, identified by a route parameter (e.g., `/blog/:id`).
    *   **Connections:** Fetches data for a specific blog post based on the route parameter (likely via `BlogService`).

## Shared Components

These might exist within `src/app/shared/` or specific feature modules for reuse. (Further analysis needed if specific shared components are relevant).

## Routing

*   **`app.routes.ts` (`src/app/app.routes.ts`)**: Defines the main application routes, mapping URL paths (e.g., `/home`, `/projects`, `/projects/:id`) to their corresponding page-level components. Lazy loading might be configured here or in feature-specific routing modules (`projects.module.ts`, `blog.module.ts`, etc.).

## Services

*   **Located in `src/app/services/`**: Services encapsulate reusable business logic, data fetching, or utility functions.
    *   **Examples (Inferred):** `ProjectService` (to manage project data), `BlogService` (to manage blog data), `ContactService` (to handle form submissions), `ThemeService` (potentially, though theme logic seems distributed currently).
    *   **Connections:** Services are typically injected into components via the constructor to provide data or functionality.

## Data Flow Summary

1.  User navigates to a URL.
2.  Angular Router matches the URL to a route defined in `app.routes.ts` (or a lazy-loaded module's routes).
3.  The corresponding page-level component (e.g., `ProjectsListComponent`) is instantiated.
4.  The component is rendered inside `AppComponent`'s `<router-outlet>`.
5.  If needed, the component injects Services (e.g., `ProjectService`) to fetch data.
6.  The component binds the fetched data to its template (`.html`) for display.
7.  `HeaderComponent` and `FooterComponent` remain constant around the routed component's content. 