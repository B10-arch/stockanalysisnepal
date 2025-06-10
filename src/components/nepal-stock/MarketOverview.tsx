
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

const MarketOverview = () => {
  const marketStats = [
    { title: 'NEPSE Index', value: '2,127.45', change: '+15.23', changePercent: '+0.72%', isPositive: true },
    { title: 'Market Cap', value: 'NPR 3.2T', change: '+45.6B', changePercent: '+1.45%', isPositive: true },
    { title: 'Total Turnover', value: 'NPR 2.4B', change: '-120M', changePercent: '-4.76%', isPositive: false },
    { title: 'Total Volume', value: '8.2M', change: '+1.2M', changePercent: '+17.14%', isPositive: true },
  ];

  const topGainers = [
    { symbol: 'NABIL', name: 'Nabil Bank Ltd.', price: 'NPR 1,245', change: '+8.5%', volume: '12,345' },
    { symbol: 'SCBNL', name: 'Standard Chartered Bank', price: 'NPR 458', change: '+7.2%', volume: '8,967' },
    { symbol: 'EBL', name: 'Everest Bank Ltd.', price: 'NPR 678', change: '+6.8%', volume: '15,432' },
    { symbol: 'KBL', name: 'Kumari Bank Ltd.', price: 'NPR 234', change: '+5.9%', volume: '9,876' },
    { symbol: 'BOKL', name: 'Bank of Kathmandu', price: 'NPR 345', change: '+5.2%', volume: '7,654' },
  ];

  const topLosers = [
    { symbol: 'UPPER', name: 'Upper Tamakosi Hydro', price: 'NPR 456', change: '-4.2%', volume: '23,456' },
    { symbol: 'CHCL', name: 'Chilime Hydro Company', price: 'NPR 567', change: '-3.8%', volume: '18,765' },
    { symbol: 'NHPC', name: 'National Hydro Power', price: 'NPR 289', change: '-3.5%', volume: '14,567' },
    { symbol: 'HPPL', name: 'Himalayan Power Partner', price: 'NPR 198', change: '-3.1%', volume: '11,234' },
    { symbol: 'MHNL', name: 'Mai Khola Hydropower', price: 'NPR 123', change: '-2.9%', volume: '9,876' },
  ];

  return (
    <div className="space-y-6">
      {/* Market Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketStats.map((stat, index) => (
          <Card key={index} className="glass-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.isPositive ? 
                <TrendingUp className="h-4 w-4 text-success" /> : 
                <TrendingDown className="h-4 w-4 text-warning" />
              }
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.isPositive ? 'text-success' : 'text-warning'}`}>
                {stat.change} ({stat.changePercent})
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Top Gainers and Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Gainers */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Top Gainers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topGainers.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="font-semibold text-sm">{stock.symbol}</p>
                    <p className="text-xs text-muted-foreground">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{stock.price}</p>
                    <p className="text-xs text-success">{stock.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Losers */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-warning" />
              Top Losers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topLosers.map((stock, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="font-semibold text-sm">{stock.symbol}</p>
                    <p className="text-xs text-muted-foreground">{stock.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">{stock.price}</p>
                    <p className="text-xs text-warning">{stock.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sector Performance */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Sector Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { sector: 'Banking', change: '+2.3%', isPositive: true },
              { sector: 'Hydropower', change: '-1.8%', isPositive: false },
              { sector: 'Insurance', change: '+1.5%', isPositive: true },
              { sector: 'Finance', change: '+0.8%', isPositive: true },
              { sector: 'Hotels', change: '-0.5%', isPositive: false },
              { sector: 'Manufacturing', change: '+1.2%', isPositive: true },
            ].map((sector, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-background/50">
                <p className="text-sm font-medium">{sector.sector}</p>
                <p className={`text-lg font-bold ${sector.isPositive ? 'text-success' : 'text-warning'}`}>
                  {sector.change}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOverview;
