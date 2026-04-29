import React from 'react';

export default function Q1() {
  return (
    <div className="card">
      <h2>Q1: Routing Concepts in React JS</h2>
      
      <div style={{ marginTop: '1.5rem' }}>
        <h4 style={{ color: '#38bdf8' }}>BrowserRouter</h4>
        <p>
          It is the parent component that is used to store all of the other components. It uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL. Without it, routing will not function.
        </p>

        <h4 style={{ color: '#38bdf8' }}>Routes</h4>
        <p>
          Replaces the older "Switch" component from v5. It acts as a container/wrapper for all individual Route components. It examines all its children Route elements to find the best match and renders that branch of the UI.
        </p>

        <h4 style={{ color: '#38bdf8' }}>Route</h4>
        <p>
          It defines a mapping between a URL path and a component. It takes `path` and `element` as props. If the current browser location matches the `path`, the component specified in the `element` prop is rendered.
        </p>

        <h4 style={{ color: '#38bdf8' }}>Link</h4>
        <p>
          It is used to create links to different routes and implement navigation around the application. It acts similarly to an HTML anchor `&lt;a&gt;` tag but prevents the default page reload behavior, ensuring single-page application (SPA) fluidity.
        </p>

        <h4 style={{ color: '#38bdf8' }}>Outlet</h4>
        <p>
          Used in parent route elements to render their child route elements. This allows for nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.
        </p>
      </div>
    </div>
  );
}
