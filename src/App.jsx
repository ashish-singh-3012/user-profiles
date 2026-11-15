
import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import AddUser from "./components/AddUser";
import Form from "./components/Form";
import FormValid from "./components/FormValid";


function App() {

  // yha pe 5 users ka data hai jisse ki hum profile card me show karenge
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul",
      role: "Frontend Developer",
      city: "Indore",
      isActive: true
    },
    {
      id: 2,
      name: "Priya",
      role: "UI Designer",
      city: "Mumbai",
      isActive: false
    },
    {
      id: 3,
      name: "Amit",
      role: "Backend Developer",
      city: "Delhi",
      isActive: true
    },
    {
      id: 4,
      name: "Sneha",
      role: "Tester",
      city: "Pune",
      isActive: false
    },
    {
      id: 5,
      name: "Karan",
      role: "Full Stack Developer",
      city: "Bhopal",
      isActive: true
    }
  ]);

  

  //yha pe hum state ka use kar rahe hai jisse ki hum active users ko filter kar sake
  const [showActive, setShowActive] = useState(false);

  // yha pe hum filteredUsers variable ka use kar rahe hai jisse ki hum active users ko filter kar sake
  const filteredUsers = showActive
    ? users.filter((user) => user.isActive)
    : users;

    //ye delete krega user list k jis user card ko delelte krna hoga

   const handleDelete = (id) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== id)
    );
  };  


const handleAddUser = (newUser) => {
  setUsers((prevUsers) => [
    ...prevUsers,
    {
      ...newUser,
      id: Date.now()
    }
  ]);
};

    

  return (
    <>
    <div className="App">

      <h1>User Profile </h1>
      <Form />
      <FormValid />
      
      
      <AddUser onAddUser={handleAddUser} />
      <h2>Total Users: {users.length}</h2>

      <button onClick={() => setShowActive(true)}>
        Show only active users
      </button>

      <button
        className="all-btn"
        onClick={() => setShowActive(false)}
      >
        Show all users
      </button>
      

      <div className="profile-container">

        {filteredUsers.map((user) => (
          <ProfileCard
            key={user.id}
            name={user.name}
            role={user.role}
            city={user.city}
            isActive={user.isActive}
            onDelete={() => handleDelete(user.id)}

          />
        ))}

      </div>
      

      

    </div>
       
    </>
  );
}

export default App;
