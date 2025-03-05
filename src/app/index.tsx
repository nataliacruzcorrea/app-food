import React from "react";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import App from "@/app/app";

export default function Index() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
