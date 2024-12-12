import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, Building2, MapPin } from "lucide-react";

const Franchise = () => {
  const franchises = [
    {
      id: 1,
      name: "Butax Fitness Center",
      location: "New York",
      owner: "John Doe",
      status: "Active",
    },
    {
      id: 2,
      name: "Butax Sports Hub",
      location: "Los Angeles",
      owner: "Jane Smith",
      status: "Pending",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Franchise Management
          </h2>
          <p className="text-muted-foreground">
            Manage franchise locations and applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Total Franchises</h3>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Building2 className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Active Locations</h3>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-accent" />
              <div>
                <h3 className="font-semibold">Countries</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Franchise Locations</h3>
            <Button>Add New Franchise</Button>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {franchises.map((franchise) => (
                  <TableRow key={franchise.id}>
                    <TableCell>{franchise.name}</TableCell>
                    <TableCell>{franchise.location}</TableCell>
                    <TableCell>{franchise.owner}</TableCell>
                    <TableCell>{franchise.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Franchise;