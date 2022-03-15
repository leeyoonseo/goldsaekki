import { ReactNode, useState } from "react";
import Layout from "./layout/base";
import Head from "next/head";
import Image from "next/image";
import * as S from "./style/init.styled";
import Input from "@/components/common/Input/input";

const Init = () => {
  const [nickname, setNickname] = useState("");

  const handleInput = ({ target }: { target: HTMLInputElement }) => {
    console.log("handleInput", target.value);
    setNickname(target.value);
  };

  const renderAvatars = () => {
    const avatars = [];
    const maxIdx = 12;

    for (let i = 0; i < maxIdx; i++) {
      const imgPath =
        10 > i + 1 ? `/avatar_0${i + 1}.png` : `/avatar_${i + 1}.png`;

      avatars.push(
        <li className="avatars__item" key={`avatar-${i}`}>
          <div className="avatar__img">
            <Image src={imgPath} layout="fill" alt="아바타 아이콘" />
          </div>
        </li>
      );
    }

    return avatars;
  };

  return (
    <S.InitWrap>
      <div className="init__inner">
        <h2 className="init__title">Welcome!!</h2>

        <ul className="init__input">
          <li className="init__input-item">
            <strong className="init__input-title">닉네임</strong>
            <Input
              placeholder="12자까지 입력가능합니다."
              value={nickname}
              maxLength={12}
              handleInput={handleInput}
            />
          </li>
          <li className="init__input-item">
            <strong className="init__input-title">캐릭터</strong>
            {/* TODO: 우측으로 슬라이드 기능 개발하기 */}
            <S.Avatars>{renderAvatars()}</S.Avatars>
          </li>
        </ul>
      </div>
    </S.InitWrap>
  );
};

Init.getLayout = function getLayout(page: ReactNode) {
  return (
    <>
      <Head>
        <title>OKAYOON | Init</title>
      </Head>

      <Layout>{page}</Layout>
    </>
  );
};

export default Init;
