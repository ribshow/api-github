import React from 'react';
import PropTypes from 'prop-types';

import { Container, Name, Description, Footer, Lang, Link} from './styles';

import { langColors } from '../../../../services/config';

export default function Repository({ repository }) {
  const colors = langColors[repository.language && repository.language.toLowerCase()];

  return (
    <Container color={colors}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={colors}>
        {repository.language === null ? (
            <Lang>N/A</Lang>
          ) : (
            <Lang>{repository.language}</Lang>
          )
        }
        <Link href={repository.html_url} target="_blank">
          VER
        </Link>
      </Footer>
    </Container>
  )
};

Repository.propTypes = {
  repository: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    language: PropTypes.string,
  }).isRequired,
};
