import React from "react";

const UserProfile = ({ user }) => {
  const {
    name,
    bio,
    contacts,
    skills,
    isLookingForJob,
  } = user;

  return (
    <div className="user-profile">
      <h2>
        {name} —{" "}
        <span>
          {isLookingForJob ? "Ищет работу" : "Не ищет предложений"}
        </span>
      </h2>

      <p>{bio}</p>

      <h3>Контакты</h3>
      <ul>
        <li>Email: {contacts.email}</li>
        <li>Телефон: {contacts.phone}</li>

        {contacts.website && (
          <li>
            Website:{" "}
            <a href={contacts.website} target="_blank" rel="noreferrer">
              {contacts.website}
            </a>
          </li>
        )}
      </ul>

      <h3>Навыки</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

UserProfile.defaultProps = {
  user: {
    name: "Имя не указано",
    bio: "Информация не указана",
    contacts: {
      email: "—",
      phone: "—",
      website: null,
    },
    skills: [],
    isLookingForJob: false,
  },
};

export default UserProfile;
