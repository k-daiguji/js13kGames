import { defineConfig } from "oxlint";

export default defineConfig({
  categories: {
    correctness: "error",
    nursery: "warn",
    pedantic: "warn",
    perf: "warn",
    restriction: "error",
    style: "error",
    suspicious: "error",
  },
  options: {
    typeAware: true,
  },
  plugins: ["import", "jest"],
  rules: {
    "import/no-default-export": "off",
    "import/no-named-export": "off",
    "jest/prefer-expect-assertions": "off",
    "no-magic-numbers": "off",
    "no-ternary": "off",
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: true,
      },
    ],
  },
});
