import styled from "styled-components";

// flex çok sık kullanılan bir yapı olduğu için onunla ilgili component oluşturduk.
// farklı bir değer girilmezse center default olarak kalsın. farklı değer girilirse mesela justify-space-between vs, onu props olarak aktarır.

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;

export default Flex;