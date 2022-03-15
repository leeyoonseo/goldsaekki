import React from "react";
import * as S from "./textarea.styled";

const textarea = () => {
  return (
    <S.TextareaWrap>
      <textarea className="textarea" value="" placeholder="입력해주세요." />

      <S.Length>
        <span className="length-current">0</span>
        <span className="length-max">100</span>
      </S.Length>
    </S.TextareaWrap>
  );
};

export default textarea;
