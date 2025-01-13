fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {
console.log("GET response:", json);
})
.catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify({
	userld: 1,
	title: "New Todo",
	completed: false
  }),
  headers: {
	"Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(json => {
  console.log("POST response:", json);
})
.catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PUT",
  body: JSON.stringify({
	userld: 1,
	id: 1,
	title: "Updated Todo",
	completed: true
  }),
  headers: {
	"Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(json => {
  console.log("PUT response:", json);
})
.catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PATCH",
  body: JSON.stringify({
	title: "Partially Updated Todo"
  }),
  headers: {
	"Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => response.json())
.then(json => {
  console.log("PATCH response:", json);
})
.catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "DELETE",
  headers: {
	"Content-type": "application/json; charset=UTF-8"
  }
})
.then(response => {
  if (response.ok) {
	console.log("DELETE response: Todo has been deleted.");
  } else {
	throw new Error("Network response was not ok.");
  }
})
.catch(error => console.error("Error:", error));