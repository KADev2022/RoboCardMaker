const parentElement = document.querySelector(".parentElement");
const robotImage = document.querySelector("#robotImage");
const setName = document.querySelector("#setName");
const btnMakeRobot = document.querySelector("#btnMakeRobot");

// RobotCard class for creating an object
class RobotCard {
    // Constructing the Person object
    constructor(parentElement, name, picture) {
        this.parentElement = parentElement;
        this.name = name;
        this.picture = picture;
    }

    // This method creates a new robot card and renders data
    createRobotCard() {
        // Creates a card
        let card = document.createElement("div");
        card.classList.add("card", "m-2", "mb-4");
        card.style.width = '15rem';

        // Creates an image
        let image = document.createElement("img");
        image.src = "robots/" + robotImage.files[0].name;
        image.classList.add("card-img-top", "py-2");
        image.alt = "Robot picture";

        // Creates a card body
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Creates a name
        let robotName = document.createElement("h5");
        robotName.classList.add("card-title", "robotName", "text-center");
        robotName.innerHTML = this.name.toUpperCase();

        cardBody.appendChild(robotName);

        card.appendChild(image);
        card.appendChild(cardBody);
        this.parentElement.appendChild(card);
    }    
}

// Button to create a robot card
btnMakeRobot.addEventListener("click", function () {
    const newRoboCard = new RobotCard(parentElement, setName.value, robotImage);
    newRoboCard.createRobotCard();
    setName.value = "";
    robotImage.value = "";
});