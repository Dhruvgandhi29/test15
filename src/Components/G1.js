import Axios from "axios";
import { useEffect, useState } from "react";
function G1() {
  //http request we need to place inside the lifecycle methods
  //but as we are working with function component there is no lifecycle methods
  //Instead we have the concept called Hooks which helps us to handle the HTTP request
  //useEffect method is used ti handle side Effects
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users") //returns a promise
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setData(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err)); //if promise is rejected
  }, []); //we need to provide empty list to avoid re rendering of

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
      <h1>Hello</h1>
      {ListNames()}
    </div>
  );
}
export default G1;
