import styled from 'styled-components';

export const Header = styled.header`
  padding: 0;
  height: auto;
  color: white;
  background: ${({ theme }) => theme.secondary};
  position: fixed;
  width: 100%;
  z-index: 1000;

  .header-inner {
    padding: 0 2%;
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 30px;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
  }
`;

export const Logo = styled.h1`
  display: inline-block;
  margin-right: auto;

  a {
    &:hover {
      color: white;
    }
  }
`;
