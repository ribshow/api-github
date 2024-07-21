import React, { useState } from "react";
// importando o icon
import {MdSearch} from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import logoGit from '../../assets/images/github-logo.svg';

export default function MainPage() {
  // receberão o que repositorio que foi digitado pelo user
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={logoGit} alt="Api GitHub"/>
      <Title>Api Github</Title>
      <Form>
        <Input
          placeholder="Buscar repositório..."
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}
