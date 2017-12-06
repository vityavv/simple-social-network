function $(thingtoreturn) {
	return document.getElementById(thingtoreturn);
}

function submit() {
	var sending = {
		title: $("title").value,
		body: $("body").value
	}
	fetch(window.location.origin + "/data.json", {method: "post", body: JSON.stringify(sending)})
	.then(function(r){
		return [r.json(), r.text()];
	}).then(function(r){
		if (r[1] == "Not a valid option") {
			alert("Not a valid option! Please insert a title, body, or both!");
		} else {
			displayPosts(r);
		}
	});
}
function displayPosts(posts) {
	posts = posts.posts;
	var postDisplay = "";
	for (var i = 0; i < posts.length; i++) {
		posts[i].title = posts[i].title.replace(/\</g,"&lt;")
		posts[i].title = posts[i].title.replace(/\>/g,"&gt;")
		posts[i].body = posts[i].body.replace(/\</g,"&lt;")
		posts[i].body = posts[i].body.replace(/\>/g,"&gt;")//Don't XXS me
		postDisplay += "<h3>" + (i+1) + ") " + posts[i].title + "</h3><p>" + posts[i].body + "</p><hr>";
	}
	$("otherposts").innerHTML = postDisplay;
}
function fetchAndDisplayPosts(posts) {
	fetch(window.location.origin+"/data.json")
	.then(function(r){
		return r.json()
	}).then(function(r){
		displayPosts(r);
	});
}

window.onload = fetchAndDisplayPosts;
