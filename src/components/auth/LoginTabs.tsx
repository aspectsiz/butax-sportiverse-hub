import React from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const LoginTabs = () => (
  <Tabs defaultValue="user" className="w-full max-w-3xl mx-auto mb-8">
    <TabsList className="grid w-full grid-cols-3 h-12 bg-transparent p-1 gap-2">
      <TabsTrigger
        value="user"
        className="data-[state=active]:bg-[#4284be] data-[state=active]:text-white rounded-md"
      >
        User
      </TabsTrigger>
      <TabsTrigger
        value="gym"
        className="data-[state=active]:bg-[#4284be] data-[state=active]:text-white rounded-md"
      >
        Gym Dealer
      </TabsTrigger>
      <TabsTrigger
        value="admin"
        className="data-[state=active]:bg-[#4284be] data-[state=active]:text-white rounded-md"
      >
        Admin
      </TabsTrigger>
    </TabsList>
  </Tabs>
);