function _load() {
	// let anything = {
	// 	"key": [1,2,3]
	// 	}
	// 	let x = {...anything};
		
	// 	anything.key[3] = 8;
		
	// 	console.log(x);

	//ezt írja ki [1,2,3,8]




	// let anything = {
	// 	"key": [1,2,3]
	// 	}
	// 	let x = JSON.parse(JSON.stringify(anything));
		
	// 	anything.key[3] = 8;
		
	// 	console.log(x);

		//ezt írja ki [1,2,3]





		// let anything = {
		// 	"key": docment.getElementByid("root")
		// 	}
		// 	let x = JSON.parse(JSON.stringify(anything));
			
		// 	console.log(x);
		// 	console.log(anything);






	// 		let e = 1;
	// if(e){
	// 		console.log("de"); //e=1
	// }else{
	// 		console.log("ne"); //e=0
	// }





	// 	let e = document.getElementById("root");
	// if(e){
	//     console.log("de"); //van root id
	// }else{
	//     console.log("ne"); //nincs root id
	// }

	let newObject = {
		num: 2,
		string: "Hello",
		bool: true,
		arr: [
			1,
			2,
			3,
			4,
			{ objInarr = {
				first: 3,
				second: "Wednesday",
				third: true
			}}
		]
	};
	console.log(newObject);


}

window.addEventListener("load", _load);