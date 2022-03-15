import styled from 'styled-components';

export const TextareaWrap = styled.div`
  position: relative;

  .textarea {
    padding: 10px 16px 32px;
    width: 100%;
    height: 160px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 13px;
    font-weight: 500;
    color: #1a1a1a;
    background: #fff;
    resize: none;

    &:placeholder-shown {
      border-color: #e5e5e5;
      color: #4c4c4c;
    }

    &:disabled {
      border-color: #e5e5e5;
      color: #ccc;
    }

    &:focus {
      border-color: ${({ theme }) => theme.light.primary};
      color: #1a1a1a;
    }

    &:hover:not(:focus) {
      border-color: #ccc;
      color: #4c4c4c;
    }
  }
`;

export const Length = styled.div`
  position: absolute;
  bottom: 13px;
  right: 16px;

  & > * {
    font-size: 13px;
    color: #999;
  }

  & > * + * {
    &:before {
      content: '/';
      display: inline-block;
      margin-right: 2px;
    }
  }

  .length-current.activate {
    color: #1a1a1a;
  }
`;
