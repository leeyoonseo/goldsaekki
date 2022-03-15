import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  height: 100vh;
  background: ${(props) => props.theme.light.primary};
  flex-direction: column;
  overflow-x: hidden;
`;

export const Container = styled.div`
  height: 100vh;
`;
