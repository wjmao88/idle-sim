module.exports = {
  rules: {
    "accessor-pairs": 1,
    "eqeqeq": [1, "smart"],
    "no-alert": 2,
    "no-console": 0,
    "no-eval": 2,
    "no-implied-eval": 2,
    "no-label-var": 2,
    "no-self-compare": 1,
    "no-sequences": 1,
    "no-unused-expressions": 1,
    "no-use-before-define": 0,
    "no-useless-call": 1,
    "no-with": 2,
    "quotes": [1, "single"],
    "radix": 1,
    "semi": [2, "always"],
    "yoda": 1,
    "import/default": 0
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  globals: {
    console: false,
    require: false
  },
  extends: [
      "plugin:import/errors",
      "plugin:import/warnings"
  ],
  plugins: [
      "import"
  ],
  settings: {
      "import/resolver": "webpack",
      "import/extensions": ['.js']
  }
}
