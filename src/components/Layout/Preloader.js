import React from 'react';
import styled from 'styled-components';
import loadingGif from '../../assets/loading-arrow.gif';

const StyledSpinner = styled.div`
  text-transform: capitalize;
  text-align: center;
  margin-top: 13rem;
`;

const Preloader = () => {
  return (
    <StyledSpinner>
      <h4>Loading...</h4>
      <img src={loadingGif} alt="" />
    </StyledSpinner>
  );
};

export default Preloader;
