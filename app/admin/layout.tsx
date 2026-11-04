import Footer from "@/component/admin/Footer";
import Navigation from "@/component/admin/Navigation";
import "../globals.css";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
   <html>
    <body className="min-h-full flex flex-col">
        <Navigation/>
        <div className="flex justify-center items-center flex-grow">
            {children}
        </div>
        <Footer/>
    </body>
   </html>
  );
}

export default AdminLayout;