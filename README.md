# MANN.fr

This is a new Gatsby website for Mann.fr. There probably will be a static bit, but I am not even sure about that.

The goals here are to :

1. Set up a basic website
2. Import content
3. Set up a home page
4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism

So let's get started. We already have the folder and the readme. 

## First Files

We'll start with package.json, gatsby-config.js and gatsby-node.js.

Here are the suggested dependencies:
```
    "@mdx-js/mdx": "^1.6.14",
    "@mdx-js/react": "^1.6.14",
    "gatsby": "^2.24.10",
    "gatsby-plugin-create-client-paths": "^2.3.10",
    "gatsby-plugin-mdx": "^1.2.28",
    "gatsby-plugin-react-helmet": "^3.3.10",
    "gatsby-plugin-sharp": "^2.8.0",
    "gatsby-source-filesystem": "^2.3.22",
    "gatsby-theme-i18n": "^1.0.4",
    "gatsby-transformer-sharp": "^2.6.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-helmet": "^6.1.0"
```

Here is what they suggest I do:
```
PS C:\Users\chris\dox\mann.fr> npm install --save gatsby gatsby-source-filesystem gatsby-plugin-react-helmet react-helmet react react-dom
npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated eslint-loader@2.2.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.
```

So I did this: `npm install --save gatsby gatsby-source-filesystem gatsby-plugin-react-helmet react-helmet react react-dom`

And there were problems
```

npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\babel-plugin-add-module-exports\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN gatsby@2.26.1 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby@2.26.1 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.5.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.5.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.1.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.1.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN ts-node@9.0.0 requires a peer of typescript@>=2.7 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-mann-fr@0.0.1 No repository field.
npm WARN gatsby-mann-fr@0.0.1 license should be a valid SPDX license expression

+ gatsby-plugin-react-helmet@3.4.0
+ react-helmet@6.1.0
+ gatsby-source-filesystem@2.5.0
+ react@17.0.1
+ react-dom@17.0.1
+ gatsby@2.26.1
added 1900 packages from 1015 contributors and audited 1902 packages in 126.1s
```

So I am starting with this:

   * "gatsby": "^2.26.1",
   * "gatsby-plugin-react-helmet": "^3.4.0",
   * "gatsby-source-filesystem": "^2.5.0",
   * "react": "^17.0.1",
   * "react-dom": "^17.0.1",
   * "react-helmet": "^6.1.0"

It bulids cleanly and it works.

