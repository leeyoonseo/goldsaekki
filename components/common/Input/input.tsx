import React from "react";
import * as S from "./input.styled";

export type Props = React.ComponentProps<"input">;

const input = (props: Props) => {
  return (
    <S.Wrap>
      <S.Input type="text" {...props} />
    </S.Wrap>
  );
};

export default input;
