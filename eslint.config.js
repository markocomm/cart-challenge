import antfu from "@antfu/eslint-config"

export default antfu({
  rules: {
    "no-console": "off",
    "ts/consistent-type-definitions": "off",
    "antfu/top-level-function": "off",
    "style/max-len": ["error", { code: 80 }],
    "style/yield-star-spacing": ["error", "after"],
    "style/quotes": ["error", "double"],
    "style/block-spacing": ["error", "always"],
    "style/function-call-argument-newline": ["error", "consistent"],
  },
  ignores: ["**/*.md"],
})
