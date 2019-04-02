# Page optimization updates
Search HTML for "Fullstack ADDED" to see comments. Use the Diff links to compare current page source with modified source.

Preview Links:
* [Product Category](https://amazing-lichterman-dfb889.netlify.com/product-category-page.html)

# How to implement changes:

## Hamburger Navigation (applies to all Pages)
[Download Diff](https://www.diffchecker.com:46997/CzqNsgIK)
* Update the HTML to use SVGs in the HTML.

## Product Category Page
[Download Diff](https://www.diffchecker.com/XqNB5NX7)
* Update Vendor.js with [my new version](/Scripts/vendor.js)
* Review diff for page specific changes. I tried to keep the same format you are currently using across the site.
* Use data-src *instead* of src (remove src entirely) for images that should be lazyloaded. Owl-carousel images should not be lazyloaded.
* The all.min.js is massive (3.4mb). I created a file called all-slim.min.js (it has just the icons in use on this page). Use in place of all.min.js for the product category page only (for now).


# Changelog

## Product Category
**V1.1**
* Adjusted source to more closely match original version (so that it's easier to implement)
* Updated Nav to use font awesome SVGs inlined instead of adding them with JS
* Removed redundant JS from vendor.js
* Created all-slim.min.js, which contains only the font awesome in use on this page
* -Removed page critical CSS since this might be difficult to implement
* -Removed nav critical css for the same reason.
* -Removed header minification

**V1.0**
* Added Fetch Inject to `<head>`: `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fetch-inject"></script>`
* Added lazysizes to `<head>`: `<script src="/Scripts/vendor/lazysizes.min.js"></script>`
* Added lazysizes asset to scripts/vendor/lazysizes.min
* Replaced stylesheet links in `<head>` with fetch inject
* Added critical hamburgerNav CSS to head
* Added critical page css to head
* Minified `<header>` HTML since it used significant space
* For some images, changed src=" to data-src" to trigger lazyloading. **Do not do this for the product carousel - these images should not lazyload**.
* Added an inline script that adds class "lazyload lazypreload" to images with data-src attribute
* Added JS that hides sections until the associated assets are loaded so that the user doesn't see broken divs on the initial page load.

### To be Done
* Minify all CSS/JS.
* Resize images to match container width
* Update font awesome all-min.js and all-min.css to only contain included fonts. This is a massive 3.4mb file right now.