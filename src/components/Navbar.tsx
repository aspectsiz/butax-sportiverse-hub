import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuthState';
import { NavLinks } from './navigation/NavLinks';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import UserMenu from './auth/UserMenu';
import LoginDialog from './auth/LoginDialog';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src="/lovable-uploads/butax-logo.png" alt="Butax Logo" className="h-8" />
          </Link>
          <NavLinks />
        </div>
        
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[385px]">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/butax-logo.png" alt="Butax Logo" className="h-8" />
            </Link>
            <div className="flex flex-col space-y-4">
              <NavLinks />
            </div>
          </SheetContent>
        </Sheet>

        <Link to="/" className="mr-6 flex items-center space-x-2 md:hidden">
          <img src="/lovable-uploads/butax-logo.png" alt="Butax Logo" className="h-8" />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {user ? <UserMenu /> : <LoginDialog />}
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;