/* eslint-disable @next/next/no-css-tags */
import { inter } from "@/libs/fonts";
import "@/styles/global.scss";
import Footer from "@/components/Footer/Footer";
import { DataSeo } from "@/libs/constants";

export const metadata = {
  title: DataSeo.seoTitle,
  description: DataSeo.seoDescription,
  icon: "/favicon.ico",
  openGraph: {
    images: [DataSeo.seoImage],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`,
  },
  twitter: {
    title: DataSeo.seoTitle,
    description: DataSeo.seoDescription,
    images: [DataSeo.seoImage],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
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
          href="/favicon/apple-touch-icon.png"
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
