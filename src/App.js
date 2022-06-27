
import './App.css';
import {useState} from "react";
function App() {

const [display,setDisplay]=useState("");
const [recDisplay,setRecDisplay]=useState("");

console.log(display)


  return (
    <div className="App">
      <nav className="topbar">
      </nav>
      <div className="container">
        <div className="sender">
          <h1>Sender</h1>
          <input className="senderInput" type="text" placeholder="Message" onChange={event=>setDisplay(event.target.value)}></input>
          <button className="sendbtn" onClick={()=>setRecDisplay(display)}>Send</button>
        </div>

        <div className="receiver">
          <h1>Receiver</h1>
          <input className="receiverInput" type="text" placeholder="Message" value={recDisplay}></input>
          <button className="replybtn">Reply</button>
        </div>

        <div className="attacker">
          <h1>Attacker</h1>
          <input className="attackerInput" type="text" placeholder="Message"  readOnly></input>
        </div>
      </div>
    </div>
  );
}

export default App;
