import styled from 'styled-components';

export const InitWrap = styled.div`
  display: flex;
  padding: 24px 2%;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .init__link-portpolio {
    margin-bottom: 8px;
    display: block;
    width: 100%;
    text-align: right;

    a {
      font-size: 13px;

      &:hover {
        color: #fff;
      }
    }
  }

  .init__title {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
  }

  .init__inner {
    padding: 20px;
    display: inline-block;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 15px;
    box-sizing: border-box;

    .init__input-item {
      & + .init__input-item {
        margin-top: 22px;
      }
    }

    .init__input-title {
      display: block;
      margin-bottom: 12px;
    }
  }
`;

export const Avatars = styled.ul`
  display: flex;
  box-sizing: border-box;

  .avatars__item {
    & + .avatars__item {
      margin-left: 12px;
    }

    .avatar__img {
      position: relative;
      width: 64px;
      height: 64px;
    }
  }
`;
