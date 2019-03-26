# Page optimization updates

Preview Links:
* [Product Category](https://amazing-lichterman-dfb889.netlify.com/product-category.html)

# Changelog
Search HTML for "Fullstack ADDED" to see comments

## Product Category
* Updated `Content\pagespecific\weblet-product-category-main.css` to use more specific CSS rules for the benefit icon.
* Added Fetch Inject to `<head>`: `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/fetch-inject"></script>`
* Added lazysizes to `<head>`: `<script src="/Scripts/vendor/lazysizes.min.js"></script>`
* Added lazysizes asset to scripts/vendor/lazysizes.min
* Replaced stylesheet links in `<head>` with fetch inject
* Added critical hamburgerNav CSS to head
* Added critical page css to head
* Minified `<header>` HTML since it used significant space
* For some images, changed src=" to data-src" to trigger lazyloading. **Do not do this for the product carousel - these images should not lazyload**.
* Added an inline script that adds class "lazyload lazypreload" to images with data-src attribute

### To be Done
* Minify all CSS/JS.
* Resize images to match container width