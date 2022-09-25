import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import UsersList from "./Components/UsersList/UsersList";
import classes from "./App.module.css";

function App() {
  const [dataFetched, setDataFetched] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsersHandler = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();

      setDataFetched(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Navbar onClick={getUsersHandler} />
      {dataFetched.length === 0 && (
        <p className={classes.text}>
          Click on the <span>Get Users</span> Button to fetch data !! 😡😡
        </p>
      )}
      {loading ? (
        <p className={classes.text}>Loading.....</p>
      ) : (
        <UsersList users={dataFetched} />
      )}
    </>
  );
}

export default App;
