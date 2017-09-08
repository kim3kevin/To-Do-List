var button = document.getElementsByClassName("submit")[0];
var submit = button.addEventListener("click",function(){
	var inputBoxText = document.getElementsByClassName("inputBox")[0].value;

	if(inputBoxText === ""){
		alert("Please input something!");

	}else{
		var toDoItem = document.createElement("div");
		var toDoItemTextSection = document.createElement("div");		
		var toDoItemText = document.createTextNode(inputBoxText);
		var thisDiv = toDoItem;
		var buttonContainer = document.createElement("div");
		var doneButton = document.createElement("div");
		var deleteButton = document.createElement("div");
		var deleteButtonText = document.createTextNode("Delete");
		var doneButtonText = document.createTextNode("Done!");
		var checkSign = document.createElement('div');
		var check = document.createTextNode("\u2713");
		var doneButtonClickCounter = 0;

		var doneOrUndo = function(undoOrDone){
			doneButtonText.remove();
			doneButtonText = document.createTextNode(undoOrDone);
			doneButton.appendChild(doneButtonText);
		};
		var oddClick = function(){
			thisDiv.style.backgroundColor = "rgba(169, 255, 176, 0.6)";
			toDoItemTextSection.prepend(checkSign);
			doneOrUndo("Undo");
		};
		var evenClick = function(){
			thisDiv.style.backgroundColor = "#c9cdd5";
			check.remove();
			doneOrUndo("Done!");
		};
		var doneButtonChange = function(undoOrDone, oddOrEven){
			var x = undoOrDone;
			var y = oddOrEven;
			if(x === "undo" && y === "odd"){
				oddClick();
			}else if(x === "done" && y === "even"){
				evenClick();
				/*
				thisDiv.style.backgroundColor = "#c9cdd5";
				check.remove();
				doneOrUndo("Done!");*/
			}
		};



		toDoItem.className =  "toDoItem";
		toDoItemTextSection.className = "toDoItemTextSection"
		buttonContainer.className = "buttonContainer";
		doneButton.className = "doneButton";
		deleteButton.className = "deleteButton";
		checkSign.className = "checkSign";
		
		
		
		toDoItemTextSection.appendChild(toDoItemText);
		toDoItem.prepend(toDoItemTextSection);
		deleteButton.appendChild(deleteButtonText);
		doneButton.appendChild(doneButtonText);
		buttonContainer.appendChild(doneButton);
		buttonContainer.appendChild(deleteButton);
		toDoItem.appendChild(buttonContainer);
		checkSign.appendChild(check);

		deleteButton.addEventListener("click",function(){
			thisDiv.remove();	
		});

		
		doneButton.addEventListener("click",function(){
			doneButtonClickCounter += 1;
			if(doneButtonClickCounter === 1){
				doneButtonChange("undo","odd");

				//oddClick();
				/*
				thisDiv.style.backgroundColor = "rgba(169, 255, 176, 0.6)";
				toDoItemTextSection.prepend(checkSign);
				doneOrUndo("Undo");*/
			}else if(doneButtonClickCounter % 2 === 0){
				doneButtonChange("done","even");

				/*thisDiv.style.backgroundColor = "#c9cdd5";
				check.remove();
				doneOrUndo("Done!");*/
			}else if(doneButtonClickCounter % 2 === 1){
				checkSign.appendChild(check);
				doneButtonChange("undo","odd");

				/*
				oddClick();
				thisDiv.style.backgroundColor = "rgba(169, 255, 176, 0.6)";
				toDoItemTextSection.prepend(checkSign);
				doneOrUndo("Undo");*/
			};
			
		});

		document.getElementsByClassName("itemList")[0].appendChild(toDoItem);
		document.getElementsByClassName("inputBox")[0].value = "";
};
});