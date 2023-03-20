const submitDish = async (values) => {
  try {
    const response = await fetch(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something bad happened!", error);
  }
};

export default submitDish;
