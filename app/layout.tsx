import "@/styles/globals.css";
import Head from "next/head";
import { close, logo, logo1, menu } from "@/public/assets";

export const metadata = {
  title: "Iniaga",
  description:
    "Iniaga is an Modern Landing Page built with Next JS and Typescript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/* <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Iniaga",
              url: "https://pandawara.group",
              logo: "https://pandawara.group/assets/icons/ic-pandawara.svg",
              sameAs: [
                "https://www.instagram.com/pandawaragroup/",
                "https://www.tiktok.com/@pandawaragroup?lang=id-ID",
              ],
              department: [
                {
                  "@type": "SiteNavigationElement",
                  name: "About Us",
                  url: "https://pandawara.group/about-us",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Programs",
                  url: "https://pandawara.group/programs",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Collaborations",
                  url: "https://pandawara.group/collaboration",
                },
                {
                  "@type": "SiteNavigationElement",
                  name: "Contribute",
                  url: "https://pandawara.group/donate/amount",
                },
              ],
            }),
          }}
        />
      </Head> */}

      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
