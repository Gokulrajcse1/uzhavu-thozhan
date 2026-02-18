"use client";

import Sidebar from "../components/sidebar";
import Header from "../components/header"; 
import { usePathname } from "next/navigation";
import { LanguageProvider } from "../context/LanguageContext"; // 1. Provider-ah import pannunga
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Notification page check
  const isNotificationPage = pathname === "/notification";

  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row bg-[#F8FAf9] min-h-screen">
        {/* 2. LanguageProvider-ah wrap pannunga - idhu thaan brain */}
        <LanguageProvider>
          
          <Sidebar />

          <main className="flex-1 w-full overflow-y-auto pt-24 lg:pt-0 transition-all duration-300">
            <div className="max-w-6xl mx-auto p-5 md:p-8 lg:p-12">
              
              {/* Header render only if not on notification page */}
              {!isNotificationPage && <Header />}

              <div className={`${!isNotificationPage ? "mt-2" : "mt-0"}`}>
                 {children}
              </div>
              
            </div>
          </main>

        </LanguageProvider>
      </body>
    </html>
  );
}