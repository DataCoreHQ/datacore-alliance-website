export const metadata = {
  title: "DataCore Alliance",
  description: "Data center construction and industrial services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
