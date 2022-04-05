
var grass = document.getElementById("myGrassBtn");
var river = document.getElementById("myRiverBtn");
var ocean = document.getElementById("myOceanBtn");
var mountain = document.getElementById("myMountainBtn");

grass.style.background = "green";
river.style.background = "blue";
ocean.style.background = "seagreen";
mountain.style.background = "gray";

grass.style.fontSize = "x-large";
river.style.fontSize = "x-large";
ocean.style.fontSize = "x-large";
mountain.style.fontSize = "x-large";

var mainPage = document.getElementById("main");

var grassArray = new Array();
grassArray[0] ="https://archives.bulbagarden.net/media/upload/thumb/4/46/019Rattata.png/375px-019Rattata.png";
grassArray[1] ="https://archives.bulbagarden.net/media/upload/thumb/b/bf/031Nidoqueen.png/375px-031Nidoqueen.png";
grassArray[2] ="https://archives.bulbagarden.net/media/upload/thumb/e/e4/276Taillow.png/375px-276Taillow.png";
grassArray[3] ="https://archives.bulbagarden.net/media/upload/thumb/b/ba/123Scyther.png/375px-123Scyther.png";
grassArray[4] ="https://archives.bulbagarden.net/media/upload/thumb/4/4e/115Kangaskhan.png/375px-115Kangaskhan.png";
grassArray[5] ="https://archives.bulbagarden.net/media/upload/thumb/f/f1/315Roselia.png/375px-315Roselia.png";
grassArray[6] ="https://archives.bulbagarden.net/media/upload/thumb/0/05/038Ninetales.png/375px-038Ninetales.png";

var riverArray = new Array
riverArray[0] ="https://archives.bulbagarden.net/media/upload/thumb/a/a4/195Quagsire.png/375px-195Quagsire.png";
riverArray[1] ="https://archives.bulbagarden.net/media/upload/thumb/0/02/129Magikarp.png/375px-129Magikarp.png";
riverArray[2] ="https://archives.bulbagarden.net/media/upload/thumb/e/ee/270Lotad.png/375px-270Lotad.png";
riverArray[3] ="https://archives.bulbagarden.net/media/upload/thumb/4/42/183Marill.png/375px-183Marill.png";
riverArray[4] ="https://archives.bulbagarden.net/media/upload/thumb/4/4b/349Feebas.png/375px-349Feebas.png";
riverArray[5] ="https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/375px-009Blastoise.png";
riverArray[6] ="https://archives.bulbagarden.net/media/upload/thumb/5/53/054Psyduck.png/375px-054Psyduck.png";

var oceanArray = new Array();
oceanArray[0] ="https://archives.bulbagarden.net/media/upload/thumb/d/d9/170Chinchou.png/900px-170Chinchou.png";
oceanArray[1] ="https://archives.bulbagarden.net/media/upload/thumb/c/cb/224Octillery.png/375px-224Octillery.png";
oceanArray[2] ="https://archives.bulbagarden.net/media/upload/thumb/a/a8/319Sharpedo.png/375px-319Sharpedo.png";
oceanArray[3] ="https://archives.bulbagarden.net/media/upload/thumb/b/b9/321Wailord.png/375px-321Wailord.png";
oceanArray[4] ="https://archives.bulbagarden.net/media/upload/thumb/c/cd/121Starmie.png/375px-121Starmie.png";
oceanArray[5] ="https://archives.bulbagarden.net/media/upload/thumb/f/fc/222Corsola.png/375px-222Corsola.png";

var mountainArray = new Array();
mountainArray[0] ="https://archives.bulbagarden.net/media/upload/thumb/7/75/075Graveler.png/375px-075Graveler.png";
mountainArray[1] ="https://archives.bulbagarden.net/media/upload/thumb/f/f4/035Clefairy.png/375px-035Clefairy.png";
mountainArray[2] ="https://archives.bulbagarden.net/media/upload/thumb/0/04/207Gligar.png/375px-207Gligar.png";
mountainArray[3] ="https://archives.bulbagarden.net/media/upload/thumb/b/bb/304Aron.png/375px-304Aron.png";
mountainArray[4] ="https://archives.bulbagarden.net/media/upload/thumb/8/82/248Tyranitar.png/375px-248Tyranitar.png";
mountainArray[5] ="https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/375px-005Charmeleon.png";


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

        xss.lastChild.height = "280";
        //xss.lastChild.width = "10%";
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
    else if (biome == "River") {
        console.log("in river biome");
        var randomIndex = Math.floor( Math.random() * riverArray.length );

        var img = document.createElement("img");
        img.src = riverArray[randomIndex];
        //document.getElementById("xs").appendChild(img);
        var xss = document.getElementById("xs");

        if (document.getElementById("xs").hasChildNodes()) {
            xss.removeChild(xss.lastChild);
            xss.appendChild(img);
        }
        else {
            xss.appendChild(img);
        }

        xss.lastChild.height = "280";
    }
    else if (biome == "Ocean") {
        console.log("in ocean biome");
        var randomIndex = Math.floor( Math.random() * oceanArray.length );

        var img = document.createElement("img");
        img.src = oceanArray[randomIndex];
        //document.getElementById("xs").appendChild(img);
        var xss = document.getElementById("xs");

        if (document.getElementById("xs").hasChildNodes()) {
            xss.removeChild(xss.lastChild);
            xss.appendChild(img);
        }
        else {
            xss.appendChild(img);
        }

        xss.lastChild.height = "280";
    }
    else if (biome == "Mountain") {
        console.log("in mountain biome");
        var randomIndex = Math.floor( Math.random() * mountainArray.length );

        var img = document.createElement("img");
        img.src = mountainArray[randomIndex];
        //document.getElementById("xs").appendChild(img);
        var xss = document.getElementById("xs");

        if (document.getElementById("xs").hasChildNodes()) {
            xss.removeChild(xss.lastChild);
            xss.appendChild(img);
        }
        else {
            xss.appendChild(img);
        }

        xss.lastChild.height = "280";
    }

}

function restyle() {
    var fonts = ["Arial", "Times New Roman", "Georgia"];
    var colors = ["Blue", "Red", "Green"];
    var sizes = ["small", "medium", "large"];
    var ht = document.getElementById("belowText");
    ht.innerHTML = "Congrats, you encountered a Pokemon!";
    ht.style.textAlign = "center";
    ht.style.background = "white";

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
    //alert("You entered the grasslands!");
    generate("Grass");
    restyle();
    //console.log("Grass");
    /*document.getElementById("myGrassBtn").style.color = "red";*/
});

river.addEventListener("click", function() {
    var area = "River";
    generate("River");
    restyle();
    //alert("You entered the rivers!");
});

ocean.addEventListener("click", function() {
    var area = "Ocean";
    generate("Ocean");
    restyle();
    //alert("You entered the oceans!");
});

mountain.addEventListener("click", function() {
    var area = "Mountain";
    generate("Mountain");
    restyle();
    //alert("You entered the mountains!");
});
