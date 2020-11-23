import React from "react";

const UserProfile = ({ user }) => {
  const { id, password } = user || {};
  return (
    <div>
      <h1>마이 페이지</h1>
    </div>
  );
};

export default UserProfile;
