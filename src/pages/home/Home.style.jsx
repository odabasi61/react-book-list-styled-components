import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;
export const HomeImg = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: 45%;
    height: 50vh;
    border-radius: 1rem;
  }
`;
export const MainContainer = styled(Flex)`
  flex-direction: row;
`;
