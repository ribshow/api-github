import styled from "styled-components";

// style carregamento
export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
`;

// style error
export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; // Ocupa a altura total da viewport
  color: ${(props) => props.theme.colors.text};
`;

export const Msg = styled.h3`
  font-size: ${(props) => props.theme.fontSize.xl}; // Tamanho da fonte ajustado
  color: ${(props) => props.theme.colors.text};
`;

// Voltar do erro
export const ReturnBack = styled.a`
  position: absolute;
  margin-top: 4rem;
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;

  &:hover{
    cursor: pointer;
  }
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  overflow-y:auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md} ) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.colors.primary};
  min-width: 16rem;
  min-height: 100vh;
  overflow-y: hidden;
  border-right: 1px solid ${(props) => props.theme.colors.text};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md} ) {
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
    height: 100%;
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  min-height: 100%;
  height: 100vh;
  overflow-y: hidden;
  padding: 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md} ) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm} ) {
    padding: 1.5rem;
    min-height: 100%;
    height: 100%;
    overflow: auto;
  }
`;

export const DivBack = styled.div`
  display: block;
  margin-top: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

export const Back = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  transition: color 0.25s;

  &:hover{
    color: ${(props) => props.theme.colors.yellow};
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md} ) {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;
