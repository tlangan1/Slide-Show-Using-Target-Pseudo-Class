# Multi-page document using the ":target" pseudo class and minimal JS

1. JavaScript is used to alter the "href" and "more_pages" attributes of the "previous page" and "next page" anchors.
1. CSS is using the :target pseudo class to determine which page to show. All the rest are hidden.
1. CSS to target the "pervious page" and "next page" anchors is present to override the browser behavior for visited links.

If you hover over the next page it will indicate the current page is the link. For example, if you are on page one and hover over the next page it will display page 1 as the target of that link. This is a confusing consequence of the CSS being applied after the DOM is built (as it must be). When you click the next button the javascript updates the anchor link to the next page so that when the CSS is finally applied the next page becomes that targeted page. In the example above it becomes page 2.
