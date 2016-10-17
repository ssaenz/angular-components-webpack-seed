# Angularjs and webpack.
### Example with global variables between components.

This project can works like a seed for angular projects builded with webpack. It shows how we can share global variables between diferents controllers and components. Which it is very useful in projects with isomorphic applications where a framework with templates on the server side is used. like Liferay or Spring.


### How to install?

> $ npm install

### How to pack the solution?

> $ npm run bundle

With this command, the source code will be packed in two bundle files into the `dist/` directory. One for the vendor sources and other one for the app's code. You can see how to use them into the index.html file.

### Next steps for this `startup project`

- Create an script into package.json to run a simple server to serve the solution.
- Add the webpack plugin to minify the generated bundle.
- Add the webpack plugin for work with css files.
