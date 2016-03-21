//////////////////////////////////////
// variables for any objects in the //
//DOM we want to reuse, e.g. button //
//////////////////////////////////////

var toDoEntry = document.getElementById('to_do_item');
var submitToDo = document.getElementById('submit_to_do');
var toDoList = document.getElementById('to_do_list');

// create an empty array

var toDoEntries = [];

////////////////////
// event listener //
////////////////////

// creat an event listener that listens for a click on the submitToDo button and then fires the storeToDo function.
submitToDo.addEventListener('click', storeToDo);

//////////////////////
// helper functions //
//////////////////////

// clears any text in the user input box
function clearInput() {
  toDoEntry.value = '';
};

// 1. stores to do input in an array of to do items
// 2. logs the user input to the console every time they click  the button
// 3. clears the input field
function storeToDo() {
	toDoEntries.push(toDoEntry.value);
	console.log(toDoEntry.value);
	clearInput();
}


function render(array) {
    // Create the list element:
    var list = document.createElement('ol');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents to <section>
document.getElementById('to_do_list').appendChild(render(toDoEntries));














// function render() {
// 	// clear out whatever text is in the list section
// 	toDoList.value = '';

// 	// iterate over the array
// 	for(entry in toDoEntries) {
// 		console.log(entry + '. ' + toDoEntries[entry]);
// 		// create an HTML string from the items in the array
// 		toDoList.innerHTML = '<p>' + entry + '. ' + toDoEntries[entry] + '</p>'
// 	}
// }
	
