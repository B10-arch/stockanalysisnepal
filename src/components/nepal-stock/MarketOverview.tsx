
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

const MarketOverview = () => {
  const marketStats = [
    { title: 'NEPSE Index', value: '2,676.24', change: '+23.14', changePercent: '+0.87%', isPositive: true },
    { title: 'Sensitive Index', value: '456.23', change: '+4.51', changePercent: '+0.99%', isPositive: true },
    { title: 'Total Turnover', value: 'NPR 6.55B', change: '+164M', changePercent: '+2.56%', isPositive: true },
    { title: 'Total Traded Shares', value: '15.81M', change: '+2.1M', changePercent: '+15.24%', isPositive: true },
  ];

  const topGainers = [
    { symbol: 'PURE', name: 'Pure Energy Ltd.', price: 'NPR 681.70', change: '+9.99%', volume: '440' },
    { symbol: 'AKPL', name: 'Arun Kabeli Power Ltd.', price: 'NPR 288.00', change: '+6.59%', volume: '1,604,735' },
    { symbol: 'SMJC', name: 'Samjhauta Finance Ltd.', price: 'NPR 544.00', change: '+5.44%', volume: '70,563' },
    { symbol: 'GFCL', name: 'Goodwill Finance Ltd.', price: 'NPR 655.00', change: '+5.40%', volume: '33,774' },
    { symbol: 'RLFL', name: 'Reliance Finance Ltd.', price: 'NPR 491.30', change: '+5.14%', volume: '18,836' },
  ];

  const topLosers = [
    { symbol: 'RAWA', name: 'Raghupati Jute Mills', price: 'NPR 822.30', change: '-6.17%', volume: '6,813' },
    { symbol: 'OMPL', name: 'Om Prakash Steel', price: 'NPR 1,605.00', change: '-3.23%', volume: '27,033' },
    { symbol: 'NABBC', name: 'NAB Bank Ltd.', price: 'NPR 1,670.00', change: '-3.02%', volume: '7,025' },
    { symbol: 'CFCL', name: 'Central Finance Ltd.', price: 'NPR 533.00', change: '-2.65%', volume: '14,605' },
    { symbol: 'LLBS', name: 'Laxmi Laghubitta', price: 'NPR 1,033.00', change: '-2.09%', volume: '4,168' },
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
              { sector: 'Banking', change: '+1.8%', isPositive: true },
              { sector: 'Hydropower', change: '+2.1%', isPositive: true },
              { sector: 'Insurance', change: '+0.9%', isPositive: true },
              { sector: 'Finance', change: '+3.2%', isPositive: true },
              { sector: 'Hotels', change: '+0.4%', isPositive: true },
              { sector: 'Manufacturing', change: '+1.7%', isPositive: true },
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

      {/* Market Summary */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            Today's Market Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Advanced</p>
              <p className="text-xl font-bold text-green-400">220</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Declined</p>
              <p className="text-xl font-bold text-red-400">76</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Unchanged</p>
              <p className="text-xl font-bold text-gray-400">7</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Scrips</p>
              <p className="text-xl font-bold">303</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketOverview;
