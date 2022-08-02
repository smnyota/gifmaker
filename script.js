

//1. async is needed to await
//2. await is needed if you have functions that return a "promise"
//3. Promise is a function that returns some result after the work is complete


console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum.
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");

// Log the elements to confirm that the querySelectors worked.
console.log(submitButton);
console.log(queryField);
console.log(imageHolderDiv);

submitButton.addEventListener("click", async (e) => {
  let myKey = "STV3DEvhQp92BRiU44tpHed4HTXQi4kc";
  
  //Normally API keys should be stored in a secure place. Not your JavaScript
  let topic = queryField.value + "dancing";
  console.log(topic);
  const myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`;
console.log(myQuery);

  // Fetch sends a request to a url that you specified and gives back a result in the form of a promise. In our case it's used in the form of http based APIS and will use json
//If we're using APIs it will always result in json
  
  let response = await fetch(myQuery);
  console.log(response);

  let gifs = await response.json(); //stores response as an object
  let index = getRandomInt(gifs.data.length)
  console.log(gifs);
  let myImage = gifs.data[index].images.downsized.url;
//Use imageHolderDiv to replace the pig with the "myImage" gif
  //Append the new image to the image holder div

  imageHolderDiv.innerHTML = '<img src="' + myImage + '"/>' + imageHolderDiv.innerHTML;
  
});




//json holds the data. Think of it as a string of characters that defines the information thats held from the API
//Essentially you need to  to console.log your json file and search through the console to see how everything is stored/located or you can go to the endpoint directly in your browser and use a JSON viewer to look at the result

//Data is sent from API to javascript in the format of objects