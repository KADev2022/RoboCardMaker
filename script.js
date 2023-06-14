const parentElement = document.querySelector(".parentElement");
const robotImage = document.querySelector("#robotImage");
const setName = document.querySelector("#setName");
const btnMakeRobot = document.querySelector("#btnMakeRobot");

// RobotCard class for creating an object
class RobotCard {
    // Constructing the Person object
    constructor(parentElement) {
        this.parentElement = parentElement;
    }

    // This method creates a new robot card and renders data
    createRobotCard() {
        // Creates a card
        let card = document.createElement("div");
        card.classList.add("card", "m-2", "mb-4");
        card.style.width = '15rem';

        // Creates an image
        let image = document.createElement("img");
        image.src = "robots/2023-05-28_12h31_34.png";
        image.classList.add("card-img-top", "py-2");
        image.alt = "Robot picture";

        card.appendChild(image);
        this.parentElement.appendChild(card);
    }    
}

// Button to create a robot card
btnMakeRobot.addEventListener("click", function () {
    const newRoboCard = new RobotCard(parentElement);
    newRoboCard.createRobotCard();
});