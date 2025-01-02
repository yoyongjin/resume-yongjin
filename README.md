This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 초기 설정

- [styled-components SSR 설정](https://nextjs.org/docs/app/getting-started/css-and-styling#styled-components)
  Next.js (App Router)에서 styled-components를 작동시키고 SSR이 가능하도록 설정
  서버에서 스타일을 생성해 클라이언트 HTML로 동적으로 삽입하기 위해 ServerStyleSheet 활용
  ServerStyleSheet => useState로 한 번 생성해서 재사용하는 방식
  useServerInsertedHTML => 서버에서 생성된 동적 스타일을 Next.js의 HTML에 삽입
  StyleSheetManager => 서버와 클라이언트의 스타일 일관성 유지
