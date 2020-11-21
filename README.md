# MANN.fr

This is a new Gatsby website for Mann.fr. There probably will be a static bit, but I am not even sure about that.

The goals here are to :

1. Set up a basic website Done
2. Import content Done
3. Set up a home page Done
4. Set up three languages Done
5. Set up a contact form Done
6. Set up a search mechanism Done

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

## Random Thought

Can the below be in Rust ?

```
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "data/faqs/",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/faqs${relativeFilePath}`,
    })
  }
}
```

## Using gatsby-remark-images and gatsby-plugin-mdx

npm install --save gatsby-remark-images gatsby-plugin-sharp
npm install --save gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react


plugin-mdx seems to be problematic, but I like the idea in the abstract sense.

## Internationalization

https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/

warning Critical dependency: the request of a dependency is an expression
warning Critical dependency: the request of a dependency is an expression
warning chunk styles [mini-css-extract-plugin]
Conflicting order. Following module has been added:
 * css ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/postcss-loader/src??postcss-2!./src/css/utilities.css
despite it was not able to fulfill desired ordering with these modules:
 * css ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/postcss-loader/src??postcss-2!./src/css/tag.css
   - couldn't fulfill desired order of chunk group(s) component---src-pages-index-tsx
   - while fulfilling desired order of chunk group(s) component---src-templates-default-mdx-layout-js
warning chunk styles [mini-css-extract-plugin]
Conflicting order. Following module has been added:
 * css ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/postcss-loader/src??postcss-2!./src/css/basics.css
despite it was not able to fulfill desired ordering with these modules:
 * css ./node_modules/css-loader??ref--12-oneOf-1-1!./node_modules/postcss-loader/src??postcss-2!./src/css/tag.css
   - couldn't fulfill desired order of chunk group(s) component---src-pages-index-tsx
   - while fulfilling desired order of chunk group(s) component---src-templates-default-mdx-layout-js
success Building production JavaScript and CSS bundles - 10.746s
success Building static HTML for pages - 5.160s - 321/321 62.21/s
success onPostBuild - 0.002s
info Done building in 24.6821309 sec
PS C:\Users\chris\dox\mann.fr> gatsby build

PS C:\Users\chris\dox\mann.fr> npm i --save mini-css-extract-plugin
npm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby@2.26.1 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby@2.26.1 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.5.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.5.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.1.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.1.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN react-elastic-carousel@0.9.5 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-elastic-carousel@0.9.5 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-only-when@1.0.2 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-only-when@1.0.2 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-swipeable@5.5.1 requires a peer of react@^16.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-mann-fr@0.0.1 No repository field.
npm WARN gatsby-mann-fr@0.0.1 license should be a valid SPDX license expression
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ mini-css-extract-plugin@1.3.1
added 3 packages from 2 contributors, updated 2 packages, moved 5 packages and audited 2412 packages in 14.524s

194 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

https://stackoverflow.com/questions/46053414/npm-warn-requires-a-peer-of-but-none-is-installed-you-must-install-peer


PS C:\Users\chris\dox\mann.fr> npm install --save-dev @reach/router gatsby gatsby-link gatsby-react-router-scroll react-elastic-carousel react-only-when create-react-context react react-dom     


PS C:\Users\chris\dox\mann.fr> npm install --save-dev @reach/router gatsby gatsby-link gatsby-react-router-scroll react-elastic-carousel react-only-when create-react-context react react-dom                                                npm WARN deprecated @hapi/joi@15.1.1: Switch to 'npm install joi'
npm WARN deprecated eslint-loader@2.2.1: This loader has been deprecated. Please use eslint-webpack-plugin
npm WARN deprecated @hapi/address@2.1.4: Moved to 'npm install @sideway/address'
npm WARN deprecated @hapi/topo@3.1.6: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/hoek@8.5.1: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated @hapi/bourne@1.3.2: This version has been deprecated and is no longer supported or maintained
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.13: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

> gatsby-telemetry@1.5.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby-telemetry
> node src/postinstall.js || true


> gatsby-cli@2.14.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby\node_modules\gatsby-cli
> node scripts/postinstall.js


> gatsby@2.27.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby
> node scripts/postinstall.js

npm notice save gatsby is being moved from dependencies to devDependencies
npm notice save react-elastic-carousel is being moved from dependencies to devDependencies
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.2.7 (node_modules\babel-plugin-add-module-exports\node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed. You must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.2.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-react-router-scroll@3.2.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby@2.27.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby@2.27.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN react-only-when@1.0.2 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-only-when@1.0.2 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-elastic-carousel@0.9.5 requires a peer of react@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-elastic-carousel@0.9.5 requires a peer of react-dom@^15.0.0 || ^16.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.6.0 requires a peer of react@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-link@2.6.0 requires a peer of react-dom@^16.4.2 but none is installed. You must install peer dependencies yourself.
npm WARN react-swipeable@5.5.1 requires a peer of react@^16.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN gatsby-mann-fr@0.0.1 No repository field.
npm WARN gatsby-mann-fr@0.0.1 license should be a valid SPDX license expression
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ react-dom@17.0.1
+ react@17.0.1
+ @reach/router@1.3.4
+ create-react-context@0.3.0
+ gatsby-react-router-scroll@3.2.0
+ gatsby@2.27.0
+ react-only-when@1.0.2
+ react-elastic-carousel@0.9.5
+ gatsby-link@2.6.0
added 8 packages from 3 contributors, removed 2 packages, updated 37 packages and audited 2420 packages in 39.401s

135 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities



  Error: Minified React error #152; visit https://reactjs.org/docs/error-decoder.html?invariant=152&args[]=PostHeaderImage for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

I think some of the markdown files are either empty or null. 

success onPostBootstrap - 0.001s
info bootstrap finished - 17.574s
success run static queries - 1.607s - 4/4 2.49/s
warning Query takes too long:
File path: C:/Users/chris/dox/mann.fr/src/templates/default-mdx-layout.js
URL path: /draft/post/self-hosted-video-conferencing/
Context: {
    "slug": "/draft/post/self-hosted-video-conferencing/",
    "locale": "un",
    "hrefLang": "un-UN",
    "originalPath": "/draft/post/self-hosted-video-conferencing/",
    "dateFormat": "YYYY-MM-DD"
}
warning Query takes too long:
File path: C:/Users/chris/dox/mann.fr/src/templates/default-mdx-layout.js
URL path: /draft/post/sitemap/
Context: {
    "slug": "/draft/post/sitemap/",
    "locale": "un",
    "hrefLang": "un-UN",
    "originalPath": "/draft/post/sitemap/",
    "dateFormat": "YYYY-MM-DD"
}
success run page queries - 36.802s - 540/540 14.67/s
success write out requires - 0.012s
⠈

success Rewriting compilation hashes - 0.005s
failed Building static HTML for pages - 8.401s
error Building static HTML failed for path "/fr/draft/post/breizhat-com/"




  Error: Minified React error #152; visit https://reactjs.org/docs/error-decoder.html?invariant=152&args[]=PostHeaderImage for the full message or use the non-minified dev environment for full errors and additional helpful warnings.

  - react-dom-server.node.production.min.js:32 ab
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:32:466

  - react-dom-server.node.production.min.js:35 d
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:35:240

  - react-dom-server.node.production.min.js:36 bb
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:36:16

  - react-dom-server.node.production.min.js:42 a.b.render
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:42:43

  - react-dom-server.node.production.min.js:41 a.b.read
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:41:83

  - react-dom-server.node.production.min.js:52 exports.renderToString
    [mann.fr]/[react-dom]/cjs/react-dom-server.node.production.min.js:52:138

  - render-page.js:667 Module../.cache/static-entry.js.__webpack_exports__.default
    C:/Users/chris/dox/mann.fr/public/render-page.js:667:28

  - render-html.js:30
    [mann.fr]/[gatsby]/dist/utils/worker/render-html.js:30:36

  - debuggability.js:384 Promise._execute
    [mann.fr]/[bluebird]/js/release/debuggability.js:384:9

  - promise.js:518 Promise._resolveFromExecutor
    [mann.fr]/[bluebird]/js/release/promise.js:518:18

  - promise.js:103 new Promise
    [mann.fr]/[bluebird]/js/release/promise.js:103:10

  - render-html.js:28
    [mann.fr]/[gatsby]/dist/utils/worker/render-html.js:28:47

  - util.js:16 tryCatcher
    [mann.fr]/[bluebird]/js/release/util.js:16:23

  - map.js:68 MappingPromiseArray._promiseFulfilled
    [mann.fr]/[bluebird]/js/release/map.js:68:38

  - promise_array.js:115 MappingPromiseArray.PromiseArray._iterate
    [mann.fr]/[bluebird]/js/release/promise_array.js:115:31

  - promise_array.js:79 MappingPromiseArray.init
    [mann.fr]/[bluebird]/js/release/promise_array.js:79:10


  "dependencies": {
    "
    "gatsby-image": "^2.5.0",
    "gatsby-plugin-mdx": "^1.4.0",
    "gatsby-plugin-react-helmet": "^3.4.0",
    "gatsby-plugin-sharp": "^2.8.0",
    "gatsby-remark-images": "^3.5.1",
    "gatsby-source-filesystem": "^2.5.0",
    "gatsby-theme-i18n": "^1.0.4",
    "gatsby-transformer-sharp": "^2.6.0",
    "typescript": "^4.0.5",
    "react-elastic-carousel": "^0.9.5",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "maybeDependencies": {
    "css-loader": "^5.0.1",
    "mini-css-extract-plugin": "^1.3.1",
    "react-helmet": "^6.1.0",
    "react-slick": "^0.27.13",
    "styled-components": "^5.2.1",
    "create-react-context": "^0.3.0",
    "gatsby": "^2.27.0",
    "gatsby-link": "^2.6.0",
    "gatsby-react-router-scroll": "^3.2.0",
    "react-only-when": "^1.0.2",
    "@reach/router": "^1.3.4",
    "@mdx-js/mdx": "^1.6.21",
    "@mdx-js/react": "^1.6.21"
  },
  "maybeDevDependencies"

## Replacements in Markdown Links

  [Shared Resources](https://www.mann.fr/en/realizations/drawing-board/resdigita/)  => ../resdigita

  /en/configmagic-com => ../configmagic-com


info bootstrap finished - 16.545s
success onPreExtractQueries - 0.001s
error There was an error in your GraphQL query:

Expected type MdxFieldsEnum, found frontmatter___order. Did you mean the enum value frontmatter___type, frontmatter___id, frontmatter___title, frontmatter___tags, or frontmatter___slug?
error There was an error in your GraphQL query:

Expected type MdxFieldsEnum, found frontmatter___order. Did you mean the enum value frontmatter___type, frontmatter___id, frontmatter___title, frontmatter___tags, or frontmatter___slug?
error There was an error in your GraphQL query:

Cannot query field "description" on type "MdxFrontmatter".

If you don't expect "description" to exist on the type "MdxFrontmatter" it is most likely a typo.
However, if you expect "description" to exist there are a couple of solutions to common problems:

- If you added a new data source and/or changed something inside gatsby-node.js/gatsby-config.js, please try a restart of your development server
- The field might be accessible in another subfield, please try your query in GraphiQL and use the GraphiQL explorer to see which fields you can query and what shape they have
- You want to optionally use your field "description" and right now it is not used anywhere. Therefore Gatsby can't infer the type and add it to the GraphQL schema. A quick fix is to add at least one entry with that field ("dummy content")

It is recommended to explicitly type your GraphQL schema if you want to use optional fields. This way you don't have to add the mentioned "dummy content". Visit our docs to learn how you can define the schema for "MdxFrontmatter":
https://www.gatsbyjs.org/docs/schema-customization/#creating-type-definitions
failed extract queries from components - 0.569s
success write out requires - 0.026s
success run static queries - 0.095s - 2/2 21.13/s