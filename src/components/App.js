// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const dogURL = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    fetch(dogURL)
      .then((r) => r.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoaded(true);
      })
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  )
}

export default App;