import s from "./style.module.css";
import { Search as SearcIcon } from "react-bootstrap-icons";


export function SearchBar({onSubmit}) {
    
    function submit(e){
        if(e.key === "Enter" && e.target.value.trim() !== ""){
            onSubmit(e.target.value)
        }
    }
  return (
    <>
      <SearcIcon size={27} className={s.icon}/>
      <input
        type="text"
        placeholder="Search a show you like"
        className={s.input}
        onKeyUp={submit}
      />
    </>
  );
}
