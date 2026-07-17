import "./globals.css";

export const metadata = {
  title: "DocuMind",
  description: "Chat with your documents using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}