import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Donald J. Trump para Presidente 2024",
  description: "Sitio web de Donald J. Trump para Presidente 2024. El regreso de América comienza ahora mismo. ¡Únete a nuestro movimiento para Hacer América Grande Otra Vez!",
  openGraph: {
    title: "Donald J. Trump para Presidente 2024",
    description: "Sitio web de Donald J. Trump para Presidente 2024. El regreso de América comienza ahora mismo. ¡Únete a nuestro movimiento para Hacer América Grande Otra Vez!",
    url: "https://cubanosportrump.com/",
    siteName: "Donald J. Trump para Presidente 2024",
    images: [
      {
        url: "https://cdn.donaldjtrump.com/djtweb24/general/SEO.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donald J. Trump para Presidente 2024",
    description: "Sitio web de Donald J. Trump para Presidente 2024. El regreso de América comienza ahora mismo. ¡Únete a nuestro movimiento para Hacer América Grande Otra Vez!",
    images: ["https://cdn.donaldjtrump.com/djtweb24/general/SEO.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6a103978-4b9a-4166-9482-9da3bf1394be"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
