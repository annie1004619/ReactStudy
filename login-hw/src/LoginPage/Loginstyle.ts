import styled from "styled-components";

export const MyDiv = styled.div`
  padding: 0px;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const MyH1 = styled.h1`
  color: purple;
  font-size: 6vw;
  padding: 0px;
`;
export const MyUl = styled.ul`
  list-style: none;
  padding: 0px;
`;
export const MyLi = styled.li`
  width: 28vw;
  display: flex;
  align-items: center;
  font-size: 1.6vw;
   margin 0 auto;
`;
export const InputDiv = styled.div`
  width: 17vw;
`;
export const MyInput = styled.input`
  :focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    color: gray;
    font-size: 1vw;
  }
`;

export const MyLabel = styled.label`
  margin-right: 1vw;
  height: 5vh;
`;
export const SubmitInput = styled.input`
  background-color: purple;
  border: none;
  color: white;
  width: 10vw;
  height: 5vh;
  text-decoration: none;
  text-align: center;
  font-size: 1vw;
`;
