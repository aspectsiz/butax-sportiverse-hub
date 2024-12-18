import Navbar from "../Navbar";
import Footer from "../Footer";

interface MainLayoutProps {
  children: React.ReactNode;
  includeFooter?: boolean;
}

const MainLayout = ({ children, includeFooter = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      {includeFooter && <Footer />}
    </div>
  );
};

export default MainLayout;