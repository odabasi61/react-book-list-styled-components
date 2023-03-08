import styled from "styled-components";
import Flex from "../../styles/Flex";

export const CardContainer = styled(Flex)`
  flex-direction: column;
  height: 20rem;
  width: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  background: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 0.5rem;
  border-radius: 1rem;
  margin: 0.7rem;
  box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: none;
    transition: all 0.3s ease-in;
  }
`;

export const CardHeader = styled.h1`
  font-size: 1.2rem;
  text-align: center;
  overflow: hidden;
  height: 5rem;
`;

export const CardImg = styled.img`
  min-height: 10rem;
  max-height: 10rem;
  border-radius: 10px;
`;

export const CardButton = styled.button`
  font-weight: bold;
  padding: 0.7rem;
  outline: none;
  border: none;
  margin: 0.5rem;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
  background: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.linkHoverColor};
`;
