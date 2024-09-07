import React from 'react'
import PropTypes from 'prop-types';

import Repository from './Repository';

import { Container } from './styles';

export default function Repositories({ repositories, currentLanguage = null }) {
  const repos = repositories
  .filter((repository) =>
    currentLanguage === null
    ||
    repository.language === currentLanguage
  )
  .map((repository) => (
    <Repository key={repository.id} repository={repository} />
  ));
  return (
    <Container>{repos}</Container>
  )
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: PropTypes.string,
};
