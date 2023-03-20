const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const submitDish = (values) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => response.json())
    .then((responseMessage) => serverResponse(responseMessage))
    .catch((error) => console.error("Something bad happened!", error));
};

const serverResponse = (response) => {
  alert(`Server response: ${JSON.stringify(response)}`);
};

export default submitDish;
