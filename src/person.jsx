import { useState, useEffect } from "react";
import "./App.css";
import "./profile.css";

const API_URL = "https://randomuser.me/api/";

const Person = () => {
  const [profile, setProfile] = useState([]);

  const fetchProfile = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    setProfile(data.results);
    // console.log(data.results);

  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return profile.map((prof) => (
    <div className="profile" key={prof.login.uuid}>
      <div className="profile-picture">
        <img src={prof.picture.large}alt="Profile Picture" />
      </div>
      <div className="profile-info">
        <h1 className="name">{prof.name.first} {prof.name.last}</h1>
        <div className="details">
          <p className="title">{prof.login.username}</p>
          <p className="location">{prof.location.city}, {prof.location.state}, {prof.location.country}</p>
          <p className="age">{prof.dob.age}</p>
          <p className="gender"> {prof.gender}</p>
          <p className="email">{prof.email}</p>
          <p className="phone">{prof.phone}</p>
        </div>
      </div>
    </div>
  ));
};

export default Person;
