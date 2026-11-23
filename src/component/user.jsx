import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Users from "./users";
import axios from "axios";

function User() {
  const { id } = useParams();
  const [users_data, setdata] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/users/"+id;
 
  async function user_data() {
    const { data } = await axios.get(url);
    setdata(data);
  }
  useEffect(() => {
    user_data();
  }, []);
  
 
  return(<div>
    <h1>{users_data.id}.{users_data.username}</h1>
    <h2>Name :{users_data.name}</h2>
    <h2>Email id :{users_data.email}</h2>
    <h2>Phone :{users_data.phone}</h2>
    <h2>Website :{users_data.website}</h2>
   
  </div>)
}
export default User;
