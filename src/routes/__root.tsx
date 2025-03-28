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
      <div className="bg-gray-900 text-white border-b-2 flex gap-2 justify-center items-center p-2">
        <Link to="/" className="[&.active]:font-bold">
          Rsbuild
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
