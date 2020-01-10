# Thesis Assessment
This is a submission for the Thesis coding assessment. The `index.html` file and associated assets are served by a barebones Express server running in Docker. No frameworks or libraries were used in the creation of these files; all coding was done by hand using vanilla HTML/CSS/JS.

## Accessing the website
Docker and Docker Compose are required. Simply run `docker-compose up` and visit `localhost:80` to view the active webpage.

To access `index.html` and associated assets without running the server itself, simply navigate to [src > app > public](https://github.com/dashielmansfield/thesis-assessment/tree/master/src/app/public) and extract the desired files.

## Discussion

### Improvements
#### 1. Validation
In the initial submission, a JavaScript function altered the class of each form input depending on whether its contents passed validation. It also logged results to console, although this was not meant to be interpreted as user-facing content. 

A message box for displaying validation messages has now been added. Its contents are updated every time the submit button is pressed.

#### 2. Password visibility
Pressing the icon beside the password input toggles showing/hiding the input text. 

Elected not to control password visibility using `input type`, as most common input types introduce a high degree of variability between browsers (e.g. with unique styles on autocomplete). Writing a robust `reset.css` from scratch to handle all possible edge cases is doable, but labor intensive for a timed assessment.

Instead, the text was simply masked with CSS `text-security` and a custom font that replaces all characters with discs. It is less ideal than simply controlling `input type`, but far more visually consistent given the time and resource restrictions.

#### 3. Menu, navigation links, hover/active states
A novel menu design was implemented. Opted for a full-screen design to keep navigation consistent and responsive at all screen sizes. Removed navigation links from header at small screen widths in favor of accessing them through the hamburger menu icon, as this was cleaner than displaying the full list in a vertical stack at the top of the page. 

#### 4. Optimization and load times
Custom font faces were added with the caveat that browsers should look for local fonts first. Additionally, `font display: optional` allows for the use of a fallback font in particularly slow network conditions. Specific fallback fonts are also specified to maintain the overall look and feel in absence of `Roboto` and `Avenir New`. Only the fonts required by the design are loaded; additional variants exist on the server but are never linked to the user.

Finally, ensured that the background image was exported from Sketch using a highly optimized format.


### Requested alterations

#### 1. Adjust div class names to improve readability.
Improved readability while still adhering to BEM naming conventions. Focused on components with nested layers of classes, such as `hero` and `form`. Used more concise class names, and removed several `div` classes entirely where a more semantic element tag was applicable. For example:
```html
<!-- Initial submission --> 
<div class="hero">
  <div class="hero__copy hero__copy--large"> ... </div>
  <div class="hero__copy hero__copy--small"> ... </div>
</div>

<!-- Alteration --> 
<div class="hero">
  <h1> ... </h1>
  <h2> ... </h2>
</div>
```

Other changes to improve readability include restructuring and commenting `style.css`, as well as wrapping text nodes in appropriate elements (e.g., `span` instead of directly inside `header`).
  
#### 2. Fix linking in both menus. `<href>`</href> attributes are placed on `<li>` elements and `<a>` elements are missing entirely.
For the initial submission, originally misinterpreted the instructions *"links do not need to point anywhere"* to imply that full anchor tags should not be added at all, and so used the `href` attribute to denote for the evaluator where `<a>` tags ought to be placed instead. Proper anchor tags have now been added.

####  3. Links are missing alt attributes
The [HTML specification](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) indicates that `alt` is to be used only as alternate text in case an image cannot be loaded properly ([source](https://www.w3schools.com/tags/att_alt.asp)). If the behavior desired is to have a tooltip appear on mouseover, the proper attribute to use is `title` ([source](https://www.w3schools.com/tags/att_title.asp)). However, since `alt` was specifically requested, both of these attributes have been added to anchor tags and other applicable elements.

####  4. Remove console.log. Most users won't know how to access the console or understand the errors it provides.
The alert to check console output was intended to provide feedback to the evaluator, and was not meant to be interpreted as user-facing content. The alert has been replaced with an element displaying validation messages to the user; see *"Discussion > Improvements > Validation"* above for details.

####  5. Adjust Mobile view issues with styling
On small screen sizes, the original submission allowed components to overflow the page. Adjusted the minimum width of both the page and the components to ensure that overflow can no longer occur. This was the only view-related issue that became apparent while inspecting the site at mobile screen sizes and with a modified user-agent; a proper toolchain to test the website on Android and iOS would potentially have provided more information.

####  Other: Layout  and spacing
As per the overview conversation from Tuesday, the layout was updated so that the main content expands to fill available vertical space, pushing the footer to the bottom of the page. The footer has also been adjusted so that the copyright and bottom navigation are pushed to opposite sides of the page. This is overwritten by a media query at small screen sizes so that the two items center when stacking vertically upon line wrap.

Note that it was unclear how the main content should be vertically aligned in the available space between the header and footer. Currently it is centered, but if it should be pulled to the top of the space then `justify-content: flex-start` may be used instead.

- - - -

## Final notes
All changes to the website were submitted within the 2 hour window provided. A handful of minor commits were submitted afterward; these included updating `README.md` and `.gitignore`, deleting some OS files, and deleting a local backup folder generated by VS Code. No changes were made to any of the files pertaining to the website itself.

The only exception to this is a small font-related change in the final commit, which fixes an error that can prevent the password from being obfuscated in slow network conditions. If this change is not permitted, please refer to [this project branch from before the commit ocurred](https://github.com/dashielmansfield/thesis-assessment/tree/5be43ec4b60cfe07a2909f2bf122d6e068fb5489/src/app/public). Thank you very much.


## Contact

Please contact <dashielmansfield@gmail.com> if a different format or project architecture for the assessment files is preferred. Thank you.
