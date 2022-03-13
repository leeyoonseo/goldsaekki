interface Apps {
  id: string;
  name: string;
  routePath: string;
  src: string;
}

export const apps: Apps[] = [
  {
    id: 'guest',
    name: '방명록',
    routePath: '/guestbook',
    src: '/icon_apps_guestbook.png',
  },
  {
    id: 'blog',
    name: '블로그',
    routePath: 'https://okayoon.tistory.com/',
    src: '/icon_apps_blog.png',
  },
  {
    id: 'gallery',
    name: '사진첩',
    routePath: '/gallery',
    src: '/icon_apps_gallery.png',
  },
  {
    id: 'talk',
    name: '토크',
    routePath: '/',
    src: '/icon_apps_talk.png',
  },
  {
    id: 'game',
    name: '게임',
    routePath: '/',
    src: '/icon_apps_game.png',
  },
  {
    id: 'portfolio',
    name: '포트폴리오',
    routePath: '/',
    src: '/icon_apps_portfolio.png',
  },
];
