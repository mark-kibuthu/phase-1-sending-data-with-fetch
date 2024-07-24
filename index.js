// Add your code here
// Define the submitData function
function submitData(name, email) {
    // Create the data object to be sent in the request body
    const userData = {
      name: name,
      email: email
    };
  
    // Perform the fetch POST request
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        // Throw an error if the response status is not OK
        return response.json().then(errorData => {
          throw new Error(errorData.message);
        });
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Append the new id to the DOM
      const idDisplay = document.createElement('p');
      idDisplay.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(idDisplay);
    })
    .catch(error => {
      // Append the error message to the DOM
      const errorDisplay = document.createElement('p');
      errorDisplay.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorDisplay);
    });
  }