import { useParams } from "react-router-dom";

function Aboutc(){
    const {cpy}=useParams()
    return(<div>
        <h2>{cpy}</h2>
    </div>)
}
export default Aboutc;