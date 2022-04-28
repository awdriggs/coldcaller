//Create an array for each class
var BirdGroup = function(list) {
  this.unUsed = list;
  this.used = [];

  this.getRandom = function() {
    //get a random number to pull from the student array
    var index = Math.floor(Math.random() * this.unUsed.length);
    //console.log('index', index);

    //pull the name at index from the array
    var name = this.unUsed.splice(index, 1)[0];
    //store the name in the used array
    this.used.push(name);

    //check to see if the unused is now empty
    if (this.unUsed.length == 0) {
      console.log('calling reset');
      this.reset(); //call reset if unUsed is empty
    }

    //return the name 
    return name;
  }

  this.reset = function() {
    for (var i = this.used.length; i > 0; i--) {
      this.unUsed.push(this.used.pop()); //swap used into unUsed
      //you can't just do a simple swap in case someone reset the class midway
      //through
    }
  }
}


var cardinalsList = ['Edward','Elvin','Evan','Fatima','Hanna','Jackeline','Jacob','Judy','Katie','Keerthana','Luis','Maxine','Naimun','Nico','Oliver','Parker','Rachel','Ruby','Shyera','Sultan','Yerik','Yina','Zosia'];
var egretsList = ['Adam','Adrian','Ailey','Caswell','Emma','Gisselle','Joanna','Kuba','Leo','Lizette','Lola','Marlo','Kahirul','Meerab','Milo','Nathan','Oliver','Olivia','Olivier','Ryder','Sama','Tymarie','Uba'];
var oriolesList = ['Allisson','Ella','Erik','Hamid','Jayden','Jean-Michel','Kadin','Lia','Marin','Meirav','Mohammad','Nia','Nyra','Patlada','Rachel','Rhys','Scarlett','Stefan','Tachnin','Zack','Zoe']
var swiftsList = ['Adrian','Anthony','Caleb','Charlotte W','Charlotte H','Daisy','Dania','Dashiell','Ethan','Ewan','Genesis','Henry','Isaiah','James P','James C','Jayleen','Jehan','Julien','Melissa','Milena','Mirna','Newt','Noah'];
var wrensList = ['Abdullo','Ada','Anaiah','Angel','Charlotte','Darkell','David','Emilie','Henry','Jemma','Kian','Kris','Melody','Reid','Roland','Salvador','Shajid','Siam','Stella','Sumaiya','Violet'];
var finchesList = ['Aiden','Ayan','Ayla','Aysha','Charles','Chloe','Edgar','Elliott','Emerson','Etta','Fameen','Giselle','Izabella','Jared','Julia','Kaitlyn','Malcolm','Melvin','Olive','Shanty','Tamara','Tilda','Tomas'];
var heronsList =  ['Abraham','Alexa','Ben T','Ben H','Cesar','Devon','Elijah','Emmanuel','Fern','Hani','Henry','Laszlo','Lucy','Luke','Mae','Mashrur','Nia','Nushrath','Penelope','Riley','Robert','Rosario','Sakhiya'];
var robinsList = ['Bari','Adrian','Artur','Audrey','Clara','Daniel','Delphine','Dilnura','Emily','Evan','Georgia','Jancarlos','Joshua','Julien','Lucas','Luis','Mae','Mark','Mia','Richard','Roan','Samuel','Sebastian'];
var sparrowsList = ['Abeerah','Alasdair','Arber','Brielle','Caspia','Christopher','Emma','Ilsa','Isaac','Isaiah','Jaelyn','Jonah','Joshua','Julie','Lucian','Mokhina','Nikolas','Ophelia','Orlando','Rabah','Seamus','Tyler'];
var warblersList = ['Aamaya','Abe','Adriana','Afnan','Akira','Ben','Bering','Eli','Emmanuella','Fariha','Farzona','Hudson','Jamel','Jasurbek','Jesse','Josephine','Julius','Kamola','London','Mason','Nayeli','Pedro'];

var warblers = new BirdGroup(warblersList);
var sparrows = new BirdGroup(sparrowsList);
var herons = new BirdGroup(heronsList);
var finches = new BirdGroup(finchesList);
var robins = new BirdGroup(robinsList);
var orioles = new BirdGroup(oriolesList);
var wrens = new BirdGroup(wrensList);
var swifts = new BirdGroup(swiftsList);
var egrets = new BirdGroup(egretsList);
var cardinals = new BirdGroup(cardinalsList); 

var current;

//create a used array
//create a listener on the button with the id callon
document.getElementById('callon').addEventListener('click', function() {
  var bird = document.getElementsByTagName('select')[0].value

  if (bird == 'warblers') {
    current = warblers;
  } else if (bird == 'sparrows') {
    current = sparrows;
  } else if (bird == 'finches') {
    current = finches;
  } else if (bird == 'herons') {
    current = herons;
  } else if (bird == 'robins') {
    current = robins;
  } else if (bird == 'cardinals') {
    current = cardinals;
  } else if (bird == 'egrets') {
    current = egrets;
  } else if (bird == 'orioles') {
    current = orioles;
  } else if (bird == 'swifts') {
    current = swifts;
  } else if (bird == 'wrens') {
    current = wrens;
  } else alert('error');

  var name = current.getRandom();

  var displayArea = document.getElementsByClassName('result')[0];
  displayArea.innerHTML = '';
  displayArea.innerHTML = '<h2>' + name + '</h2>';
})

//create a listener for the butotn called reset
document.getElementById('reset').addEventListener('click', function() {
  console.log('reset');
  current.reset();
  var displayArea = document.getElementsByClassName('result')[0];
  displayArea.innerHTML = "";
});
