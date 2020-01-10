# Thesis Assessment
This is a submission for the Thesis coding assessment.

The project is served by an Express.js server running in a Docker container. This configuration provides no function other than to serve the static `index.html` file along with its associated assets. Additonally, no frameworks or libraries were used in the creation of these files; all coding was done by hand using vanilla HTML/CSS/JS.

## Accessing the website
The only requirements to run the server are Docker and Docker Compose. Simply run `docker-compose up` and visit `localhost:80` to view the  active webpage.

To access the static  files `index.js` and associated assets without running the server itself, simply navigate to [src > app > public](https://github.com/dashielmansfield/thesis-assessment/tree/master/src/app/public) and extract the desired files.

## Reasoning

### Design improvements
#### 1. Validation
In the initial submission, validation was performed through a JavaScript function that checked the contents of each input, and logged errors to the console (for the evaluators edification only; this would not be used in a final, user-facing design). Additionally, the inputs which failed to pass validation were styled red to denote a problem.

For this resubmission, a new element was added to the bottom of the form for the purposes of displaying error messages to the user. The contents of this message box are updated every time the submit button is pressed.

#### 2. Password visibility
The specification provided an icon next to the password input, implying that the user should be able to show/hide the password by clicking on the icon. This functionality has been added. 

While this is possible to control using input type alone, such a method is liable to cause compatibility issues between browsers (which alter input styles on autocomplete, for example). Handling every edge case with code written from scratch is doable, but labor intensive for a timed assessment.

Instead, the text was simply masked with CSS using `text-security`, and a custom font that displays all characters as discs (required due to the fact that Firefox no longer supports `-moz-text-security`). It is less ideal than using input type, but far more consistent given the time and resource restrictions.

#### 3. Menu ( + Link hover/active states)
The specification allowed for any menu design to be implemented, and suggested that hover and active states be applied as well. A full-screen menu design was selected to ensure that navigation remained simple, consistent, and responsive across the full range of screen sizes. It also allows for the links provided in the header navigation to be removed entirely from the header at small screen sizes, which is visually much cleaner than displaying each link in a vertical stack at the top of the page. The hamburger menu icon also uses the same hover animation as the navigation links in the header and footer, which subconsciously signals to the user that they are all functionally connected (in providing navigation).

#### 4. Optimization and load times
Custom font faces were added with the caveat that browsers should look for local fonts first. Additionally, `font display: optional` was used to allow browsers to forgo using the font if loading takes too long.

Additionally, a highly optimized background image was used when exporting from Sketch. 


### Requested alterations
The following list of alterations were requested:
#### 1. Adjust div class names to improve readability.
  Changes were made to improve readability while still adhering to BEM naming conventions. Focus was given to components with nested layers of classes, such as `hero` and `form`. Selected more concise class names, and removed several `div` classes entirely where a more semantic element tag was applicable. For example:
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

  Other changes to improve readability include restructuring and commenting `style.css`, ensuring all text nodes are wrapped in appropriate semantic elements (e.g., `span` or `h1` instead of directly within `header` or `div`), and using line-breaks whenever the number of nested elements is larger than 2.
  
#### 2. Fix linking in both menus. `<href>`</href> attributes are placed on `<li>` elements and `<a>` elements are missing entirely.
  For the initial submission, originally misinterpreted the instructions *"links do not need to point anywhere"* to imply that full anchor tags should not be added, and so simply used the `href` attribute in other elements to denote where `<a>` tags ought to be.
  
  Added `<a>` elements around all links and buttons, and updated the stylesheet to avoid browser-specific styles being applied.

####  3. Links are missing alt attributes
  The [HTML specification](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) indicates that `alt` is to be used only as alternate text in case an image cannot be loaded properly ([source](https://www.w3schools.com/tags/att_alt.asp)). If the behavior desired is to have a tooltip appear on mouseover, the proper attribute to use is `title` ([source](https://www.w3schools.com/tags/att_title.asp)). However, since `alt` was specifically requested, both of these attributes were added to links, images, etc.

####  4. Remove console.log. Most users won't know how to access the console or understand the errors it provides.

The alert to check console output was simply placed with the intention of providing feedback to the evaluator, and was not meant to be taken as user-facing content. To fill this gap in the UI, a new element for displaying validation errors to the user has now been added; it remains hidden until the user attempts to submit invalid input and refreshes every time a new submission is attempted.

####  5. Adjust Mobile view issues with styling

On small screen sizes, the original submission had several issues where components would overflow the page. This was fixed by adjusting the minimum width of both the page and the components to ensure that overflow can no longer occur. Without setting up a more involved toolchain to allow testing of the website on an actual mobile device, this was the only view-related issue that was apparent through browser/useragent -based methods of inspection.

- - - -

## Contact

Please contact <dashielmansfield@gmail.com> if a different format or project architecture for the assessment files is preferred. Thank you.
