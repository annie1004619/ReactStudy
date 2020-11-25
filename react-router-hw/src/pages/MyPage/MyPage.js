import React from "react";

const MyPage = ({ user }) => {
  const { id, password } = user || {};
  return (
    <div>
      <h1>메인페이지 입니다</h1>
      <div>
        <b>Id</b>
        {id}
      </div>
      <div>
        <b>password</b>
        {password}
      </div>
    </div>
  );
};

export default MyPage;
