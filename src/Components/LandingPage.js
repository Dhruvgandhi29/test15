import { useEffect, useState } from "react";
import Axios from "axios";
function LandingPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []); //square bracket acts as empty space to import data from given link
  //   useEffect acts as a lifecycle method for function component
  const ListNames = () => {
    return data.map((val, ind) => {
      return (
        <p>
          {ind + 1}.{val.name}
        </p>
      );
    });
  };
  return (
    <div>
      <h1>Welcome to the landing page!</h1>
      {ListNames()}
    </div>
  );
}
export default LandingPage;
