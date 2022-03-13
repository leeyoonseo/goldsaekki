import React from "react";
import Link from "next/link";
import * as S from "./header.styled";
import Systemtools from "@/components/template/SystemTools/systemtools";

const Header = () => {
  return (
    <S.Header>
      <div className="header-inner">
        <S.Logo>
          <Link href="/">OKAYOON</Link>
        </S.Logo>

        <Systemtools />
      </div>
    </S.Header>
  );
};

export default Header;
