import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  font-size: 0.75rem;
`;

const LoadingComponent = () => (
  <LoadingWrapper>
    <CircularProgress />
    Loading...
  </LoadingWrapper>
);

export default LoadingComponent;
