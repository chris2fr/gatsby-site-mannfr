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

## Internationalization

https://www.gatsbyjs.com/plugins/gatsby-theme-i18n/

## Replacements in Markdown Links

My own content is in a git repository specific to me but not really backed up anywhere and that is scary. It is in ssh://chris2fr@contabo.mann.fr/home/chris2fr/git/mannfr-content.git and on my local machine under content. With the .gitignore on the main repository, I was able to put it there nicely. 

[Shared Resources](https://www.mann.fr/en/realizations/drawing-board/resdigita/)  => ../resdigita

/en/configmagic-com => ../configmagic-com

## Backlog

13. Translate template pages, including tags
14. Consider HTML boilerplate
15. Better manage site content
16. Consider Netlify CMS
17. Authors from Ghost
18. Other content types from Ghost
19. Editing and proofreading
20. Rework the presentation of the search results 
21. Delete extraneous pages
22. Fix header-width on pages without an image
23. Better the cover-image handling for pages without an image
24. Better the cover-image handling for posts, tags and pages
25. Integrate specific data types for posts, pages, tags and authors 
26. Put relationships between post, pages, tags and authors
27. Maybe introduce a notion of categories
28. Have different search indexes and content per language
29. Set up a language router per browser language
30. Automate translation extraction https://github.com/i18next/i18next-parsergats
31. Integrate a CV application

## Changelog

These are the changes done over the most recent versions

### Changelog v-0.0.4

11. Replaced i18n with i18next
12. Repaired broken search

### Changelog v-0.0.3

7. Put meaningful content in the peekaboo/burger menu Done
8. Put in the three flags to change languages per page Done
9. Hesitate to show a page if not in the language Done
10. Fix links in markdown files Partially Done

### Changelog v-0.0.2

4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism


### Changelog v-0.0.1

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