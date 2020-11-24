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

16. Translate template pages, including tags
16. Better manage site content
16. Editing and proofreading
16. Have different search indexes and content per language
20. Rework the presentation of the search results 
20. Consider HTML boilerplate
20. Better the cover-image handling for pages without an image
20. Better the cover-image handling for posts, tags and pages
20. Set up a language router per browser language
25. Automate translation extraction https://github.com/i18next/i18next-parsergats
25. Integrate a CV application
25. Put relationships between post, pages, tags and authors
25. Consider Netlify CMS
25. Authors from Ghost
30. Other content types from Ghost
30. Integrate specific data types for posts, pages, tags and authors 
30. Maybe introduce a notion of categories

## Changelog

These are the changes done over the most recent versions

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
