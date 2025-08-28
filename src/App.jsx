import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Main = lazy(() => import("./components/Main"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

export default function App() {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" />
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <Suspense>
                <Main />
              </Suspense>
            ),
            children: [
              {
                path: "/",
                element: (
                  <Suspense>
                    <Home />
                  </Suspense>
                ),
              },
              {
                path: "/about",
                element: (
                  <Suspense>
                    <About />
                  </Suspense>
                ),
              },
            ],
          },
        ])}
      />
    </>
  );
}
