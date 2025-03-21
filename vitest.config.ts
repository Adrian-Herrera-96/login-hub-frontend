import path from "path";

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["vitestSetup.ts"],
    onConsoleLog(log: string, type: "stdout" | "stderr"): boolean | void {
      if (log.includes("Warning:") && type === "stderr") {
        return false;
      }

      return true;
    },
  },
});
