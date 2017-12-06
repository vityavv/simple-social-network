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
		return r.json();
	}).then(function(r){
		displayPosts(r);
	});
}
function displayPosts(posts) {
	console.log("fetching posts and displaying them");
	console.log(posts);
	posts = posts.posts;
	var postDisplay = "";
	for (var i = 0; i < posts.length; i++) {
		posts[i].title = posts[i].title.replace(/\</g,"&lt;")
		posts[i].title = posts[i].title.replace(/\>/g,"&gt;")
		posts[i].body = posts[i].body.replace(/\</g,"&lt;")
		posts[i].body = posts[i].body.replace(/\>/g,"&gt;")//Don't XXS me
		postDisplay += "<h3>" + posts[i].title + "</h3><p>" + posts[i].body + "</p>";
	}
	$("otherposts").innerHTML = postDisplay;
}
function fetchAndDisplayPosts(posts) {
	fetch("http://localhost:8080/data.json")
	.then(function(r){
		return r.json()
	}).then(function(r){
		displayPosts(r);
	});
}

window.onload = fetchAndDisplayPosts;
