# Brandon Born's Portfolio Website

This is my personal portfolio website showcasing my projects, services, and blog. Visit the live site at [bborn.dev](https://bborn.dev).

## 🚀 Features

- Modern, responsive design with dark mode support
- Service showcase with detailed service pages
- Project portfolio with filtering capabilities
- Blog integration
- Newsletter subscription
- Contact form
- Social media integration

## 🛠️ Technology Stack

- Angular 17+ (Angular CLI version 19.1.7)
- TypeScript
- SCSS
- Angular Material
- Angular Animations

## 🤖 AI-Powered Development

This website was developed 100% using AI tools, primarily Claude from Anthropic, with human direction and oversight. It serves as a demonstration of how AI can be leveraged to create professional, full-featured web applications efficiently and effectively.

### AI Development Features:
- Complete codebase generation using AI
- Modern Angular architecture and best practices
- Responsive design and dark mode support
- SEO optimization
- Accessibility compliance
- Performance optimization

## 💻 Development

### Development server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm test
# or
ng test
```

### Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## 🚀 Production Deployment

To build and package this application for production deployment, use one of the following methods:

### Using npm scripts:
```bash
# Build for production
npm run build:prod

# Build and create compressed files
npm run deploy
```

### Using deployment scripts:
For a complete automated deployment process, run the deployment script appropriate for your OS:

**On Windows (PowerShell):**
```powershell
./deploy.ps1
```

**On Linux/macOS (Bash):**
```bash
chmod +x ./deploy.sh
./deploy.sh
```

The deployment scripts will:
1. Install all dependencies
2. Build the application with production optimization
3. Create compressed versions of assets for better performance
4. Package everything into a timestamped ZIP file ready for deployment

The output will be available in the `dist/` directory and as a ZIP archive in the project root.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
