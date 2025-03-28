import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 shadow-md max-w-2xl">
        <h2 className="text-3xl font-extrabold text-gray-100 mb-6">
          About This Project
        </h2>

        <p className="text-lg text-gray-50 mb-4">
          This project is a React application built using:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-50">
          <li>
            <strong>Rsbuild:</strong> A fast and powerful build tool.
          </li>
          <li>
            <strong>Tailwind CSS v4:</strong> A utility-first CSS framework.
          </li>
          <li>
            <strong>TanStack Router:</strong> A type-safe, declarative routing
            library for React.
          </li>
          <li>
            <strong>Biome:</strong> A fast linter, formatter and bundler for
            JavaScript, TypeScript, and more.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Scripts (package.json)
        </h3>

        <p className="text-gray-50 mb-2">
          Here's a breakdown of the scripts defined in <code>package.json</code>
          :
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-50">
          <li>
            <strong>
              <code>pnpm build</code>:
            </strong>{" "}
            Builds the production-ready application using Rsbuild.
          </li>
          <li>
            <strong>
              <code>pnpm check</code>:
            </strong>{" "}
            Runs Biome to check for linting errors and automatically fixes them.
          </li>
          <li>
            <strong>
              <code>pnpm dev</code>:
            </strong>{" "}
            Starts the Rsbuild development server with hot reloading and opens
            the application in your browser.
          </li>
          <li>
            <strong>
              <code>pnpm format</code>:
            </strong>{" "}
            Runs Biome to format your code according to the configured rules.
          </li>
          <li>
            <strong>
              <code>pnpm preview</code>:
            </strong>{" "}
            Starts a local server to preview the production build.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Dependencies
        </h3>

        <p className="text-gray-50 mb-2">
          This project relies on the following key dependencies:
        </p>

        <ul className="list-disc list-inside mb-6 text-gray-50">
          <li>
            <strong>
              <code>@tanstack/react-router</code>:
            </strong>{" "}
            For routing and navigation.
          </li>
          <li>
            <strong>
              <code>react</code> and <code>react-dom</code>:
            </strong>{" "}
            The core React libraries.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-100 mb-4">
          Development Dependencies
        </h3>

        <p className="text-gray-50 mb-2">Development dependencies include:</p>

        <ul className="list-disc list-inside text-gray-50">
          <li>
            <strong>
              <code>@biomejs/biome</code>:
            </strong>{" "}
            For linting and formatting.
          </li>
          <li>
            <strong>
              <code>@rsbuild/core</code> and <code>@rsbuild/plugin-react</code>:
            </strong>{" "}
            For building and React support in Rsbuild.
          </li>
          <li>
            <strong>
              <code>tailwindcss</code> and <code>@tailwindcss/postcss</code>:
            </strong>{" "}
            For using Tailwind CSS.
          </li>
          <li>
            <strong>
              <code>@tanstack/react-router-devtools</code>:
            </strong>{" "}
            For debugging TanStack Router.
          </li>
          <li>
            <strong>
              <code>@tanstack/router-plugin</code>:
            </strong>{" "}
            Router plugin.
          </li>
          <li>
            <strong>
              <code>@types/react</code> and <code>@types/react-dom</code>:
            </strong>{" "}
            TypeScript type definitions for React.
          </li>
          <li>
            <strong>
              <code>typescript</code>:
            </strong>{" "}
            For type checking.
          </li>
        </ul>
      </div>
    </div>
  );
}
