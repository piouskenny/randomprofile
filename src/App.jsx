import "./App.css";
import { useState, useEffect } from "react";
import Person from "./person";

const API_URL = "https://my-json-server.typicode.com/typicode/demo/posts";

const App = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setData(data);
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="App">
      <Person />
      {/* {data.map((item) => (
        <h1>{item.title}</h1>
      ))} */}
    </div>
  );
};

export default App;
