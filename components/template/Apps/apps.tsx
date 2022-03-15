import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as S from "./apps.styled";
import { apps } from "./data";

const Apps = () => {
  return (
    <S.Apps>
      {apps.map((app) => (
        <li className="app-items" key={app.name}>
          <Link href={app.routePath}>
            <a className="app-link">
              <S.IconWrap>
                <Image src={app.src} layout="fill" alt={app.name} />
              </S.IconWrap>
              <span className="app-name">{app.name}</span>
            </a>
          </Link>
        </li>
      ))}
    </S.Apps>
  );
};

export default Apps;
