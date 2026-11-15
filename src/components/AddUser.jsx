import { useState } from "react";


function AddUser({ onAddUser }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [city, setCity] = useState("");
  const [active, setActive] = useState(false);

  const [errors, setErrors] = useState({});

  const handleSubmit = (x) => {
    x.preventDefault();

    let newErrors = {};

    if (name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!email.includes("@")) {
      newErrors.email = "Email must contain @";
    }

    if (!role) {
      newErrors.role = "Please select role";
    }

    if (!city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onAddUser({
      name,
      email,
      role,
      city,
      isActive: active
    });

    
    setName("");
    setEmail("");
    setRole("");
    setCity("");
    setActive(false);
    setErrors({});
  };

  return (
    <div className="add-user">

      <h2>Add New User</h2>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          value={name}
          onChange={(x) => setName(x.target.value)}
          placeholder="Enter name"
        />
        <p className="error">{errors.name}</p>

        <label>Email:</label>
        <input
          value={email}
          onChange={(x) => setEmail(x.target.value)}
          placeholder="Enter email"
        />
        <p className="error">{errors.email}</p>

        <label>Role:</label>
        <select
          value={role}
          onChange={(x) => setRole(x.target.value)}
        >
          <option value="">Select Role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>UI Designer</option>
          <option>Tester</option>
          <option>Manager</option>
        </select>
        <p className="error">{errors.role}</p>

        <label>City:</label>
        <input
          value={city}
          onChange={(x) => setCity(x.target.value)}
          placeholder="Enter city"
        />
        <p className="error">{errors.city}</p>

        <label>
          <input
            type="checkbox"
            checked={active}
            onChange={(x) => setActive(x.target.checked)}
          />
          Active
        </label>

        <button type="submit">Submit User</button>

      </form>

    </div>
  );
}

export default AddUser;
