
import React,{useState} from "react";


const Tabs = ({tabs})=>{
  let [tabClicked,setTabClicked] = useState("");

   function handle(value){
    setTabClicked(value.content);
   }
    return(
        <div>
          <ul>
            {
            tabs.map((value)=>
             <li onClick={()=>handle(value)}>{value.title}</li>
             )
            }
          </ul>
          {
            tabClicked && <p>This is the content for {tabClicked}</p>
          }
        </div>
    )
}

export default Tabs