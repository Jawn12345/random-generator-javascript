
var grass = document.getElementById("myGrassBtn");
var river = document.getElementById("myRiverBtn");
var ocean = document.getElementById("myOceanBtn");
var mountain = document.getElementById("myMountainBtn");

grass.style.background = "green";
river.style.background = "blue";
ocean.style.background = "seagreen";
mountain.style.background = "gray";

var mainPage = document.getElementById("main");

var grassArray = new Array();
grassArray[0] = "https://archives.bulbagarden.net/media/upload/thumb/4/46/019Rattata.png/375px-019Rattata.png";
grassArray[1] = "https://archives.bulbagarden.net/media/upload/thumb/b/bf/031Nidoqueen.png/375px-031Nidoqueen.png";
grassArray[2] = "https://archives.bulbagarden.net/media/upload/thumb/4/4e/115Kangaskhan.png/375px-115Kangaskhan.png";
grassArray[3] = "https://archives.bulbagarden.net/media/upload/thumb/b/ba/123Scyther.png/375px-123Scyther.png";
grassArray[4] = "https://archives.bulbagarden.net/media/upload/thumb/e/e4/276Taillow.png/375px-276Taillow.png";
grassArray[5] = "https://archives.bulbagarden.net/media/upload/thumb/f/f1/315Roselia.png/375px-315Roselia.png";
grassArray[6] = "https://archives.bulbagarden.net/media/upload/thumb/0/05/038Ninetales.png/375px-038Ninetales.png";

function generate(biome) {
    console.log(biome);
    if (biome == "Grass") {
        console.log("in grass biome");
        var randomIndex = Math.floor( Math.random() * grassArray.length );

        var img = document.createElement("img");
        img.src = grassArray[randomIndex];
        //document.getElementById("xs").appendChild(img);
        var xss = document.getElementById("xs");

        if (document.getElementById("xs").hasChildNodes()) {
            xss.removeChild(xss.lastChild);
            xss.appendChild(img);
        }
        else {
            xss.appendChild(img);
        }
        xss.lastChild.img = "10%";
        //document.getElementById("x").style.background = "yellow";
        // document.getElementById("main").innerHTML = grassArray[randomIndex];

        // document.getElementById("main").src = grassArray[randomIndex];

        // document.getElementById("main").style.background = "black";
        // //src=grassArray[randomIndex];
        //
        //
        // var img = document.createElement("img");
        // img.src = "matplotlib-grid-02.png";
        //
        // var div = document.getElementById("x");
        // div.appendChild(img);
        // div.setAttribute("style", "text-align:center");
    }

}

function restyle() {
    var fonts = ["Arial", "Times New Roman", "Georgia"];
    var colors = ["Blue", "Red", "Green"];
    var sizes = ["small", "medium", "large"];
    var ht = document.getElementById("headingText");
    ht.innerHTML = "Congrats, you encountered a Pokemon!";

    var ind1 = Math.floor( Math.random() * fonts.length );
    var ind2 = Math.floor( Math.random() * colors.length );
    var ind3 = Math.floor( Math.random() * sizes.length );
    console.log(fonts[ind1]);
    ht.style.fontFamily = fonts[ind1];
    ht.style.color = colors[ind2];
    ht.style.fontSize = sizes[ind3];
}


grass.addEventListener("click", function() {
    var area = "Grass";
    //generate(area);
    alert("You entered the grasslands!");
    document.getElementById("xs").style.background = "red";
    generate("Grass");
    restyle();
    //console.log("Grass");
    /*document.getElementById("myGrassBtn").style.color = "red";*/
});

river.addEventListener("click", function() {
    var area = "River";
    alert("You entered the rivers!");
});

ocean.addEventListener("click", function() {
    var area = "Ocean";
    alert("You entered the oceans!");
});

mountain.addEventListener("click", function() {
    var area = "Mountain";
    alert("You entered the mountains!");
});
