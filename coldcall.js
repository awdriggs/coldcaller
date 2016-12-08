
//Create an array for each class
//
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

var heronsList = ['Oliver','Jonas','Padma','Plummy','Mufliha','Rose','Macgregor','Noelani','Joshua','Rachel','Alexander','Filippo','Charles','Natalia','Sophia','Tyler','Elijah','Lizbeth','Zenichi','Sanjana','Max','Lailah','Jason','Diyorbek','Krystian','Arthur','Etana'];

var finchesList = ['Finnea','Cori','Phillip','Joaquin','Inka','Yuval','Rohan','Isabella','Guadalupe','Vivian','Talia','Liberty','Jonathan','Madeline','Lilla','Joel','Leila','Jesus','Conn','Amjad','Victor','Edi','Brice','Oscar','Nicholas','Hugo','Quinn','Lillyen'];

var warblersList = ['Anahy','Janique','Charlotte','Omar','Yocelyn','Greta','Turner','Arielle','Jazee','Maeve','Mariss','Luka','Taya Rose','Evan','Jack','Nico','Issam','Anna','Annabelle','Jacob','Joshua','Levon','Oliver','Justis','Annabelle','Ali']; 

var sparrowsList = ['Zohaib','Janiyah','Sofia','Matisse','Amari','Sadie','Domenico','Olivia','Brendan','Nazmul','Ciasia','Lieff','Jack','Ace Merce','Declan','Jamie','Kaila','Oliver','Markel','Daniela','Nyah','Andrew','Ethan','Esmarlin','Brian','Isaac','Honesty']; 


var warblers = new BirdGroup(warblersList);
var sparrows = new BirdGroup(sparrowsList);
var herons = new BirdGroup(heronsList);
var finches = new BirdGroup(finchesList);

var current;

//create a used array
//create a listener on the button with the id callon
document.getElementById('callon').addEventListener('click', function() {
  var bird = document.getElementsByTagName('select')[0].value

  if (bird == 'warblers') {
    current = warblers
  } else if (bird == 'sparrows') {
    current = sparrows
  } else if (bird == 'finches') {
    current = finches
  } else if (bird == 'herons') {
    current = herons
  } else alert('error');

  var name = current.getRandom();

  var displayArea = document.getElementsByClassName('result')[0];
  displayArea.innerHTML = '';
  displayArea.innerHTML = '<h2>' + name + '</h2>';
})

//create a listener for the butotn called reset
document.getElementById('reset').addEventListener('click', function(){
  console.log('reset');
  current.reset();
  var displayArea = document.getElementsByClassName('result')[0];
  displayArea.innerHTML = "";
});

