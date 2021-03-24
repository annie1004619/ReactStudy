import styled from "styled-components";

export const Layout = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  place-items: center;

  background: #f5f8ff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 36px 48px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 20px;
  text-align: center;
  p {
    margin-top: -10px;
    color: #777;
  }
`;

export const BoxUpload = styled.div`
  display: grid;
  margin-top: 20px;
  place-items: center;
  border: 1px dashed #799cd9;
  padding: 36px 48px;
  background: #fbfbff;
  border-radius: 20px;

  .image-upload {
    display: flex;
    flex-wrap: wrap;
    
    label {
    cursor: pointer;
    
     :hover {
    opacity: .8;
      }
    }
   

    > input {
      display: none;
    }
    
`;

export const ImagePreview = styled.div`
  position: relative;

  #uploaded-image {
    width: 247px;
    height: 226px;
    object-fit: cover;
    border-radius: 20px;
  }

  #close-icon {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    right: 10px;
    top: 10px;
    opacity: .6;
    
    :hover {
    opacity: 1;
  }
`;
