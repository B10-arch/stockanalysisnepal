
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

const TechnicalAnalysis = () => {
  const [selectedStock, setSelectedStock] = useState('NABIL');
  const [timeframe, setTimeframe] = useState('1D');

  // Comprehensive stock list for Nepal Stock Exchange
  const stockOptions = [
    // Commercial Banks
    { value: 'NABIL', label: 'NABIL - Nabil Bank Limited', sector: 'Commercial Banks' },
    { value: 'SCBNL', label: 'SCBNL - Standard Chartered Bank Nepal', sector: 'Commercial Banks' },
    { value: 'EBL', label: 'EBL - Everest Bank Limited', sector: 'Commercial Banks' },
    { value: 'KBL', label: 'KBL - Kumari Bank Limited', sector: 'Commercial Banks' },
    { value: 'BOKL', label: 'BOKL - Bank of Kathmandu Limited', sector: 'Commercial Banks' },
    { value: 'NICA', label: 'NICA - NIC Asia Bank Limited', sector: 'Commercial Banks' },
    { value: 'HBL', label: 'HBL - Himalayan Bank Limited', sector: 'Commercial Banks' },
    { value: 'NBL', label: 'NBL - Nepal Bank Limited', sector: 'Commercial Banks' },
    { value: 'SANIMA', label: 'SANIMA - Sanima Bank Limited', sector: 'Commercial Banks' },
    { value: 'PCBL', label: 'PCBL - Prime Commercial Bank Limited', sector: 'Commercial Banks' },
    
    // Development Banks
    { value: 'KSBBL', label: 'KSBBL - Karnali Province Development Bank', sector: 'Development Banks' },
    { value: 'SHINE', label: 'SHINE - Shine Resunga Development Bank', sector: 'Development Banks' },
    { value: 'MKJC', label: 'MKJC - Muktinath Krishi Company Limited', sector: 'Development Banks' },
    
    // Hydropower
    { value: 'UPPER', label: 'UPPER - Upper Tamakoshi Hydropower', sector: 'Hydropower' },
    { value: 'CHCL', label: 'CHCL - Chilime Hydropower Company', sector: 'Hydropower' },
    { value: 'NHPC', label: 'NHPC - National Hydropower Company', sector: 'Hydropower' },
    { value: 'AKPL', label: 'AKPL - Arun Kabeli Power Limited', sector: 'Hydropower' },
    { value: 'API', label: 'API - API Power Company Limited', sector: 'Hydropower' },
    { value: 'BPCL', label: 'BPCL - Butwal Power Company Limited', sector: 'Hydropower' },
    
    // Manufacturing
    { value: 'UNL', label: 'UNL - Unilever Nepal Limited', sector: 'Manufacturing' },
    { value: 'SLCF', label: 'SLCF - Shree Lakshmi Cement Factory', sector: 'Manufacturing' },
    { value: 'CHL', label: 'CHL - Chaudhary Group Holdings', sector: 'Manufacturing' },
    
    // Insurance
    { value: 'NICL', label: 'NICL - Nepal Insurance Company Limited', sector: 'Non-Life Insurance' },
    { value: 'ULIL', label: 'ULIL - United Life Insurance Limited', sector: 'Life Insurance' },
    { value: 'NLICL', label: 'NLICL - Nepal Life Insurance Company', sector: 'Life Insurance' },
    
    // Hotels & Tourism
    { value: 'OHL', label: 'OHL - Oriental Hotel Limited', sector: 'Hotels & Tourism' },
    { value: 'TRH', label: 'TRH - Taragaon Regency Hotel', sector: 'Hotels & Tourism' },
    
    // Finance Companies
    { value: 'GUFL', label: 'GUFL - Goodwill Finance Limited', sector: 'Finance' },
    { value: 'JFL', label: 'JFL - Janaki Finance Limited', sector: 'Finance' },
  ];

  // Mock candlestick data
  const chartData = [
    { date: '9:30', open: 1200, high: 1250, low: 1180, close: 1245, volume: 15000 },
    { date: '10:00', open: 1245, high: 1260, low: 1220, close: 1240, volume: 12000 },
    { date: '10:30', open: 1240, high: 1255, low: 1225, close: 1250, volume: 18000 },
    { date: '11:00', open: 1250, high: 1270, low: 1235, close: 1265, volume: 22000 },
    { date: '11:30', open: 1265, high: 1280, low: 1250, close: 1275, volume: 25000 },
    { date: '12:00', open: 1275, high: 1290, low: 1260, close: 1285, volume: 20000 },
    { date: '1:00', open: 1285, high: 1295, low: 1270, close: 1280, volume: 16000 },
    { date: '1:30', open: 1280, high: 1285, low: 1265, close: 1270, volume: 14000 },
    { date: '2:00', open: 1270, high: 1275, low: 1255, close: 1260, volume: 11000 },
    { date: '2:30', open: 1260, high: 1265, low: 1240, close: 1245, volume: 13000 },
  ];

  const technicalIndicators = [
    { name: 'RSI (14)', value: '68.5', signal: 'Neutral', color: 'text-yellow-500' },
    { name: 'MACD', value: '12.5', signal: 'Bullish', color: 'text-green-500' },
    { name: 'SMA (20)', value: '1,235', signal: 'Bullish', color: 'text-green-500' },
    { name: 'EMA (12)', value: '1,248', signal: 'Bullish', color: 'text-green-500' },
    { name: 'Bollinger Bands', value: 'Upper: 1,290', signal: 'Overbought', color: 'text-red-500' },
    { name: 'Stochastic', value: '75.2', signal: 'Overbought', color: 'text-red-500' },
  ];

  const selectedStockInfo = stockOptions.find(stock => stock.value === selectedStock);

  return (
    <div className="space-y-6">
      {/* Stock Selection and Controls */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Technical Analysis
            </CardTitle>
            <div className="flex gap-2">
              <Select value={selectedStock} onValueChange={setSelectedStock}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select Stock" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {stockOptions.map((stock) => (
                    <SelectItem key={stock.value} value={stock.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{stock.value}</span>
                        <span className="text-xs text-muted-foreground">{stock.sector}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1m">1m</SelectItem>
                  <SelectItem value="5m">5m</SelectItem>
                  <SelectItem value="15m">15m</SelectItem>
                  <SelectItem value="1H">1H</SelectItem>
                  <SelectItem value="1D">1D</SelectItem>
                  <SelectItem value="1W">1W</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{selectedStock}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>NPR 1,245.00</span>
              <span className="text-green-500">+15.00 (+1.22%)</span>
              <span>Vol: 45,678</span>
              {selectedStockInfo && (
                <span className="text-xs bg-primary/20 px-2 py-1 rounded">
                  {selectedStockInfo.sector}
                </span>
              )}
            </div>
          </div>
          
          {/* Price Chart */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="date" 
                  stroke="#E6E4DD"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#E6E4DD"
                  fontSize={12}
                  domain={['dataMin - 20', 'dataMax + 20']}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: '#3A3935',
                    border: '1px solid #605F5B',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: '#E6E4DD' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="close" 
                  stroke="#8989DE" 
                  strokeWidth={2}
                  dot={false}
                  name="Price"
                />
                <Line 
                  type="monotone" 
                  dataKey="high" 
                  stroke="#7EBF8E" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                  name="High"
                />
                <Line 
                  type="monotone" 
                  dataKey="low" 
                  stroke="#D2886F" 
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                  name="Low"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Technical Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Technical Indicators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {technicalIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                  <div>
                    <p className="font-medium text-sm">{indicator.name}</p>
                    <p className="text-xs text-muted-foreground">{indicator.value}</p>
                  </div>
                  <span className={`text-sm font-semibold ${indicator.color}`}>
                    {indicator.signal}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Support and Resistance */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle>Support & Resistance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2 text-red-500">Resistance Levels</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>R3:</span>
                    <span className="font-mono">NPR 1,320</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>R2:</span>
                    <span className="font-mono">NPR 1,290</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>R1:</span>
                    <span className="font-mono">NPR 1,270</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-muted pt-4">
                <h4 className="font-semibold text-sm mb-2 text-green-500">Support Levels</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>S1:</span>
                    <span className="font-mono">NPR 1,220</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>S2:</span>
                    <span className="font-mono">NPR 1,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>S3:</span>
                    <span className="font-mono">NPR 1,180</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
