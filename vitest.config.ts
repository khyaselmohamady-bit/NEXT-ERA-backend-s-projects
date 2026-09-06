import { defineConfig } from "vitest/config";

// SECTION: Test-runner configuration
export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"]
  }
});
// End of section: engine tests run in Node because they are pure backend logic, not browser code.
