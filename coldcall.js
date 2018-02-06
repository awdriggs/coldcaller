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

var heronsList = ['AZALEA', 'BEATRICE', 'CASEY', 'CRISTOPHER', 'DAHLIA', 'DANIEL', 'ELA', 'ELSA', 'FRAILY', 'IMRAN', 'JASMIJN', 'JASMINE', 'JIMMY', 'KACPER', 'KEIRA', 'LEO', 'LIVIA', 'MATEO', 'MATILDA', 'MATISSE', 'MICHAEL', 'MORGAN', 'NICOLA', 'PIERCE', 'SASHA', 'SHANNON', 'WILLA', 'WILLEM', 'ZIDAN']
var finchesList = ['ALI', 'ALYSON', 'ANDERSON', 'ANGEL', 'BESS', 'DANIEL', 'ELIYAH', 'GABRIEL', 'GILLIAN', 'IAN', 'JAYDEN', 'JORDAN', 'LOLA', 'MAGGIE', 'MALEZIA', 'MARLEE', 'MAROOF', 'MATEO', 'MEHRAB', 'MELA', 'OLIVER', 'ROOS', 'RUPA', 'SAMUEL', 'THELMA', 'ZIGUAN']
var warblersList = ['AIDAN', 'AIMEE', 'ALEXANDER', 'BENICIO', 'BRADY', 'BRANDON', 'BROOKE', 'CHARLES', 'ELIJAH', 'ELIZA', 'ELLA', 'EVELYN', 'FRANCES', 'GRACE', 'KENNY', 'LIDHIA', 'LILLIAN', 'MARCO', 'MARTINA', 'MATEEN', 'CADE', 'MELINA', 'MICHAEL', 'NAWFOL', 'NYKAI', 'OFRI', 'SCOTT', 'STELLA', 'THOR']
var sparrowsList = ['AARON', 'ADRIAN', 'ALON', 'AVA', 'BRIANA', 'Brianna', 'ELIAN', 'ELIE', 'ELIZABETH', 'ELLI', 'ETHAN', 'EVAN', 'EVAN', 'ISHRAT', 'JADA', 'JASMINE', 'JOHN WILLIAM', 'JOSE', 'LUCAS', 'LUKA', 'LUKAS', 'MARGOT', 'MATTHEW', 'MAXWELL', 'NATHANIEL', 'NICOLAS', 'RHYLAN', 'SHANE', 'STACIE JAE']

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
    current = warblers;
  } else if (bird == 'sparrows') {
    current = sparrows;
  } else if (bird == 'finches') {
    current = finches;
  } else if (bird == 'herons') {
    current = herons;
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
