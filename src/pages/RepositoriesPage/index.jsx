import React, { useState, useEffect } from 'react'

// recuperando o parâmetro
import { useParams } from 'react-router-dom';

// icons error
import { MdErrorOutline, MdOutlineKeyboardReturn } from "react-icons/md";

import { Error, Msg, ReturnBack, Loading, Container, Sidebar, Main, Back, DivBack } from './styles';

import { getUser, getRepos, getLangsFrom } from '../../services/api';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

export default function RepositoriesPage() {
  const { login } = useParams();

  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [error, setError] = useState(null);
  // estado para o carregamento
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      try {
        const [userResponse, repositorieResponse] = await Promise.all([
          getUser(login),
          getRepos(login)
        ]);

        setUser(userResponse.data);
        setRepositories(repositorieResponse.data);
        setLanguages(getLangsFrom(repositorieResponse.data));

      } catch (err) {
        setError(
          <Error>
            <ReturnBack href="/api-github">
              <MdOutlineKeyboardReturn size={24} />
            </ReturnBack>
            <Msg>
              <MdErrorOutline size={60}/>
            </Msg>
            <Msg>{err.message}</Msg>
          </Error>
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [login]);

  // se a api demorar para consultar ela retorna uma tela de carregamento
  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  }


  if(loading){
    return <Loading>Carregando...</Loading>;
  }

  // Calculo dos filters
    return (
      <Container>
        <Sidebar>
          <DivBack>
            <Back href="/api-github">
              <MdOutlineKeyboardReturn size={30} />
            </Back>
          </DivBack>
          <Profile user={user} />
          <Filter
            languages={languages}
            currentLanguage={currentLanguage}
            onClick={onFilterClick}
          />
        </Sidebar>
        <Main>
          <Repositories
            repositories={repositories}
            currentLanguage={currentLanguage}
          />
        </Main>
      </Container>
  )
};


