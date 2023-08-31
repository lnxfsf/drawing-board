

// da reaguje na ova 4 buttons, ... 


// y odredjuje color mode koji je ! 
// 1 je rainbow
// 2 single color
// 3 eraser
var y = 1;











var grid = document.getElementById("grid");


// da menja na osnovu slidera, celi sve ovo ...
var slider = document.getElementById("slider");


// ovo je default value, 16 (16 x 16)
var x = slider.value;




function updateGrid() {

// da stavi 'x' na broj koji je sada slider
x = slider.value;

grid.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${x}, 1fr)`;

// da očisti prethodno na ekranu.. 
grid.innerHTML = '';

for (var i = 0; i < x * x; i++ ){

	var cell = document.createElement("div");


	cell.className = "squares";
	grid.appendChild(cell);
}

// attach new event listeners on each <div> , as we changed them... (after we cleared with:  grid.innerHTML = ''; )
eventListeners();

}


// Add event listener to the slider for input changes
slider.addEventListener("input", updateGrid);


// Initial grid update
updateGrid();

















function eventListeners() {



	
	var squares = document.querySelectorAll('.squares');
	
	
	squares.forEach(square => {
	
		if (y == 1) {
			// da ima rainbow random color ! 
			var color = getRandomColor();
		} else if (y == 2) {
			// single color
			var color = boja;

		} else if (y == 3) {
			// eraser
			var color = 'white';

		};

		square.addEventListener('mouseenter', () => {
			// ovo sada menjas argumente tog <div>-a..
			square.style.backgroundColor = color;
	
		});
	
	
	});
	
	
}



// da ima rainbow random color !  bright and funny colors ...
function getRandomColor() {
 const hue = Math.floor(Math.random() * 360); // Random hue value (0-359)
      const saturation = '100%'; // Maximum saturation
      const lightness = '50%'; // Medium lightness
      return `hsl(${hue}, ${saturation}, ${lightness})`;
    }












// get 'id' s
var color = document.getElementById("color");
var rainbow = document.getElementById("rainbow");
var eraser = document.getElementById("eraser");
var clear = document.getElementById("clear");
var colorPicker = document.getElementById("colorPicker");




// single color
//

var boja = 'black';




color.addEventListener("click", () => {

	// y odredjuje color mode koji je ! 
	// time, ako je ovo na 1, on će dole da odredi rainbow .. prosto...
	y = 2;

	eventListeners();

});


// rainbow colors
rainbow.addEventListener("click", () => {

	// y odredjuje color mode koji je ! 
	// time, ako je ovo na 1, on će dole da odredi rainbow .. prosto...
	y = 1;

	// i onda azuriras sve listeners da ispravno rade
	eventListeners();

});

// eraser (samo bela boja je to.. )
eraser.addEventListener("click", () => {

	// y odredjuje color mode koji je ! 
	// time, ako je ovo na 1, on će dole da odredi rainbow .. prosto...
	y = 3;

	// i onda azuriras sve listeners da ispravno rade
	eventListeners();

});


// funkcija za clear, da ocisti, jer je najlakse...
clear.addEventListener("click", () => {

	updateGrid();

});


// colorPicker, to change single color depending on which it is ! 
colorPicker.addEventListener("input", (event) => {

	// da izvuče boju iz color picker-a ! 
	boja = event.target.value;


	// onda automatski pozove samo, da azurira grid, da bi imao tu novu boju...
	y = 2;

	eventListeners();


});

