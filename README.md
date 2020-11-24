# MANN.fr

This is a new Gatsby website for Mann.fr.

## Version 0.0.1

This is a working Alpha-quality website. It isn't fully polished, but the basic structure and idea is here. I should be 80% functional.

The goals here were to :

1. Set up a basic website
2. Import content
3. Set up a home page
4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism

The website was built from the ground up. There are a couple of content assumptions. Tags are in the ./content/tags directory. Posts are in the content directory. You may notice that the tags are also pages. Tags have a special frontmatter attribute `type:tag`. The content comes from Ghost with my [ghost-to-md](https://github.com/chris2fr/ghost-to-md).

## Internationalization

https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/

## Replacements in Markdown Links

My own content is in a git repository specific to me but not really backed up anywhere and that is scary. It is in ssh://chris2fr@contabo.mann.fr/home/chris2fr/git/mannfr-content.git and on my local machine under content. With the .gitignore on the main repository, I was able to put it there nicely. 

[Shared Resources](https://www.mann.fr/en/realizations/drawing-board/resdigita/)  => ../resdigita

/en/configmagic-com => ../configmagic-com

## Next Version

1. Put meaningful content in the peekaboo/burger menu Done
3. Put in the three flags to change languages per page Done
4. Hesitate to show a page if not in the language
5. Better manage site content
6. Consider Netlify CMS
7. Authors from Ghost
8. Other content types from Ghost
9. Editing and proofreading
10. Consider HTML boilerplate
11. Fix links in markdown files Done?
2. Rework the presentation of the search results 

### Notes

```
success write out requires - 0.069s
success run static queries - 0.460s - 5/5 10.86/s
success run page queries - 11.750s - 343/343 29.19/s
error undefined failed

C:\Users\chris\dox\mann.fr\.cache\develop-static-entry.js: Support for the experimental syntax 'jsx' isn't currently enabled (31:5):

  29 | export default (pagePath, callback) => {
  30 |   let headComponents = [
> 31 |     <meta key="environment" name="note" content="environment=development" />,
     |     ^
  32 |   ]
  33 |   let htmlAttributes = {}
  34 |   let bodyAttributes = {}

Add @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.
If you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.
not finished Building development bundle - 1.005s
not finished Generating image thumbnails - 46.657s
PS C:\Users\chris\dox\mann.fr>
```

Note to self, eliminate react-intl and gatsby-intl. Not using them.

```
info [gatsby-theme-i18n]: Config file found at C:\Users\chris\dox\mann.fr\i18n\config.json
success onPreBootstrap - 0.031s
success createSchemaCustomization - 0.024s
success Checking for changed pages - 0.001s
success source and transform nodes - 10.944s
warning Deprecation warning - adding inferred resolver for field MdxFrontmatter.feature_image. In Gatsby v3, only fields with an explicit directive/extension will get a resolver.
success building schema - 1.061s
```

```
info bootstrap finished - 32.202s
success onPreExtractQueries - 0.002s
success extract queries from components - 6.752s
success write out requires - 0.085s
success run static queries - 0.508s - 5/5 9.85/s
success run page queries - 15.567s - 343/343 22.03/s
error undefined failed

 
If you're trying to use a package make sure that 'C:\Users\chris\dox\i18n\lingui\locales' is installed. If you're trying to use a local file make sure that the path is correct.
error undefined failed

Unexpected token (110:26)
not finished Building development bundle - 4.228s
not finished Generating image thumbnails - 59.549s
PS C:\Users\chris\dox\mann.fr> ls C:\Users\chris\dox\i18n\lingui\locales                                                                                                                                                                     ls : Cannot find path 'C:\Users\chris\dox\i18n\lingui\locales' because it does not exist.
At line:1 char:1
+ ls C:\Users\chris\dox\i18n\lingui\locales
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Users\chris\dox\i18n\lingui\locales:String) [Get-ChildItem], ItemNotFoundException
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetChildItemCommand

PS C:\Users\chris\dox\mann.fr> 
```

```
PS C:\Users\chris\dox\mann.fr> npm install                                                                                                                                                                                                   
> bufferutil@4.0.2 install C:\Users\chris\dox\mann.fr\node_modules\bufferutil
> node-gyp-build


> utf-8-validate@5.0.3 install C:\Users\chris\dox\mann.fr\node_modules\utf-8-validate
> node-gyp-build


> sharp@0.25.4 install C:\Users\chris\dox\mann.fr\node_modules\sharp
> (node install/libvips && node install/dll-copy && prebuild-install --runtime=napi) || (node-gyp rebuild && node install/dll-copy)

info sharp Using cached C:\Users\chris\AppData\Roaming\npm-cache\_libvips\libvips-8.9.1-win32-x64.tar.gz
info sharp Creating C:\Users\chris\dox\mann.fr\node_modules\sharp\build\Release
info sharp Copying DLLs from C:\Users\chris\dox\mann.fr\node_modules\sharp\vendor\lib to C:\Users\chris\dox\mann.fr\node_modules\sharp\build\Release

> core-js@2.6.11 postinstall C:\Users\chris\dox\mann.fr\node_modules\babel-runtime\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon:
> https://opencollective.com/core-js
> https://www.patreon.com/zloirock

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)


> core-js@3.7.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"


> core-js-pure@3.7.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\core-js-pure
> node -e "try{require('./postinstall')}catch(e){}"


> gatsby-telemetry@1.5.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby-telemetry
> node src/postinstall.js || true


> mozjpeg@7.0.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\mozjpeg
> node lib/install.js

  √ mozjpeg pre-build test passed successfully

> pngquant-bin@6.0.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\pngquant-bin
> node lib/install.js

  √ pngquant pre-build test passed successfully

> gatsby-cli@2.14.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby\node_modules\gatsby-cli
> node scripts/postinstall.js


> gatsby@2.27.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby
> node scripts/postinstall.js


> gatsby-cli@2.14.0 postinstall C:\Users\chris\dox\mann.fr\node_modules\gatsby-cli
> node scripts/postinstall.js

npm WARN gatsby-site-mannfr@0.0.2 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 2498 packages from 1440 contributors and audited 2507 packages in 203.357s

201 packages are looking for funding
  run `npm fund` for details

found 1 low severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
```

```
success Generating image thumbnails - 20.179s - 212/212 10.51/s
⠀
You can now view gatsby-site-mannfr in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
warning Critical dependency: the request of a dependency is an expression
warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\langswitch.js
   1:17  warning  'useState' is defined but never used              no-unused-vars
   4:3   warning  'LocalesList' is defined but never used           no-unused-vars
  14:19  warning  'config' is assigned a value but never used       no-unused-vars
  14:27  warning  'defaultLang' is assigned a value but never used  no-unused-vars
  27:52  warning  Expected '===' and instead saw '=='               eqeqeq
  30:50  warning  Expected '===' and instead saw '=='               eqeqeq
  37:52  warning  Expected '===' and instead saw '=='               eqeqeq

✖ 7 problems (0 errors, 7 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\layout-with-header-image.js
  5:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\layout.js
  6:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\logo.js
   5:10  warning  'Trans' is defined but never used  no-unused-vars
  35:20  warning  Unexpected mix of '&&' and '||'    no-mixed-operators
  41:13  warning  Unexpected mix of '&&' and '||'    no-mixed-operators

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\mannfr-carousel.js
  4:10  warning  'useLocalization' is defined but never used  no-unused-vars
  4:27  warning  'LocalesList' is defined but never used      no-unused-vars
  5:10  warning  'Trans' is defined but never used            no-unused-vars

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\peekaboo.js
   3:10  warning  'Trans' is defined but never used                                                               no-unused-vars
  25:7   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  25:7   warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus
  32:1   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  32:1   warning  Non-interactive elements should not be assigned mouse or keyboard event listeners               jsx-a11y/no-noninteractive-element-interactions
  33:1   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  33:1   warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus

✖ 7 problems (0 errors, 7 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\post-header-tags.js
  3:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\post-header.js
  4:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\pages\app.js
  2:61  warning  'Link' is defined but never used             no-unused-vars
  6:11  warning  'locale' is assigned a value but never used  no-unused-vars
  7:3   warning  'locale' is constant                         no-const-assign
  7:20  warning  Expected '===' and instead saw '=='          eqeqeq

✖ 4 problems (0 errors, 4 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\pages\contact.js
    3:10  warning  'Trans' is defined but never used               no-unused-vars
   88:11  warning  A form label must be associated with a control  jsx-a11y/label-has-associated-control
   90:11  warning  A form label must be associated with a control  jsx-a11y/label-has-associated-control
  114:9   warning  Do not mutate state directly. Use setState()    react/no-direct-mutation-state

✖ 4 problems (0 errors, 4 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\templates\post.js
   6:10  warning  'Trans' is defined but never used            no-unused-vars
  17:10  warning  'useLocalization' is defined but never used  no-unused-vars
  17:53  warning  'Link' is defined but never used             no-unused-vars

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\templates\tag.js
  12:10  warning  'Trans' is defined but never used                 no-unused-vars
  41:10  warning  'tagsForRender' is defined but never used         no-unused-vars
  51:11  warning  'locale' is assigned a value but never used       no-unused-vars
  51:19  warning  'config' is assigned a value but never used       no-unused-vars
  51:27  warning  'defaultLang' is assigned a value but never used  no-unused-vars
  56:7   warning  'imgSrc' is assigned a value but never used       no-unused-vars
  60:7   warning  'imageFluid' is assigned a value but never used   no-unused-vars
  64:7   warning  'tags' is assigned a value but never used         no-unused-vars

✖ 8 problems (0 errors, 8 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\wrap-page-element.js
  4:11  warning  'GATSBY_THEME_I18N_LINGUI' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

success Building development bundle - 20.762s
success onPreExtractQueries - 0.737s
⠄ extract queries from components
```

from .linguirc

```
  "extractBabelOptions": {
    "presets": ["babel-preset-gatsby"]
  }
```

```
success source and transform nodes - 0.692s
warning Deprecation warning - adding inferred resolver for field MdxFrontmatter.feature_image. In Gatsby v3, only fields with an explicit directive/extension will get a resolver.
success building schema - 0.428s
```

```
warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\langswitch.js
   6:10  warning  'Trans' is defined but never used    no-unused-vars
  28:52  warning  Expected '===' and instead saw '=='  eqeqeq
  31:50  warning  Expected '===' and instead saw '=='  eqeqeq
  38:52  warning  Expected '===' and instead saw '=='  eqeqeq

✖ 4 problems (0 errors, 4 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\layout-with-header-image.js
  5:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\layout.js
  6:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\logo.js
   5:10  warning  'Trans' is defined but never used  no-unused-vars
  35:20  warning  Unexpected mix of '&&' and '||'    no-mixed-operators
  41:13  warning  Unexpected mix of '&&' and '||'    no-mixed-operators

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\mannfr-carousel.js
  4:10  warning  'useLocalization' is defined but never used  no-unused-vars
  4:27  warning  'LocalesList' is defined but never used      no-unused-vars
  5:10  warning  'Trans' is defined but never used            no-unused-vars

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\peekaboo.js
   3:10  warning  'Trans' is defined but never used                                                               no-unused-vars
  25:7   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  25:7   warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus
  32:1   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  32:1   warning  Non-interactive elements should not be assigned mouse or keyboard event listeners               jsx-a11y/no-noninteractive-element-interactions
  33:1   warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  33:1   warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus

✖ 7 problems (0 errors, 7 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\post-header-tags.js
  3:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\post-header.js
  4:10  warning  'Trans' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\pages\app.js
  2:61  warning  'Link' is defined but never used             no-unused-vars
  6:9   warning  'locale' is assigned a value but never used  no-unused-vars
  7:20  warning  Expected '===' and instead saw '=='          eqeqeq

✖ 3 problems (0 errors, 3 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\pages\contact.js
    3:10  warning  'Trans' is defined but never used               no-unused-vars
   88:11  warning  A form label must be associated with a control  jsx-a11y/label-has-associated-control
   90:11  warning  A form label must be associated with a control  jsx-a11y/label-has-associated-control
  114:9   warning  Do not mutate state directly. Use setState()    react/no-direct-mutation-state

✖ 4 problems (0 errors, 4 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\templates\post.js
  17:36  warning  'Link' is defined but never used  no-unused-vars

✖ 1 problem (0 errors, 1 warning)

warning ESLintError:
C:\Users\chris\dox\mann.fr\src\templates\tag.js
  40:10  warning  'tagsForRender' is defined but never used         no-unused-vars
  50:11  warning  'locale' is assigned a value but never used       no-unused-vars
  50:19  warning  'config' is assigned a value but never used       no-unused-vars
  50:27  warning  'defaultLang' is assigned a value but never used  no-unused-vars
  55:7   warning  'imgSrc' is assigned a value but never used       no-unused-vars
  59:7   warning  'imageFluid' is assigned a value but never used   no-unused-vars
  63:7   warning  'tags' is assigned a value but never used         no-unused-vars

✖ 7 problems (0 errors, 7 warnings)

warning ESLintError:
C:\Users\chris\dox\mann.fr\wrap-page-element.js
  7:10  warning  'plural' is defined but never used  no-unused-vars
```