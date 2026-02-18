"use client"; // usePathname use panna idhu client component-ah irukanum

import Sidebar from "../components/sidebar";
import Header from "../components/header"; 
import { usePathname } from "next/navigation"; // Indha hook-ah import pannunga
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Notification page-la irukkum pothu mattum Header-ah hide panna indha check
  // "/notification" nu unga route name-ah check pannunga
  const isNotificationPage = pathname === "/notification";

  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row bg-[#F8FAf9] min-h-screen">
        <Sidebar />

        <main className="flex-1 w-full overflow-y-auto pt-24 lg:pt-0 transition-all duration-300">
          <div className="max-w-6xl mx-auto p-5 md:p-8 lg:p-12">
            
            {/* Header logic: Notification page illa-na mattum render aagum */}
            {!isNotificationPage && <Header />}

            <div className={`${!isNotificationPage ? "mt-2" : "mt-0"}`}>
               {children}
            </div>
            
          </div>
        </main>
      </body>
    </html>
  );
}