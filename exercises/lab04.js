let count = 0;

let buttonCreature = {
    name: "Needy Button",
    species: "interface creature",
    favoriteFood: "clicks",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "confused"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);

});