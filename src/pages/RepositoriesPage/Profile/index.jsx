import React from 'react';
import PropTypes from 'prop-types';

// Importando icones
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

// Importando componentes estilizados
import { Container, Header, Avatar, Login, Name, Inner, Data, Links } from './styles';


function Profile({ user }) {
  return(
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20}/>
          {user.followers}&nbsp;<i>seguidores</i>&nbsp; &middot; &nbsp;{user.following} &nbsp;<i>seguindo</i>
        </Data>
        {/* Verificando se a variavel existe */}
        {user.company && (
          <Data><MdWork size={20} />
          {user.company}
        </Data>
        )}
        {/* Verificando se a variável existe */}
        {user.location && (
          <Data>
            <MdLocationCity size={20} />{user.location}
          </Data>
        )}
        {/* Verificando se a variável existe */}
        {user.blog && (
          <Data><MdLink size={20} />
          <Links href={user.blog} target="_blank" rel="noreferrer">
            {user.blog}
          </Links>
        </Data>
        )}
      </Inner>
    </Container>
  )
};

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
