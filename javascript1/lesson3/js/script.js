const CONTAINER = document.querySelector(".container");
console.dir(CONTAINER);

let newHTML = "";
let ratingValue = "Not Rated";

for (let i = 0; i < actionGames.length; i++){

    /* var name = "<h4>" + actionGames[i].name + "</h4>"; //ES5 */
    const NAME = `<h4> ${actionGames[i].name} </h4>`; //ES6
    const RATING = `<div class="rating"> Rated: ${actionGames[i].rating}</div>`;
    const RELEASED = `<div class="released"> Released: ${actionGames[i].released}</div>`;
    /* const DETAILS = `<div>
                        ${NAME}
                        ${RATING}
                        ${RELEASED}
                    </div>`; */

    if (actionGames[i].rating){
        ratingValue = actionGames[i].rating;
    }
    else{
        ratingValue = "Not Rated";
    }
    
    const DETAILS = `
        <div class="card">
            <div class="image" style="background-image: url(${actionGames[i].background_image})"></div>
            <div class ="details">
                <h4 class="name"> ${actionGames[i].name}</h4>
                <div class="rating">${ratingValue}</div>
            </div>
        </div>
        `;

    newHTML += DETAILS;

    /* console.log(NAME); */
    /* console.log(DETAILS); */

    /* console.log("actionGames:", actionGames[i].name);
    console.log("actionGames[i].rating"); 
    console.log("actionGames[i].released"); */
}
CONTAINER.innerHTML = newHTML;

console.log(newHTML);
