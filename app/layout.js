import "./globals.css";

export const metadata = {
  title: "Nextjs Tailwind Sandbox",
  description: "This is a learning project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
