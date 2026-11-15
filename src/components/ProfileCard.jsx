
import "./ProfileCard.css";

function ProfileCard({ name, role, city, isActive,onDelete}) {

  return (
    <div className="profile-card">

      <h2>{name}</h2>

      <p>Role: {role}</p>

      <p>City: {city}</p>

      <p>
        Status:{" "}
        <span className={isActive ? "active" : "inactive"}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </p>
      
      <button onClick={onDelete}>Delete</button>


    </div>
  );
}

export default ProfileCard;
