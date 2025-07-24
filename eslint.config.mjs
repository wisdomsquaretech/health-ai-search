import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals"),
    // ✅ Add rule overrides here
  {
    rules: {
      '@next/next/no-page-custom-font': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
