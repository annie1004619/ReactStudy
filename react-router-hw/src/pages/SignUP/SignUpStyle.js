import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: purple;
  font-size: 4vw;
  padding: 0px;
  text-align: center;
`;

export const Btn = styled.input`
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const InputItem = styled.div`
  margin-bottom: 7vh;
  width: 25vw;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1vh;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1vw;
  margin-top: 1vh;
`;

export const Input = styled.input`
  width: 25vw;
  height: 5vh;
  text-align: center;
`;
