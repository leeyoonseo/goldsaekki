import styled from 'styled-components';
import withProps from '@/utils/withProps';
import { Props } from './input';

export const Wrap = styled.div`
  position: relative;

  &:-webkit-autofill {
    box-shadow: 0 0 0 1000px transparent inset;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

// export const Input = withProps<Props>()(styled.input)`
export const Input = styled.input<Props>`
  padding: 0 16px;
  width: 100%;
  height: 40px;
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;

  &:placeholder-shown {
    border-color: #e5e5e5;
    color: #4c4c4c;
  }

  &:hover {
    border-color: #ccc;
    color: #4c4c4c;
  }

  &:hover {
    border-color: ${({ theme }) => theme.light.primary};
    color: #1a1a1a;
  }

  &:disabled {
    border-color: #e5e5e5;
    color: #ccc;

    &:placeholder {
      color: #ccc;
    }
  }
` as React.FunctionComponent<Props>;
