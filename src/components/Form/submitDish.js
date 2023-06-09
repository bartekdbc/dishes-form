const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";

const submitDish = async (values) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await response.json();
  } catch (error) {
    console.error("Something bad happened!", error);
  }
};

export default submitDish;
