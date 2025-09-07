/* eslint-disable @next/next/no-css-tags */
import { interFont } from "@/libs/fonts";
import "@/styles/global.scss";
import Footer from "@/components/footer";
import { DataSeo } from "@/libs/constants";
import NextTopLoader from "nextjs-toploader";
import ButtonGo2Top from "@/components/button-go-2-top";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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

        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TFNTJFWW');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${interFont.className} antialiased text-[var(--text-color)]`}
      >
        <main className="min-h-[100dvh]">
          <NextTopLoader color="var(--primary-color)" showSpinner={false} />
          <ButtonGo2Top />
          {children}
          <Footer />
        </main>

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFNTJFWW"
            height="0"
            width="0"
            style="display:none; visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}

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
};
