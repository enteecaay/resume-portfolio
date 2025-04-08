import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "enteecaay",
  description: "Nguyen Tuan Kiet's Resume Portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Title */}
        <title>{String(metadata.title) || "Default Title"}</title>
        <meta
          name="description"
          content={metadata.description ?? "Default description"}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
