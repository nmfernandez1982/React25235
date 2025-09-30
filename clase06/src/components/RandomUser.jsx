import React, { useEffect, useState } from "react";

function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, []);

  if (!user) return <p>Cargando usuario...</p>;

  return (
    <div>
      <img
        src={user.picture.large}
        alt="Usuario"
        style={{ borderRadius: "50%" }}
      />
      <h3>
        {user.name.first} {user.name.last}
      </h3>
      <p>{user.email}</p>
      <p>{user.location.country}</p>
    </div>
  );
}

export default RandomUser;
