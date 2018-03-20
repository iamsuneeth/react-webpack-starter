// This file is not going through babel transformation.
// So, we write it in vanilla JS.
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
    webpack: (config, { dev, isServer }) => {
        if (!isServer) {
            config.module.rules.push({
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // Emit errors as warnings for dev to not break webpack build.
                    // Eslint errors are shown in console for dev, yay :-)
                    emitWarning: dev,
                },
            });
        }

        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config

        // Important: return the modified config
        return config;
    },
};
