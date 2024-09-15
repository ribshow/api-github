import React from 'react';
import PropTypes from 'prop-types';

import { Container, Selector, Cleaner, DivButton } from './styles';


export default function Filter({ languages, currentLanguage = null, onClick = null }) {
  const selectors = languages.map(( {name, count, color} ) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected': ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  // função para limpar a seleção do filtro
  const onClean = () => {
    onClick(undefined);
  }

  return (
    <Container>
      {selectors}
      <DivButton>
        <Cleaner onClick={onClean}>Limpar</Cleaner>
      </DivButton>
    </Container>
  )
}

Filter.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string,
    }).isRequired,
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};



