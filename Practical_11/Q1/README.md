# Q1: Angular Framework Overview

## What is Angular Framework?

Angular is a popular open-source web application framework developed and maintained by Google. It is used for building dynamic, single-page applications (SPAs) and progressive web apps (PWAs). Angular is based on TypeScript and follows the Model-View-Controller (MVC) architecture pattern, but it's more accurately described as a component-based framework.

Key features of Angular include:
- Component-based architecture
- Two-way data binding
- Dependency injection
- Directives
- Services
- Routing
- Forms handling
- HTTP client for API calls

## Src Folder

The `src` folder is the main source directory of an Angular project. It contains all the application code, assets, and configuration files. The typical structure includes:
- `app/`: Contains the main application components, services, and modules
- `assets/`: Static assets like images, fonts, etc.
- `environments/`: Environment-specific configuration files
- `index.html`: The main HTML file
- `main.ts`: The entry point of the application
- `styles.css`: Global styles

## Assets Folder

The `assets` folder (located inside `src`) is used to store static files that are served directly by the web server. This includes:
- Images
- Fonts
- JSON files
- Icons
- Any other static resources

Files in the assets folder are copied as-is to the dist folder during the build process and can be referenced in the application.

## index.html

The `index.html` file is the single page that hosts the entire Angular application. It serves as the entry point and contains:
- The `<app-root>` selector where the main AppComponent is rendered
- Meta tags for SEO and responsiveness
- Links to external stylesheets and scripts
- The title of the application

During development, Angular's development server serves this file, and in production, it's the file that users access.

## Component Page

In Angular, a component is a building block of the application UI. Each component consists of:
- **TypeScript class**: Contains the component logic, properties, and methods
- **HTML template**: Defines the view structure
- **CSS styles**: Defines the component's appearance
- **Metadata**: Configuration via decorators

Components are reusable and can be nested to create complex UIs. The main component is usually the AppComponent, which is bootstrapped in the application.