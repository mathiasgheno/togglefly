module.exports = {
  "stories": [
    "../packages/components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react"
}
