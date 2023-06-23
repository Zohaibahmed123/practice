// DOM SELECTED UI ELEMENTS

const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const collection = document.querySelector(".collection");

//console.log(taskInput , "task");
//console.log(collection , "collection");

//All Event Listners

taskForm.addEventListener("submit" , onTaskSubmitHandler);

//console.log(taskForm , "taskForm");

function  onTaskSubmitHandler(event) {

event.preventDefault();

// Event functionality ko ruko

//console.log("Clicked!!!")

const taskInputValue = taskInput.value;

//console.log(taskInputValue, "taskInputValue")

if (!taskInputValue) {

	alert ('Please inter a task input value');

	return;
}


//<li class="collection-item">
//    List Item
//    <a href="#" class="delete-item secondary-content">
//        <i class="fa fa-remove"></i>
//    </a>
//</li>


const listElement = document.createElement('li');

listElement.className = "collection-item";

listElement.innerHTMl = `

${taskInputValue}
	<a href="#" class="delete-item secondary-content">
        <i class="fa fa-remove"></i>
    </a>
`;

document.querySelector(".collection").append(listElement);

taskInput.value = "";

bindDeleteTaskIcon();

}

function bindDeleteTaskIcon() {
	
	const selectAllDeleteIcons = document.querySelectorAll(".delete-item");

	selectAllDeleteIcons.forEach(function(singleBtnIcon) {

		//console.log(singleBtnIcon , "singleBtnIcon");

		singleBtnIcon.addEventListener("click" ,removeTaskHandler);
	});

	//console.log(selectAllDeleteIcons ,"selectAllDeleteIcons");
}

function removeTaskHandler(event) {

	event.preventDefault();

	//console.log("icon clicked!");

	const currentElement = event.target;

	//console.log(currentElement , "currentElement");

	if(confirm("Are you soure ?")) {

	currentElement.parentElement.parentElement.remove();

	}
}
