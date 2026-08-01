import "./globals.css";

export const metadata = {
  title: "DataCore Alliance LLC",
  description:
    "Connecting Contractors. Building the Future. DataCore Alliance connects construction partners to mission-critical data center opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
