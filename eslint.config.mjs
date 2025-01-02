import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// The only rules from init NextJS project
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// GPT suggested
// const eslintConfig = [
//   ...compat.extends(
//     'next/core-web-vitals',
//     'next/typescript',
//     'plugin:jest/recommended',
//     'plugin:testing-library/react',
//     'plugin:jsx-a11y/recommended'
//   ),
//   {
//     rules: {
//       'react/jsx-key': 'warn',
//       'testing-library/no-debug': 'warn',
//       'jest/no-disabled-tests': 'warn',
//     },
//   },
// ];

export default eslintConfig;
