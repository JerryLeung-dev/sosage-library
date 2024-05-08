import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sosage Library",
  description: "Simple book management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <AppRouterCacheProvider>
        <body className={inter.className}>{children}</body>
       </AppRouterCacheProvider>
      
    </html>
  );
}
