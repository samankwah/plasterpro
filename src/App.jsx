import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  <ScrollToTop />;
  <ScrollToTopButton />;
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
