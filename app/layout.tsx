import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import config from "@/lib/config";
import { theme } from "@/lib/theme";
import { Header } from "@/islands/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Container size="responsive" mih="100vh" bg="red">
            <Header />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
