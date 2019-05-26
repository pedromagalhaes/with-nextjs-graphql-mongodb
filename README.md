# Next.js, GraphQL, Apollo and MongoDB

Full stack application with Website, Dashboard and Backoffice.

Features:
- Connection to MongoDB
- Apollo and GraphQL queries, mutations, resolvers
- Authentication with Passport and Express Session
- Form validation with Formik
- Setup loaders in Webpack
- Setup dynamic and custom routes in Next.js
- Setup Semantic UI React as UI framework
- Setup ESLint, StyleLint, Prettier
- Setup Husky for pre-commit


## 🧘 Quick Start

1. **Install and switch to the correct version of Node using NVM**

   ```sh
   nvm install
   ```

2. **Install dependencies**

   ```sh
   yarn install
   ```

3. **Start the development server**

   ```sh
   yarn dev
   ```

## 🧐 What's inside?

A quick look at the top-level files and directories in this project.

    ├── node_modules
    ├── .gitignore
    ├── .prettierrc
    ├── LICENSE
    ├── README.md
    └── yarn.lock

1. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2. **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

3. **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

4. **`LICENSE`**: Next.js is licensed under the MIT license.

5. **`README.md`**: A text file containing useful reference information about your project.

6. **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## 🚀 Building and Running for Production

In addition to the development server started with `yarn start`, you can also generate a full static production build and serve that to preview the site as it will appear once deployed:

```sh
yarn build
```

```sh
yarn start
or
yarn start:dev
```
