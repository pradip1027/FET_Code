# Q3: Difference between app.config.ts and app.routes.ts

## app.config.ts

The `app.config.ts` file is the main configuration file for an Angular application. It defines the application-wide configuration using the `ApplicationConfig` interface.

### Purpose:
- Sets up global providers and services
- Configures the application's dependency injection container
- Defines application-level settings

### Key Features:
- Exports an `ApplicationConfig` object
- Contains a `providers` array with various providers
- In this example, it provides:
  - `provideBrowserGlobalErrorListeners()`: For global error handling
  - `provideRouter(routes)`: Sets up the router with the defined routes

### Usage:
This configuration is used when bootstrapping the application in `main.ts`.

## app.routes.ts

The `app.routes.ts` file defines the routing configuration for the Angular application.

### Purpose:
- Defines the navigation paths and their corresponding components
- Configures route guards, resolvers, and other routing features
- Maps URLs to components

### Key Features:
- Exports a `routes` array of type `Routes`
- Each route object can contain:
  - `path`: The URL path
  - `component`: The component to load
  - `redirectTo`: For redirects
  - `children`: Nested routes
  - Guards, resolvers, etc.

### Usage:
The routes are imported and provided in `app.config.ts` via `provideRouter(routes)`.

## Key Differences:

1. **Function**:
   - `app.config.ts`: Application-wide configuration and dependency injection setup
   - `app.routes.ts`: URL routing and navigation configuration

2. **Content**:
   - `app.config.ts`: Providers, services, and global settings
   - `app.routes.ts`: Route definitions with paths and components

3. **Dependency**:
   - `app.config.ts`: Imports routes from `app.routes.ts`
   - `app.routes.ts`: Independent, defines routing logic

4. **Scope**:
   - `app.config.ts`: Affects the entire application
   - `app.routes.ts`: Affects navigation and component loading

5. **Bootstrapping**:
   - `app.config.ts`: Used directly in `main.ts` for app initialization
   - `app.routes.ts`: Used indirectly through `app.config.ts`

In modern Angular applications, this separation allows for better organization and modularity of configuration concerns.