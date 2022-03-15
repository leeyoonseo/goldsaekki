import React from "react";
import * as S from "./input.styled";

interface Props {
  placeholder: string;
  value: string;
  maxLength: number;
  handleInput: ({ target }: { target: EventTarget | null }) => void;
}

const input = ({ maxLength, placeholder, value, handleInput }: Props) => {
  return (
    <S.Wrap>
      <S.Input
        type="text"
        className="input"
        maxLength={maxLength}
        value={value}
        placeholder={placeholder}
        onInput={handleInput}
      />
    </S.Wrap>
  );
};

export default input;
