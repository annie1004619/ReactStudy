import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: black;
  height: 47px;
  width: 100%;
`;
export const Logo = styled(Link)`
  color: white;
  font-size: 22px;
  font-weight: 800;
  font-family: Gilroy;
  text-decoration: none;
`;
export const HeaderContents = styled.div`
  display: flex;
  justify-content: space-between;
`;
