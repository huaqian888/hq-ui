module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:vue/vue3-recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: "@typescript-eslint/parser",
        extraFileExtensions: ["vue"]
    },
    plugins: ["vue", "@typescript-eslint"],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        'vue/multi-word-component-names': 0,
        '@typescript-eslint/no-non-null-assertion': 0
    },
};
