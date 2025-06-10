
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketOverview from '@/components/nepal-stock/MarketOverview';
import TechnicalAnalysis from '@/components/nepal-stock/TechnicalAnalysis';
import AIChartAnalysis from '@/components/nepal-stock/AIChartAnalysis';
import AllStocksData from '@/components/nepal-stock/AllStocksData';
import IPOSection from '@/components/nepal-stock/IPOSection';
import NepalDateTime from '@/components/nepal-stock/NepalDateTime';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-primary">Nepal Stock Exchange</h1>
            <p className="text-muted-foreground">Real-time Trading Analysis & Predictions</p>
          </div>
          <NepalDateTime />
        </header>
        
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="technical">Technical Analysis</TabsTrigger>
            <TabsTrigger value="ai-analysis">AI Predictions</TabsTrigger>
            <TabsTrigger value="all-stocks">All Stocks</TabsTrigger>
            <TabsTrigger value="ipo">IPO & Rights</TabsTrigger>
            <TabsTrigger value="calendar">Market Calendar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <MarketOverview />
          </TabsContent>
          
          <TabsContent value="technical">
            <TechnicalAnalysis />
          </TabsContent>
          
          <TabsContent value="ai-analysis">
            <AIChartAnalysis />
          </TabsContent>
          
          <TabsContent value="all-stocks">
            <AllStocksData />
          </TabsContent>
          
          <TabsContent value="ipo">
            <IPOSection />
          </TabsContent>
          
          <TabsContent value="calendar">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Market Calendar</h3>
              <p className="text-muted-foreground mb-4">Nepal Stock Exchange operates Sunday to Friday (except Nepali holidays)</p>
              <div className="grid grid-cols-7 gap-2 text-center">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                  <div key={day} className={`p-2 rounded ${index === 5 ? 'bg-red-500/20' : index === 6 ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
                    <span className="text-sm font-medium">{day}</span>
                    <p className="text-xs mt-1">{index < 5 ? 'Open' : 'Closed'}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
