// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'index.js', // Entry file
    output: {
        file: 'dist/bimsc-knack-interface.bundle.js', // Output file for ES module
        format: 'es', // ES module format
        sourcemap: true // Generate sourcemaps
    },
    plugins: [
        resolve(), // Allows Rollup to find and bundle third-party dependencies
        commonjs(), // Converts CommonJS modules to ES6 for Rollup
        // terser() // Minifies the bundle
    ]
};
