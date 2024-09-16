/* eslint-disable @next/next/no-css-tags */
import { inter } from "@/libs/fonts";
import "@/styles/global.scss";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "CÔNG TY TNHH KIẾN TRÚC & NỘI THẤT MỘC VIỆT",
  description:
    "Mộc Việt là đơn vị tư vấn, thiết kế và thi công đồ gỗ nội thất với nhiều năm kinh nghiệm. Chúng tôi chuyên thiết kế và thi công nhà phố, biệt thự, căn hộ cao cấp và nhà máy công xưởng.",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/animate.css" />

        <link rel="stylesheet" href="/assets/css/bootstrap-datepicker.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/icomoon.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
