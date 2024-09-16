pwd = [ '1234', 
		'5678',
		];

function func(ele, password){
	let foo = prompt('Enter password');
	var id = ele.id;
	console.log(id);
	console.log(foo);
	if (foo == password){
		window.alert("correct");
		document.getElementById(String(id)).className = "card-finished";
		document.getElementById(String(id)).removeAttribute("onclick");
	}else {
		window.alert("wrong");
	}
	return;
}