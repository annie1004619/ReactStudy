import React from "react";
import { useUserState } from "../../context/UserContext";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MyPage = () => {
  const { user, userList } = useUserState();

  console.log(user);
  console.log(userList);
  return (
    <Container>
      <Title>마이 페이지</Title>
      <UserInfo>
        <Id>아이디 : </Id>
        <Value>
          {user.userId}
          <Line />
        </Value>
      </UserInfo>
      <Link to="/mypage/modify">
        <Btn type="submit" value="수정" />
      </Link>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  color: purple;
  font-size: 4vw;
  font-weight: bold;
  margin-bottom: 5vh;
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 30vw;
  height: 30vh;
  margin-bottom: 5vh;
`;
const Id = styled.div`
  font-weight: bold;
  margin-right: 1vw;
`;
const Line = styled.hr`
  margin: 0px;
  border: 1px solid;
`;
const Value = styled.div``;
const Btn = styled.input`
  background-color: purple;
  border: none;
  color: white;
  width: 7vw;
  height: 5vh;
  text-decoration: none;
  text-align: center;
  font-size: 1vw;
  margin: 0vh auto 1.5vh;
`;

export default MyPage;
