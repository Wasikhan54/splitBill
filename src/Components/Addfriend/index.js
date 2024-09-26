import { useState } from 'react'    

const Addfriend = ( {friends , setfriends} ) => {
    const [name , setName] = useState('')
    const [url , setUrl] = useState('')
    const addHandler = () => {
        const newFriend = [ ...friends]
        newFriend.push({
            id: friends.length + 1,
            name: name,
            img: url
        })
        setfriends(newFriend)
        setName('')
        setUrl('')

    }
    return (
        <div className="Addfriend">
          <div>
            <h2>Name</h2>
          <input onChange={ (e)=>{ setName(e.target.value)}} value={name} type="text"/>
          </div>
          <div>
            <h2>File url</h2>
          <input onChange={ (e)=>{ setUrl(e.target.value)}} value={url} type="text"/>
          </div>
            <button onClick={addHandler} >Add</button>
        </div>
    )
}

export default Addfriend