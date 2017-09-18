// List of JavaScript tips
var tipsList;

var tipsList1 = [
	"Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",

	"Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",

	"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",

	"To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",

	"Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
];

// Spanish list of JavaScript tips
var tipsList2 = [
	"No te olvides la palabra clave <span class='code'>var</span> cuando le asignes un valor a una variable por primera vez.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, y <span class='code'>''</span> (cadena de texto vacía) tienen todos implícito el valor \'false\'.",

	"Las funciones se declaran con <br/> <span class='code-block'>function <em>nombreDeLaFuncion</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"Las declaraciones condicionales <span class='code'>if</span>/<span class='code'>else</span> lucen así: <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

	"Podés devolver el resultado de una función dentro de una variable con <span class='code'>return</span>:<br><span class='code-block'>function multiplicarPorCinco(numero) {<br> &nbsp;&nbsp;return numero * 5; <br>}<br>console.log(multiplicarPorCinco(6));<br>// Output: 30</span> ",

	"El operador <span class='code'>&&</span> significa que ambas condiciones deben ser verdaderas (\'true\'): <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

	"El operador <span class='code'>||</span> significa que cualquiera de las condiciones puede ser cierta (\'true\'): <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

	"Un bucle con sentencia <span class='code'>for</span> tiene tres expresiones: una expresión inicial, una condición para que se detenga el ciclo, y una expresión de incremento o iterador: <br> <span class='code-block'>for (var i = 0; i < miArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

	"Para concatenar una variable dentro de una cadena de texto (\'string\'), tenés que usar el operador <span class='code'>+</span> , como acá: <br> <span class='code-block'>var nombre = 'Juan';<br/> 'Hola, mi nombre es ' + nombre;</span>",

	"Para generar un número aleatorio, podés usar la función predefinida por JavaScript <span class='code'>Math.random()</span>.",

	"Los \'Arrays\' contienen listas de elementos. Podés acceder a cualquiera de los ítems de la lista usando los corchetes así: <br> <span class='code-block'>var miArray = ['peras', 'espárragos', 'bananas'];<br>miArray[1]; // espárragos</span>"
];

// Tip Limit counter
var tipLimit = 5;

// Language
var language = [];

//Toggle sections
function toggleSections () {
	var section = document.querySelector('.selection');
	var tip = document.querySelector('.tip');

	section.classList.add('unactive');
	tip.classList.remove('unactive');
}

// Choose English
function chooseEnglish () {
	var englishButton = document.querySelector('.lang-button.eng');

	englishButton.addEventListener('click', function () {

		language = 'English';
		generateTip(language)
		toggleSections();
	});
}


// Choose Spanish
function chooseSpanish () {
	var spanishButton = document.querySelector('.lang-button.esp');

	spanishButton.addEventListener('click', function () {

		language = 'Español';
		generateTip(language);
		toggleSections();
	})
}


// Choose a language
function chooseLanguage () {
	chooseEnglish();
	chooseSpanish();
}

chooseLanguage ();


// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip
function generateTip (language) {
	var langSelected = document.querySelector('.lang');

	if (language === 'English') {
		tipsList = tipsList1;

	} else if (language === 'Español') {
		tipsList = tipsList2;
	}
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.js-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
	langSelected.innerHTML = language;
}

// Generate a number
function generateNumber () {
	return Math.floor(Math.random() * tipsList.length);
}


// Tip button click
// 1. Select the tip button
// 2. Add a click event listener
// 3. When the button is clicked:
// 3a. Subtract 1 from the tipLimit
// 3b. If the tipLimit is still above or equal to 0, generate a new tip
// 3c. If not, change the button text and look
function onTipButtonClick (language) {
	var tipButton = document.querySelector('.tip-button');

	tipButton.addEventListener('click', function () {
		tipLimit = tipLimit - 1;
		if (tipLimit >= 0) {
			generateTip();

			if (tipLimit === 0) {
				tipButton.innerHTML = "See you in another tab!";
				tipButton.classList.add('disabled');
			}
		}
	});
}

onTipButtonClick(language);

// Language button click
function onChangeLangButtonClick () {
	var langButton = document.querySelector('.change-lang-button');


	langButton.addEventListener('click', function () {

		if (language === "English") {

			tipsList = tipsList2;
			language = "Español";

			langButton.innerHTML = "Idioma: " + language;
			langButton.classList.add('spanish');

			generateTip('Español');
		} else if (language === "Español") {

			tipsList = tipsList1;
			language = "English";

			langButton.innerHTML = "Language: " + language;
			langButton.classList.remove('spanish');

			generateTip('English');
		}

	});
}

onChangeLangButtonClick();

// Get the first tip
// generateTip("English");
