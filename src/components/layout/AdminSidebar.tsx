import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppWindow,
  BarChart2,
  BookOpen,
  Calendar,
  FileText,
  Inbox,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Package,
  Settings,
  ShoppingCart,
  Users,
  FileBox,
  Building2,
  ExternalLink,
  Lock,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navigationItems = {
  overview: [
    { icon: AppWindow, label: "App", href: "/dashboard/admin" },
    { icon: BarChart2, label: "Analytics", href: "/dashboard/admin/analytics" },
    { icon: Building2, label: "Banking", href: "/dashboard/admin/banking" },
    { icon: Calendar, label: "Booking", href: "/dashboard/admin/booking" },
    { icon: FileText, label: "File", href: "/dashboard/admin/file" },
    { icon: BookOpen, label: "Course", href: "/dashboard/admin/course" },
  ],
  management: [
    { icon: Users, label: "User", href: "/dashboard/admin/users" },
    { icon: Package, label: "Product", href: "/dashboard/admin/products" },
    { icon: ShoppingCart, label: "Order", href: "/dashboard/admin/orders" },
    { icon: FileText, label: "Invoice", href: "/dashboard/admin/invoices" },
    { icon: FileText, label: "Blog", href: "/dashboard/admin/blog" },
    { icon: Building2, label: "Job", href: "/dashboard/admin/jobs" },
    { icon: Building2, label: "Tour", href: "/dashboard/admin/tours" },
    { icon: FileBox, label: "File Manager", href: "/dashboard/admin/files" },
    { icon: Mail, label: "Mail", href: "/dashboard/admin/mail" },
    { icon: MessageSquare, label: "Chat", href: "/dashboard/admin/chat" },
    { icon: Calendar, label: "Calendar", href: "/dashboard/admin/calendar" },
  ],
  misc: [
    { icon: Lock, label: "Permission", href: "/dashboard/admin/permissions" },
    { icon: Layers, label: "Level", href: "/dashboard/admin/levels" },
    { icon: SlidersHorizontal, label: "Params", href: "/dashboard/admin/params" },
    { icon: ExternalLink, label: "External Link", href: "https://butax.com" },
  ],
};

interface AdminSidebarProps {
  open?: boolean;
  onClose: () => void;
}

export const AdminSidebar = ({ open, onClose }: AdminSidebarProps) => {
  // Handle mobile sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open, onClose]);

  const sidebarContent = (
    <>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/butax-logo.png" 
            alt="Butax Logo" 
            className="h-8"
          />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="overview">
            <AccordionTrigger className="px-4">Overview</AccordionTrigger>
            <AccordionContent>
              <SidebarMenu>
                {navigationItems.overview.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Link to={item.href} className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="management">
            <AccordionTrigger className="px-4">Management</AccordionTrigger>
            <AccordionContent>
              <SidebarMenu>
                {navigationItems.management.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Link to={item.href} className="flex items-center space-x-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="misc">
            <AccordionTrigger className="px-4">Miscellaneous</AccordionTrigger>
            <AccordionContent>
              <SidebarMenu>
                {navigationItems.misc.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      {item.label === "External Link" ? (
                        <a 
                          href={item.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </a>
                      ) : (
                        <Link to={item.href} className="flex items-center space-x-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SidebarContent>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex border-r">
        {sidebarContent}
      </Sidebar>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={onClose}>
        <SheetContent side="left" className="w-[300px] p-0">
          {sidebarContent}
        </SheetContent>
      </Sheet>
    </>
  );
};