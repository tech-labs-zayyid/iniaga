import "@/styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { AppProvider } from "@/context/AppContext";
import Layout from "@/components/global/layout";

export const metadata = {
  title: "Iniaga - Modern Landing Page",
  description: "Iniaga is a Modern Landing Page built with Next.js and TypeScript",
  keywords: "Iniaga, Next.js, TypeScript, Landing Page, Modern UI, Web Development",
  openGraph: {
    title: "Iniaga - Modern Landing Page",
    description: "Iniaga is a Modern Landing Page built with Next.js and TypeScript",
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
    description: "Iniaga is a Modern Landing Page built with Next.js and TypeScript",
    images: ["/assets/crop_logo.png"],
  },
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <AppProvider>
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  );
}
