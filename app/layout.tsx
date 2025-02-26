import "@/styles/globals.css";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;

