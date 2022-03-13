import React from "react";
import * as S from "./battery.styled";

const battery = () => {
  const tempGage = 30;

  return (
    <S.Wrap>
      <S.Outline>
        {tempGage && (
          <S.Gauge
            style={{
              width: `${tempGage}%`,
            }}
          />
        )}
      </S.Outline>
    </S.Wrap>
  );
};

export default battery;
