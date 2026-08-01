export const metadata = {
  title: "DataCore Alliance",
  description: "Industrial and data center construction services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
