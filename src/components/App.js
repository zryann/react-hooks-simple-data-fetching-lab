import { useEffect, useState } from "react";
const App = () => {
  const [img, setImg] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setIsLoaded(true);
        setImg(data.message);
      });
  }, []);
  //   if (!isLoaded) {
  //     return <p>Loading...</p>;
  //   } else return <img src={img} alt="A Random Dog" />;
  return (
    <div>
      {isLoaded ? <img src={img} alt="A Random Dog"></img> : <p>Loading...</p>}
    </div>
  );
};
export default App;
