import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.ericbundylaw.com"),
  title: {
    default: "Eric Bundy, Esq. | Business, Technology & Litigation Counsel",
    template: "%s | Eric Bundy, Esq."
  },
  description:
    "Pennsylvania-licensed attorney providing practical business, technology, contract, regulatory, and litigation support to clients nationwide where permitted.",
  openGraph: {
    title: "Eric Bundy, Esq. | Attorney at Law",
    description:
      "Clear legal strategy, careful drafting, and responsive counsel for businesses and individuals.",
    type: "website",
    locale: "en_US",
    siteName: "Eric Bundy Law"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
