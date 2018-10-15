let FieldForWinner  = document.getElementById("winner");
let table           = document.getElementById("members");
let chooseNewWinner = document.getElementsByTagName("button")[0];
let addToTable      = document.getElementsByTagName("button")[1];

chooseNewWinner.addEventListener("click",chooseWinner);
addToTable.addEventListener("click",add);
table.addEventListener("click",deleteMember)

function add(){
	let name      = document.getElementsByTagName("input")[0].value;
	let surname   = document.getElementsByTagName("input")[1].value;
	let email     = document.getElementsByTagName("input")[2].value;
	let phone     = document.getElementsByTagName("input")[3].value;
	
	if(name != "" && surname != "" && email){
		let newMember = document.createElement('tr');
		newMember.innerHTML =  `<td>${name}
								<button class="delete">delete</button>
								</td>
								<td>${surname}</td>
								<td>${email}</td>
								<td>${phone}</td>`;
		table.appendChild(newMember);
		document.getElementsByTagName("input")[0].value = "";
		document.getElementsByTagName("input")[1].value = "";
		document.getElementsByTagName("input")[2].value = "";
		document.getElementsByTagName("input")[3].value = "";
	}else{
		alert(`required fields:\nname\nsurname\nemail`)
	}

}

function chooseWinner(){
	if(table.childNodes.length > 0)	{
		let randomWinner = Math.floor(Math.random() * (table.childNodes.length)) ;
		let LuckyMember = table.childNodes[randomWinner].innerText.split("delete");
		FieldForWinner.innerText = `${LuckyMember[0]} ${LuckyMember[1]}`;
	}else{
		FieldForWinner.innerText = ``;
	}
}
function deleteMember(event){
	if(event.target.tagName == "BUTTON"){
		event.target.parentNode.parentNode.parentNode.
		removeChild(event.target.parentNode.parentNode);
	}
}