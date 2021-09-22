console.log("Client side javascript file is loaded!");
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageParaOne = document.querySelector('#message-1'); 
const messageParaTwo = document.querySelector('#message-2'); 

weatherForm.addEventListener("submit", (e) => {
  messageParaOne.textContent = "Loading..."; 
  messageParaTwo.textContent = ""; 
  e.preventDefault();
  const location = search.value;
  fetch(`/weather?address=${location}`).then(
    (response) => {
      response.json().then(({ error, location, forecast }) => {
        if (error) {
          console.log(error);
          messageParaOne.textContent = error; 
        } else {
          console.log(location);
          console.log(forecast);
          messageParaOne.textContent =location; 
          messageParaTwo.textContent = forecast; 
        }
      });
    }
  );
  
  
});



