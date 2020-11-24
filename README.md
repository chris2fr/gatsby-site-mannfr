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

## Changelog v.0.0.1

1. Set up a basic website
2. Import content
3. Set up a home page

## Changelog v.0.0.2

4. Set up three languages
5. Set up a contact form
6. Set up a search mechanism

## Changelog v.0.0.3

1. Put meaningful content in the peekaboo/burger menu Done
3. Put in the three flags to change languages per page Done
4. Hesitate to show a page if not in the language Done
11. Fix links in markdown files Partially Done

## Next Version

5. Better manage site content
6. Consider Netlify CMS
7. Authors from Ghost
8. Other content types from Ghost
9. Editing and proofreading
10. Consider HTML boilerplate
11. Rework the presentation of the search results 
1. Delete extraneous pages
2. Fix header-width on pages without an image
3. Better the cover-image handling for pages without an image
4. Better the cover-image handling for posts, tags and pages
12. Integrate specific data types for posts, pages, tags and authors 
13. Put relationships between post, pages, tags and authors
14. Maybe introduce a notion of categories
15. Have different search indexes and content per langague
