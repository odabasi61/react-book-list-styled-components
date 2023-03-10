import styled from "styled-components";
import Flex from "../../styles/Flex";

export const DetailContainer = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
`;

export const DetailPart = styled(Flex)`
  flex-direction: column;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.detailBgColor};
  color: ${({ theme }) => theme.colors.detailColor};
  width: 80%;
`;

export const DetailTitle = styled.h1`
  margin: 25px;
  text-align: center;
`;

export const DetailImg = styled.div`
  margin: 2rem;

  img {
    border-radius: 1rem;
  }
`;

export const Description = styled.div`
  min-width: 40%;
  text-align: justify;
  font-size: 1.5rem;
  margin: 1rem 2rem;
`;

export const InfoPart = styled.div`
  min-width: 40%;
  font-size: 1.4rem;
  margin: 2rem;
  text-align: center;
  span {
    margin: 1rem;
  }
`;
