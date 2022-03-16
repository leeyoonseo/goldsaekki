import styled from 'styled-components';
// import withProps from '@/utils/withProps';
import { Props } from './button';
import React from 'react';

// export const Button = withProps<Props>()(styled.button)`
export const Button = styled.button<Props>`
  padding: 14px 0;
  width: 100%;
  height: 56px;
  font-size: 18px;
  font-weight: 800;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.light.secondaryDark};
  background: inherit;
  color: ${({ theme }) => theme.light.secondaryDark};
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background: inherit;
    color: ${({ theme }) => theme.light.secondary};
  }

  &:disabled {
    opacity: 0.2;
  }

  &.large {
    width: 200px;
  }

  &.medium {
    width: 150px;
  }

  &.small {
    width: 80px;
  }

  &.primary {
    background: ${({ theme }) => theme.light.secondary};
    color: #fff;
    border: none;

    &:hover {
      background: ${({ theme }) => theme.light.secondaryDark};
    }
  }

  &.gray {
    background: ${({ theme }) => theme.light.gray};
    color: #1a1a1a;
    border: none;

    &:hover {
      background: ${({ theme }) => theme.light.grayDark};
    }
  }

  &.danger {
    border-color: ${({ theme }) => theme.light.dangerBorderColor};
    background: ${({ theme }) => theme.light.dangerBgColor};
    color: ${({ theme }) => theme.light.dangerColor};

    &:hover {
      background: ${({ theme }) => theme.light.dangerBgColorDark};
    }
  }
` as React.FunctionComponent<Props>;
