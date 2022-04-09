### netlify link: https://profound-cucurucho-4c62e3.netlify.app



### instructions:

<li> Research documentation of <a href= "https://swapi.dev/documentation">SWAPI</a> to find the endpoint for the starships resource.</li>
<li>Create a services/sw-api.js service module and ensure that all API/fetch calls are made from this module.
<li>Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships. </li>
<li>Obtain all of the starships from the API and render in <App> a card for each starship.</li>
<li>Cards should contain the text of the starship's name.</li>
<br/>
For example:

<img src = "https://lh4.googleusercontent.com/aJSnGodNvQoqwZCDjPVV_YlAqBwvgIIcYw7JJrzRF0YcrafoKVeGMy9BhN8BtJrDbum98jo9D-yZZPhLouB5u1EFrrEIbIV1myymeyLvdM5xwNZnkPyKc935Ghrw_YGmyhx524Il"/>



#### Hints
Hold the starship objects in state with the useState hook, don't forget to initialize to an empty array!
Use the useEffect hook to make the AJAX request once the app loads.
Once the starship data comes from the API, be sure to update state with the setter function.
Create and import a StarShipCard component into App.js.
.map() over each starship object in state to transform them into a <StarshipCard /> component
CORS issue? Try changing your /starships endpoint to /starships/ 👈 trust us on that one 😎.



### Bonus
Display additional details for each Starship in it's respectable card.
This API has a pagination feature that allows you to get additional starships to display - find out how to use this to your advantage and allow users to get more starships at the click of a button
