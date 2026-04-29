# Q2: Component Decorators and Metadata

## Component Decorators

In Angular, decorators are functions that modify JavaScript classes. The `@Component` decorator is used to mark a class as an Angular component and provide metadata that tells Angular how to process the class.

The `@Component` decorator is imported from `@angular/core` and is applied to the class using the `@Component({...})` syntax.

## Metadata Information of AppComponent Class

Looking at the AppComponent class in `src/app/app.ts`, the metadata includes:

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
```

### Explanation of Metadata Properties:

1. **selector**: 
   - Defines the CSS selector that identifies this component in a template
   - `'app-root'` means this component can be used as `<app-root></app-root>` in HTML
   - This is how Angular knows where to render the component

2. **imports**:
   - An array of modules, components, directives, or pipes that this component needs
   - `RouterOutlet` is imported for routing functionality
   - In standalone components (Angular 14+), imports are used instead of module declarations

3. **templateUrl**:
   - Points to the HTML template file for this component
   - `'./app.html'` refers to the template file in the same directory
   - Defines the UI structure of the component

4. **styleUrl**:
   - Points to the CSS stylesheet file for this component
   - `'./app.css'` refers to the stylesheet file in the same directory
   - Defines the styling for this component

### Other Common Metadata Properties:

- **template**: Inline template as a string (alternative to templateUrl)
- **styles**: Inline styles as an array of strings (alternative to styleUrl)
- **standalone**: Boolean indicating if this is a standalone component (default: true in newer Angular)
- **changeDetection**: Strategy for change detection
- **encapsulation**: View encapsulation mode

The class itself contains the component's logic, properties, and methods. In this case, it has a `title` property using Angular's signal API for reactive state management.