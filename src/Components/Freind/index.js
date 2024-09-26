import './index.css'

const Friend = ({ friends, setSelected }) => {
  
  const selectHandler = (friend) => {
    console.log(friend.name);  // Log the selected friend's name
    setSelected(friend);  // Set the selected friend in the state
  };

  return (
    <div>
      {friends.map((friend) => (
        <div className="Mainfriend" key={friend.id}>
          <div className='img'>
            <img width={100} height={100} src={friend.img} alt={friend.name} />
          </div>
          <div>
            <h3>{friend.name}</h3>
            <p>{friend.owes}</p>
          </div>
          <button onClick={() => selectHandler(friend)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default Friend;
