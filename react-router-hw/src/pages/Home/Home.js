import React from "react";
import styled from "styled-components";
import { useUserState } from "../../context/UserContext";

const Home = () => {
  const { user } = useUserState();

  return (
    <div>
      <MainP>{user.userId}님 환영합니다.</MainP>
    </div>
  );
};

export const MainP = styled.p`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Home;
