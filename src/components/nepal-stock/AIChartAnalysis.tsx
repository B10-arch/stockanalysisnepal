
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Area, AreaChart } from 'recharts';
import { Brain, TrendingUp, AlertTriangle, Target, Zap } from 'lucide-react';

const AIChartAnalysis = () => {
  const [selectedStock, setSelectedStock] = useState('NABIL');
  const [predictionPeriod, setPredictionPeriod] = useState('7d');
  const [isGenerating, setIsGenerating] = useState(false);

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

  // Mock prediction data
  const predictionData = [
    { date: 'Day 1', actual: 1245, predicted: 1250, confidence: 85 },
    { date: 'Day 2', actual: 1250, predicted: 1255, confidence: 82 },
    { date: 'Day 3', actual: 1248, predicted: 1260, confidence: 78 },
    { date: 'Day 4', actual: null, predicted: 1265, confidence: 75 },
    { date: 'Day 5', actual: null, predicted: 1270, confidence: 72 },
    { date: 'Day 6', actual: null, predicted: 1275, confidence: 70 },
    { date: 'Day 7', actual: null, predicted: 1280, confidence: 68 },
  ];

  const aiInsights = [
    {
      type: 'bullish',
      title: 'Strong Upward Momentum',
      description: 'Technical indicators suggest continued bullish trend with RSI showing healthy levels.',
      confidence: 78,
      icon: TrendingUp,
    },
    {
      type: 'warning',
      title: 'Volume Concern',
      description: 'Trading volume has decreased by 15% in the last 3 days, indicating potential consolidation.',
      confidence: 65,
      icon: AlertTriangle,
    },
    {
      type: 'target',
      title: 'Price Target',
      description: 'AI model predicts price target of NPR 1,320 within the next 2 weeks.',
      confidence: 72,
      icon: Target,
    },
  ];

  const newsImpact = [
    {
      headline: 'Nepal Rastra Bank announces new monetary policy',
      impact: 'Positive',
      relevance: 'High',
      predictedEffect: '+2.5%',
    },
    {
      headline: 'Banking sector Q4 results show strong growth',
      impact: 'Positive',
      relevance: 'Medium',
      predictedEffect: '+1.8%',
    },
    {
      headline: 'Foreign investment in Nepal banking sector increases',
      impact: 'Positive',
      relevance: 'High',
      predictedEffect: '+3.2%',
    },
  ];

  const handleGeneratePrediction = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  };

  const selectedStockInfo = stockOptions.find(stock => stock.value === selectedStock);

  return (
    <div className="space-y-6">
      {/* AI Analysis Header */}
      <Card className="glass-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              AI-Powered Predictions
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
              <Select value={predictionPeriod} onValueChange={setPredictionPeriod}>
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3d">3 Days</SelectItem>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="14d">14 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                </SelectContent>
              </Select>
              <Button 
                onClick={handleGeneratePrediction}
                disabled={isGenerating}
                className="flex items-center gap-2"
              >
                <Zap className="h-4 w-4" />
                {isGenerating ? 'Analyzing...' : 'Generate'}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{selectedStock} - AI Prediction</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Current: NPR 1,245.00</span>
              <span>Predicted 7d: NPR 1,280.00</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                +2.81% Expected Growth
              </Badge>
              {selectedStockInfo && (
                <span className="text-xs bg-primary/20 px-2 py-1 rounded">
                  {selectedStockInfo.sector}
                </span>
              )}
            </div>
          </div>
          
          {/* Prediction Chart */}
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={predictionData}>
                <XAxis 
                  dataKey="date" 
                  stroke="#E6E4DD"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#E6E4DD"
                  fontSize={12}
                  domain={['dataMin - 10', 'dataMax + 10']}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: '#3A3935',
                    border: '1px solid #605F5B',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: '#E6E4DD' }}
                />
                <Area
                  type="monotone"
                  dataKey="confidence"
                  stroke="none"
                  fill="#8989DE"
                  fillOpacity={0.1}
                  name="Confidence"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#7EBF8E" 
                  strokeWidth={3}
                  dot={{ fill: '#7EBF8E', strokeWidth: 2, r: 4 }}
                  name="Actual Price"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#8989DE" 
                  strokeWidth={2}
                  strokeDasharray="8 8"
                  dot={{ fill: '#8989DE', strokeWidth: 2, r: 3 }}
                  name="AI Prediction"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>AI Market Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {aiInsights.map((insight, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                <div className="p-2 rounded-lg bg-primary/20">
                  <insight.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence}% Confidence
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Impact Analysis */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>News Impact Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsImpact.map((news, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{news.headline}</h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Impact: <span className="text-green-400">{news.impact}</span></span>
                    <span>Relevance: {news.relevance}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="secondary" 
                    className="bg-green-500/20 text-green-400"
                  >
                    {news.predictedEffect}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChartAnalysis;
