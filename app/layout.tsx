import "@/styles/globals.css";
export const metadata = {
  title: "Iniaga",
  description:
    "Iniaga is an Modern Landing Page built with Next JS and Typescript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
