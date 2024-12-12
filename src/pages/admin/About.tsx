import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Info, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Management</h2>
          <p className="text-muted-foreground">
            Manage company information and content
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Info className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Company Overview</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mission">Mission Statement</Label>
                <Textarea
                  id="mission"
                  placeholder="Enter company mission"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vision">Vision</Label>
                <Textarea
                  id="vision"
                  placeholder="Enter company vision"
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit">Update Overview</Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-semibold">Key Achievements</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg">
                <Users className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-semibold">10,000+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-accent/5 rounded-lg">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <p className="font-semibold">50+</p>
                  <p className="text-sm text-muted-foreground">Awards Won</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default About;