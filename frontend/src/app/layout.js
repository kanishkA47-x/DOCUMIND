import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "DocuMind",
  description: "AI Document Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2500,
            style: {
              borderRadius: "12px",
              background: "#1e293b",
              color: "#fff",
            },
          }}
        />

      </body>
    </html>
  );
}