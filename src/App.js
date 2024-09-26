import './App.css';
import Friend from './Components/Freind/index.js'; 
import Addfriend from './Components/Addfriend/index.js';
import SplitBill from './Components/Splitbill/index.js';
import { useState } from 'react'; 

function App() {
  const [OpenAddFriend, setOpenAddFriend] = useState(false)
  const [selected , setSelected ] = useState(null)
const [friends , setfriends  ] = useState([
  {
    id: 1,
    name: "wasi",
    owes: 'you pay on $300',
    img: "https://i.pinimg.com/236x/16/00/f0/1600f09510f56a9a67fc4567b6503696.jpg"
  },
  {
    id: 1,
    name: "Ahmed",
    owes: 'you pay on $300',
    img: "https://i.pinimg.com/736x/ba/67/30/ba67305973b0edc5e52e953ac5d18e9c.jpg"
  },
  {
    id: 1,
    name: "Ahmed",
    owes: 'you pay on $300',
    img: "https://i.pinimg.com/736x/ba/67/30/ba67305973b0edc5e52e953ac5d18e9c.jpg"
  }
]
) 
  const openHandler = () => {
    setOpenAddFriend(true)
  }

  const closeHandler = () => {
    setOpenAddFriend(false)
  }
  return (
   <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
    <div style={{
      width: "50%",
    }}>
      < Friend friends={friends} setSelected={setSelected} />
      { OpenAddFriend && <Addfriend friends={friends} setfriends={setfriends} />}
      <div>
        <button onClick={openHandler}>Addfriend</button>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
    <div style={{width: "50%"}}>
   <SplitBill selected={selected} friends={friends}  />   
    </div>
   </div>
  );
}

export default App;
