import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        name: "description",
        content: "Hello, World!",
      },
    ],
  }),
  component: () => (
    <>
      <div className="flex gap-2 justify-center items-center p-2">
        <h1 className="font-bold text-xl">
          Rsbuild + Tailwind v4 + TanStack Router
        </h1>
        <div className="flex gap-2 pl-4">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
