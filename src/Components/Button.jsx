import { useNavigate } from "react-router";
export default function Button(props) {

  return (
    <button className="btna" onClick={props.command}>{props.text}</button>
  )
}


