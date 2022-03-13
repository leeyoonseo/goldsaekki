import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  text-align: center;
  color: #fff;
  cursor: "default";
`;

const clock = () => {
  const tempTime = "12:00";

  return <Wrap>{tempTime}</Wrap>;
};

export default clock;
