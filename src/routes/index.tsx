import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-md">
        <h3 className="text-4xl font-extrabold text-gray-50 mb-4">
          Welcome to Rsbuild + Tailwind v4 + TanStack Router!
        </h3>
        <p className="text-lg text-gray-100 mb-6">
          This is your homepage. You can start building your awesome application
          from here.
        </p>
        <div className="flex justify-center">
          <a
            href="/about"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
