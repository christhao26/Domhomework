function addToList(){ // created funtion 

    var listValue;  //created this variable 
    listValue = document.getElementById("myInput").value; // calling variable first, then assigned the input value to that variable 
    console.log(listValue); // tested to see if the input is stored 

    //target the element list "myList"
    
    var toDoList; //  targerted the list 
    toDoList = document.getElementById("myList");
    
    // this was created to add whatever input to the bottom of the entire list 
    var newTask;// this created the new list 
    newTask = document.createElement("li"); 
    newTask.appendChild(document.createTextNode(listValue)); // puttin the new value in the list // make this into a text 

    toDoList.appendChild(newTask);// used the "UL" list which is named todoList then added the new list value inside. 

    document.getElementById("myInput").value = "" // this step clears the input box 
}
//

var ulList; //created another variable 
ulList = document.getElementById("myList"); //targets the same UL list from above 
ulList.addEventListener("click", function(event){
    if(event.target.nodeName =="LI"){
        event.target.style = "text-decoration: line-through";

        setTimeout(()=>{
            event.target.remove();
        },1000);
    }

})
