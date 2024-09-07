import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  overflow-y: auto;
  max-height: 80vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: auto;
    padding: 20px;
  }
`;
