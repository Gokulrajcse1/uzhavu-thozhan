import Sidebar from "../components/sidebar";
import Header from "../components/header"; // Header import pannunga
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row bg-[#F8FAf9] min-h-screen">
        {/* SIDEBAR: Mobile-la top-bar-ah irukkum, Desktop-la side-bar-ah irukkum */}
        <Sidebar />

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 w-full overflow-y-auto 
          pt-24 lg:pt-0  /* Mobile-la Sidebar top-bar-ku gap vidum */
          transition-all duration-300"
        >
          {/* Max-width container to keep UI clean on large screens */}
          <div className="max-w-6xl mx-auto p-5 md:p-8 lg:p-12">
            
            {/* HEADER: Yella page-layum mela "Good Morning" message kaatum */}
            <Header />

            {/* PAGE CONTENT: Inga thaan Profile, Home, etc. render aagum */}
            <div className="mt-2">
               {children}
            </div>
            
          </div>
        </main>
      </body>
    </html>
  );
}