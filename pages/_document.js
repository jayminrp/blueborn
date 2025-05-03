// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* เพิ่ม favicon ตรงนี้ */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* หรือถ้าเป็น .png */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
