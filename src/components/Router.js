// src/components/Router.js
import { useState, useEffect } from "react";

// Navigate function for programmatic routing
export function navigate(path) {
  window.location.hash = `#/${path}`;
}

export const Router = ({ children }) => {
  const [path, setPath] = useState(getCurrentPath());

  useEffect(() => {
    const onHashChange = () => setPath(getCurrentPath());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  function getCurrentPath() {
    const hash = window.location.hash.replace("#/", ""); // remove #/
    return hash || "home"; // default is home
  }

  // Split path into segments for params
  const segments = path.split("/");
  const currentPath = segments[0];
  const params = segments.slice(1);

  return children({ currentPath: path, params });
};
