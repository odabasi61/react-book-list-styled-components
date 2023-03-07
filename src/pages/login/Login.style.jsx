import styled from "styled-components";
import Flex from "../../styles/Flex";

export const LoginContainer = styled(Flex)`
  height: 90vh;
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled(Flex)`
  width: 40rem;
  height: 40rem;
  max-width: 50rem;
  padding: 0.5rem;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  top: 50%;
  left: 50%;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 2rem;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
`;

export const Header = styled.h1`
  font-size: 2rem;
  text-align: center;
  width: 100%;
  -webkit-text-fill-color: transparent;
  color: transparent;
  transform: translate(0.1em, 0.1em);
  background-image: linear-gradient(305deg, darkblue, yellow, darkblue);
  -webkit-background-clip: text;
`;

export const StyledInput = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  outline: none;
  border: none;
  ::placeholder {
    color: black;
  }
  :focus {
    background-color: white;
  }
`;

export const StyledButton = styled.button`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  color: ${({ theme }) => theme.colors.logoColor};
  padding: 15px 0;
  opacity: 0.5;
  font-size: 18px;
  font-weight: 600;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
