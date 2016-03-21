//////////////////////////////////////
// variables for any objects in the //
//DOM we want to reuse, e.g. button //
//////////////////////////////////////

var toDoEntry = document.getElementById('to_do_item');
var submitToDo = document.getElementById('submit_to_do');
var toDoList = document.getElementById('to_do_list');
var resetList = document.getElementById('reset_list');
// create an empty array

var toDoEntries = [];

//////////////////////
// helper functions //
//////////////////////

// clears any text in the user input box
function clearInput() {
  toDoEntry.value = '';
};


function render() {
    toDoList.value = '';
    var listItem = '';
    for(i = 0; i < toDoEntries.length; i++) {
        listItem += '<p><input type="checkbox"> ' + toDoEntries[i] + '<p>';
        toDoList.innerHTML = listItem;
    }
}


////////////////////
// event listener //
////////////////////

// creat an event listener that listens for a click on the submitToDo button and then fires an anonymous function.
submitToDo.addEventListener('click', function() {
    // on click, store the user input in an array
    toDoEntries.push(toDoEntry.value);
    // call render function
    render(); 
    // also on click, log user input to the console    
    console.log(toDoEntry.value);
    // then clear input field
    clearInput();
});

resetList.addEventListener('click', function() {
    toDoEntries = [];
    listItem = '';
    toDoList.innerHTML = '';
});



// function render(array) {
//     // Create the list element:
//     var list = document.createElement('ol');

//     for(var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }

//     // Finally, return the constructed list:
//     return list;
// }

// // Add the contents to <section>
// document.getElementById('to_do_list').appendChild(render(toDoEntries));




    // // Create an ordered list:
    // var list = document.createElement('ol');
    // // create a string to hold each item
    // var item = ''
    // // iterate over toDoEntries array
    // for(var i = 0; i < toDoEntries.length; i++) {
    //     var item = document.createElement('li');
    //     // Add it to the list:
    //     list.appendChild(item);
    // }

    // // Finally, return the constructed list:
    // return list;
