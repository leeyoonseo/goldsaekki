import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import * as S from "./style/init.styled";
import Layout from "./layout/base";
import Input from "@/components/common/Input/input";
import Button from "@/components/common/Button/button";

const Init = () => {
  const [nickname, setNickname] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleInput", e.target.value);
    setNickname(e.target.value);
  };

  const handleCancel = () => {
    console.log("handleCancel");
  };

  const handleConfirm = () => {
    console.log("handleConfirm");
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
      {/* TODO: 포트폴리오 작업 후 링크 추가 */}
      <div className="init__link-portpolio">
        <Link href="#">
          <a> &gt; Portpolio Site</a>
        </Link>
      </div>
      <div className="init__inner">
        <h2 className="init__title">Welcome!!</h2>

        <ul className="init__input">
          <li className="init__input-item">
            <strong className="init__input-title">닉네임</strong>
            <Input
              placeholder="12자까지 입력가능합니다."
              value={nickname}
              maxLength={12}
              onInput={handleInput}
            />
          </li>
          <li className="init__input-item">
            <strong className="init__input-title">캐릭터</strong>
            {/* TODO: 우측으로 슬라이드 기능 개발하기 */}
            <S.Avatars>{renderAvatars()}</S.Avatars>
          </li>
        </ul>

        <div className="init__buttons">
          <Button className="small" onClick={handleCancel}>
            취소
          </Button>
          <Button className="primary small" onClick={handleConfirm}>
            등록
          </Button>
        </div>
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
