import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fit Journey",
  description: "Entrenamiento guiado, progresión y seguimiento.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Fit Journey",
    statusBarStyle: "black-translucent"
  },
  icons: {
    apple: "/icon-192.svg",
    icon: "/icon-192.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#0d141b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
