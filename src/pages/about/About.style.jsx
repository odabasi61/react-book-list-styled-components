import styled from "styled-components";
import Flex from "../../styles/Flex";

export const AboutContainer = styled(Flex)`
  flex-direction: column;
  line-height: 2;
  text-align: center;
`;
export const ProfileImg = styled.img`
  margin: 2rem 0;
  border-radius: 50%;
  height: 200px;
  filter: drop-shadow(-5px 10px 10px #666);
`;

export const InfoContainer = styled.div`
  margin: 0 2rem 1rem;
  width: 60%;
  border: 1px solid white;
  padding: 5rem;
  background: ${({ theme }) => theme.colors.detailBgColor};
  color: ${({ theme }) => theme.colors.detailColor};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 90%;
  }
`;

export const IconContainer = styled.div`
  margin: 2rem;
  a {
    color: gray;
    padding: 1rem;
  }
`;
