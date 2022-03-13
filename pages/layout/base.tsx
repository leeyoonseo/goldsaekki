import React, { ReactNode } from "react";
import * as S from "./base.styled";
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";

type Props = {
  children?: ReactNode;
};

const base = ({ children }: Props) => {
  return (
    <S.Wrap>
      <Header />
      <S.Container>{children}</S.Container>
      <Footer />
    </S.Wrap>
  );
};

export default base;

// TODO:
// - theme 교체 작업할 것
