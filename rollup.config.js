// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'index.js', // Change this to your entry file
    output: {
        file: 'dist/bimsc-knack-interface.bundle.js', // Output file
        format: 'iife', // Immediately Invoked Function Expression, suitable for browsers
        name: 'knackInterface', // The name of the global variable for your library
        sourcemap: true // Generate sourcemaps
    },
    plugins: [
        resolve(), // Allows Rollup to find and bundle third-party dependencies
        commonjs(), // Converts CommonJS modules to ES6 for Rollup
        terser() // Minifies the bundle
    ]
};
