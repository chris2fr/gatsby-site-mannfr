# MANN.fr

This is a new Gatsby website for Mann.fr.

## Alpha

This is a working Alpha-quality website. It isn't fully polished, but the basic structure and idea is here. I should be 80% functional.

The goals here were to :

1. Set up a basic website
2. Import content
3. Set up a home page
4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism

The website was built from the ground up. There are a couple of content assumptions. Tags are in the ./content/tags directory. Posts are in the content directory. You may notice that the tags are also pages. Tags have a special frontmatter attribute `type:tag`. The content comes from Ghost with my [ghost-to-md](https://github.com/chris2fr/ghost-to-md).

## Backlog

This is an ordered list of work items for the next releases.

To do:

27. Editing and proofreading
40. Better manage site content
50. Have different search indexes and content per language
60. Rework the presentation of the search results 
70. Consider HTML boilerplate
80. Better the cover-image handling for pages without an image
90. Better the cover-image handling for posts, tags and pages
100. Activate SEO, especially for site header 
110. Integrate a CV application
120. Automate translation extraction https://github.com/i18next/i18next-parsergats
130. Put relationships between post, pages, tags and authors
140. Consider Netlify CMS
150. Authors from Ghost
160. Automatic translation from loclz or similar
170. Document this experience
180. Transpose password-protected content
190. Other content types from Ghost
200. Integrate specific data types for posts, pages, tags and authors 
210. Maybe introduce a notion of categories

## Changelog

These are the changes done over the most recent versions

28. Changed link on main logo to return to main website.

### Changelog v-0.0.7 

We are now ready for beta.

Done:

24. Clear internal warnings and invisible errors
25. Calibrate tags in content/published with type: hometag in frontmatter
26. Introduce favicon.ico folder at static root with app icons and manifest.json

### Changelog v-0.0.6

Finishing changes to how the website is viewed from afar. Synched with content repository.

Done:

18. Variable language chooser according to available posts
19. Import French-Language Content
20. Set up a language router per browser language
21. Translated arrows on home page
22. Fixed the "/index" that was at the end of the URLs
23. Translate template pages


### Changelog v-0.0.5

I put the page context in place manually. Pretty soon, I may not need gatsby-theme-i18n.

Done:

16. Put effective translation mechanism in place on home and tag pages
17. Had a better way of passing locale logic in pageContext (technical thing and bug fix)

### Changelog v-0.0.4

This release replaces i18n with i18next and repairs an impaired search.

Done:

11. Replaced i18n with i18next
12. Repaired broken search
13. Removed extraneous dependencies
14. Delete extraneous pages 
15. Fix header-width on pages without an image

### Changelog v-0.0.3

This website works well. Layouts need translation. Language groupings need isolation in searches. It works though.

Done:

7. Put meaningful content in the peekaboo/burger menu Done
8. Put in the three flags to change languages per page Done
9. Hesitate to show a page if not in the language Done
10. Fix links in markdown files Partially Done

### Changelog v-0.0.2

This release allows end-users to access all pages of the website.

Done:

4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism

#### Internationalization

https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/

#### Replacements in Markdown Links

My own content is in a git repository specific to me but not really backed up anywhere and that is scary. It is in ssh://chris2fr@contabo.mann.fr/home/chris2fr/git/mannfr-content.git and on my local machine under content. With the .gitignore on the main repository, I was able to put it there nicely. 

[Shared Resources](https://www.mann.fr/en/realizations/drawing-board/resdigita/)  => ../resdigita

/en/configmagic-com => ../configmagic-com

### Changelog v-0.0.1

This is a working version of the mann.fr website when used with the current content repository. It can be reviewed at https://alpha.mann.fr.

Done:

1. Set up a basic website
2. Import content
3. Set up a home page

## Notes 

```
warning ESLintError:
C:\Users\chris\dox\mann.fr\src\components\peekaboo.js
  25:7  warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  25:7  warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus
  32:1  warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  32:1  warning  Non-interactive elements should not be assigned mouse or keyboard event listeners               jsx-a11y/no-noninteractive-element-interactions
  33:1  warning  Visible, non-interactive elements with click handlers must have at least one keyboard listener  jsx-a11y/click-events-have-key-events
  33:1  warning  Elements with the 'button' interactive role must be tabbable                                    jsx-a11y/interactive-supports-focus
```

```
success source and transform nodes - 11.681s
warning Deprecation warning - adding inferred resolver for field MdxFrontmatter.feature_image. In Gatsby v3, only fields with an explicit directive/extension will get a resolver.
success building schema - 0.732s
```

```
https://github.com/facebook/react/issues/18178#issuecomment-595846312
index.js:2177 Warning: Cannot update a component (`LangSwitch`) while rendering a different component (`PageRenderer`). To locate the bad setState() call inside `PageRenderer`, follow the stack trace as described in https://reactjs.org/link/setstate-in-rende
```

```
React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work. 
    at AppContainer (eval at ES6ProxyComponentFactory (http://localhost:8000/commons.js:61895:10), <anonymous>:14:7)
```