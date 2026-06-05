// store all creatures in an array
let allCreatures = [];

// functions
// function to grab data from the form
function getCreatureFromForm() {

    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;
};

async function getRandomName() {
    // goes and grabs some data from an api
    const response = await fetch("https://api.gofakeit.com/funcs/petname", { method: "GET", });
    // cov\nverts the response into plaoin text
    const nameRandom = await response.text();

    console.log("Got name:", nameRandom);
    return nameRandom;
}

async function getRandomColor() {
    // goes and grabs some data from an api
    const response = await fetch("https://api.gofakeit.com/funcs/hexcolor", { method: "GET", });
    // cov\nverts the response into plaoin text
    const colorRandom = await response.text();

    console.log("Got color:", colorRandom);
    return colorRandom;
}

// random creature
async function randomizeCreature() {

    const eyesRandom = Math.floor(Math.random() * 5) + 1;
    const nameRandom = await getRandomName();
    const colorRandom = await getRandomColor();

    const randomCreature = {
        name: nameRandom,
        color: colorRandom,
        eyesNum: eyesRandom,
    };
    return randomCreature;

}

// the checks function
function isCreatureValid(creature) {
    if (creature.name === "") return false;
    if (creature.name.length > 12) return false;
    if (isNaN(creature.eyesNum) || creature.eyesNum > 5) return false;
    return true;
}

// functions add creature to the page
function renderCreature(creature) {

    let crEyesHtml = "";
    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHtml = crEyesHtml + "<div class='eye'>.</div>";
    }

    const html = `
        <div class="creature">
            <div class="creature-body" style="background-color: ${creature.color}"> ${crEyesHtml} </div>
            <div class="creature-info">${creature.name}</div>
        </div>
    `;

    return html;
}

// append creature to the page
function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creature-list").append(html);
}

// function to load creatures from firebase
function loadCreaturesFromDB() {

    creatureRef.once("value").then(snapshot => {
        const data = snapshot.val() || {};
        allCreatures = Object.keys(data).map(id => data[id]);
        renderAllCreatures();
    });

}

// renders a list of creatures on the page
function renderAllCreatures() {}