import { AdminLayout } from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { AdminStats } from "@/components/dashboard/AdminStats";
import { AnalyticsCharts } from "@/components/dashboard/AnalyticsCharts";

const AdminDashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <WelcomeSection />
        <AdminStats />
        <AnalyticsCharts />
        
        <div className="mt-6">
          <Button onClick={handleSignOut} variant="outline">
            Sign Out
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;