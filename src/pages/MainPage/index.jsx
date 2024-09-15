import React, { useState } from "react";
// importando o icon
import {MdSearch} from "react-icons/md";

import { Container, Logo, Title, Form, Input, Button, ErrorMessage } from "./styles";

import logoGit from '../../assets/images/github-logo.svg';

export default function MainPage() {
  // receberão o que repositorio que foi digitado pelo user
  const [login, setLogin] = useState('');
  // estado para gerenciar a mensagem de erro
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    // impede o envio se o campo estiver vazio
    if(login.trim() === ""){
      event.preventDefault();
      // define a mensagem para o campo de erro
      setError('O campo de busca não pode ser vazio!');
    }else{
      // limpa a mensagem de erro
      setError('');
    }
  }

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
        {/* disabled faz com que o botão fique desativado caso login esteja vazio */}
        <Button to={`/${login}/repositories`} onClick={handleSubmit} disabled={login.trim() === ""}>
          <MdSearch size={42} />
        </Button>
      </Form>
      {/* Exibe a mensage de erro */}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}
