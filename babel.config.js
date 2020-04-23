module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry",
                corejs: 3
            }
        ]
    ];

    const plugins = [
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: true
            }
        ]
    ];

    return { presets, plugins };
}