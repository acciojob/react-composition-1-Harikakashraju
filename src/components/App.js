
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

const tabs = [{title:"Tab 1",content:"Tab 1"},{title:"Tab 2",content:"Tab 2"},{title:"Tab 3",content:"Tab 3"}];

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs}/>
    </div>
  )
}

export default App
