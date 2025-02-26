import "@/styles/globals.css";
import Head from "next/head";
import { close, logo, logo1, menu } from "@/public/assets";

export const metadata = {
  title: "Iniaga - Modern Landing Page",
  description:
    "Iniaga is an Modern Landing Page built with Next JS and Typescript",
  keywords: "Iniaga, Next.js, TypeScript, Landing Page, Modern UI, Web Development",
  authors: [{ name: "Zayyid", url: "https://zayyid.vercel.app/" }],
  openGraph: {
    title: "Iniaga - Modern Landing Page",
    description:
      "Iniaga is an Modern Landing Page built with Next JS and Typescript",
    url: "https://iniaga.vercel.app/",
    siteName: "Iniaga",
    images: [
      {
        url: "/assets/crop_logo.png",
        width: 1200,
        height: 630,
        alt: "Iniaga Landing Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Iniaga - Modern Landing Page",
    description:
      "Iniaga is an Modern Landing Page built with Next JS and Typescript",
    images: ["/assets/crop_logo.png"],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Iniaga",
              url: "https://iniaga.vercel.app",
              logo: "https://pandawara.group/assets/icons/ic-pandawara.svg",
              sameAs: [
                "https://www.instagram.com/pandawaragroup/",
                "https://www.tiktok.com/@pandawaragroup?lang=id-ID",
              ],
              department: [
                {
                  "@type": "SiteNavigationElement",
                  name: "About Us",
                  url: "https://iniaga.vercel.app",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Programs",
                  url: "https://iniaga.vercel.app",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Collaborations",
                  url: "https://iniaga.vercel.app",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contribute",
                  url: "https://iniaga.vercel.app",
                },
              ],
            }),
          }}
        />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

