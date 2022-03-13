import React from "react";
import Image from "next/image";
import * as S from "./theme.styled";

const theme = () => {
  return (
    <S.Button>
      <Image src={`/icon-theme-light.png`} layout="fill" alt="테마 아이콘" />
    </S.Button>
  );
};

export default theme;
