import styled from 'styled-components';

export const Wrap = styled.div`
  background: ${(props) => props.theme.light.primary};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  height: 100vh;
`;
