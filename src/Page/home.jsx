import axios from "axios";
import { useEffect, useState } from "react";
import Users from "../component/users";
import { Link } from "react-router-dom";

function Home() {
  const [users_data, setdata] = useState([]);
  const noo = "nooooooooooo";
  let url = "https://jsonplaceholder.typicode.com/users";
  async function user_data() {
    const { data } = await axios.get(url);
    setdata(data);
  }
  useEffect(() => {
    user_data();
  }, []);

  return (
    <div>
      <h1>This is Home page</h1>
      {users_data.map((us) => (
        // <div  style={{marginRight:"50vw"}}>   dsfsdfdffafaasfafaafv
        <Link key={us.id} to={`/new-try-23-11/home/${us.id}`}>
          <Users  id={us.id} name={us.name} uname={us.username} />
        </Link>
      ))}
    </div>
  );
}
export default Home;
