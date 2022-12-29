console.log(`Lay out valid +10 \n
to check the validity of the layout, use the service https://validator.w3.org/
\n valid layout corresponds to the inscription "Document checking completed. No errors or warnings to show." In this case, points for the item of requirements are set in full.
\n if there are warnings - warningsbut no errors - errors, set half points for the requirement item`);

console.log(`Semantic layout +20
\n The page code contains the following elements (the minimum number is indicated, it can be more):
\n <header>, <main>, <footer> +3
\n five elements <section>(by the number of sections) +3
\n only one header <h1>+3
\n four headings <h2>(number of sections minus one with heading <h1>) +3
\n one element <nav>(navigation bar) +3
\n two lists ul > li > a(navigation bar, social media links) +3
\n five buttons <button>+2`);

console.log(`The layout corresponds to the layout +48
\n block <header>+6
\n section welcome+7
\n section about+7
\n section service+7
\n section prices+7
\n section contacts+7
\n block <footer>+7`);



console.log(`css + 12 requirements
\n flexes or grids are used to build the grid +2
\n when zooming out the browser page, the layout is placed in the center, and not shifted to the side +2
\n the background color spans the full width of the page +2
\n icons are added in .svg. SVG can be added in any way. We pay attention to the format, not the way to add +2
\n images added in format .jpgor .png+2
\n yes favicon+2`);

console.log(`Interactivity through css +20
\n smooth scrolling on anchors +5
\n links in the footer, when clicked, lead to the github of the author of the project and to the course page https://rs.school/js-stage0/ +5
\n interactivity includes not only changing the appearance of the cursor, for example, using the property cursor: pointer, but also other visual effects, such as changing the background color or font color. If hover and click styles are specified in the layout, we specify these styles for the element. If styles are not specified in the layout, implement them at your discretion, guided by the general style of the layout +5
\n obligatory requirement for interactivity: smooth change in the appearance of an element on hover and click without affecting adjacent elements +5`);