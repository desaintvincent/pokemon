module.exports = {
    "extends": ["react-app", "standard", "standard-react"],
    "overrides": [
        {
            "files": ["**/*.js"],
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "rules": {
        "react/prop-types": 0
    }
}
