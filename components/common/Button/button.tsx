import React from "react";
import * as S from "./button.styled";

export interface Props extends React.ComponentProps<"button"> {
  children: string;
}

const Button = (props: Props) => {
  return <S.Button {...props}>{props.children}</S.Button>;
};

export default Button;
