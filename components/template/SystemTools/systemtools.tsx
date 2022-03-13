import React from "react";
import * as S from "./systemtools.styled";
import Theme from "../Theme/theme";
import Wifi from "../Wifi/wifi";
import Battery from "../Battery/battery";
import Clock from "../Clock/clock";

const systemtools = () => {
  return (
    <>
      <S.Wrap>
        <S.Tools>
          <li>
            <Theme />
          </li>
          <li>
            <Wifi />
          </li>
          <li>
            <Battery />
          </li>
          <li>
            <Clock />
          </li>
        </S.Tools>
      </S.Wrap>
    </>
  );
};

export default systemtools;

// TODO:
// - 구성 변경할 것
