function $(thingtoreturn) {
	return document.getElementById(thingtoreturn);
}

function submit() {
	var sending = {
		title: $("title").value,
		body: $("body").value
	}
	fetch("http://localhost:8080/data.json", {method: "post", body: JSON.stringify(sending)})
	.then(function(r){
		return r.text()
	}).then(function(r){
		console.log(r);
	});
}
