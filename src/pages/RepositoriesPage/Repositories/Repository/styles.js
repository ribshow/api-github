import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);
  border-left: 3px solid
    ${(props) => props.color || props.theme.colors.gray500};
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 75%;
    padding: 10px;
  }
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.text};
  font-weight: normal;
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.25;
  margin: 1rem 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.color || props.theme.colors.gray500};
  font-size: ${(props) => props.theme.fontSize.base};
`;

// Para que ele herde a cor do elemento pai
export const Lang = styled.span`
  color: inherit;
  background: ${(props) => props.theme.colors.text};
  font-weight: bold;
  padding: 5px;
`;

// Botão ver dos repositórios
export const Link = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 1px 1px 1px 1px white;
  transition: background-color 0.25s;
  padding: 0.5rem;

  &:hover{
    background-color: ${(props) => props.theme.colors.text };
  }
`;
