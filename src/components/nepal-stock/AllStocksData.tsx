
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, TrendingDown } from 'lucide-react';

const AllStocksData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [sortBy, setSortBy] = useState('marketCap');

  const stocksData = [
    { symbol: 'HDHPC', name: 'Himalayan Distillery Ltd.', sector: 'Manufacturing', price: 204.00, change: 0.63, changePercent: 0.31, volume: 63785, marketCap: '12.8B', pe: 15.4 },
    { symbol: 'RHPL', name: 'Raghu Hydro Power Ltd.', sector: 'Hydropower', price: 388.00, change: 5.66, changePercent: 1.48, volume: 43191, marketCap: '18.5B', pe: 22.1 },
    { symbol: 'MANDU', name: 'Mandu Hydro Power Ltd.', sector: 'Hydropower', price: 858.00, change: -4.66, changePercent: -0.54, volume: 578, marketCap: '45.2B', pe: 18.9 },
    { symbol: 'MHNL', name: 'Mai Hydro Nepal Ltd.', sector: 'Hydropower', price: 255.30, change: -2.66, changePercent: -1.03, volume: 15092, marketCap: '8.9B', pe: 16.2 },
    { symbol: 'RFPL', name: 'Radhi Forestry Products Ltd.', sector: 'Manufacturing', price: 621.00, change: 28.17, changePercent: 4.75, volume: 110919, marketCap: '24.1B', pe: 19.7 },
    { symbol: 'ILI', name: 'IME Life Insurance Ltd.', sector: 'Insurance', price: 448.30, change: 1.92, changePercent: 0.43, volume: 11355, marketCap: '15.6B', pe: 14.8 },
    { symbol: 'AKPL', name: 'Arun Kabeli Power Ltd.', sector: 'Hydropower', price: 288.00, change: 17.81, changePercent: 6.59, volume: 1604735, marketCap: '78.4B', pe: 25.3 },
    { symbol: 'USLB', name: 'United Savings & Laghubitta', sector: 'Finance', price: 1920.00, change: -41.56, changePercent: -2.12, volume: 3324, marketCap: '95.7B', pe: 28.4 },
    { symbol: 'HLI', name: 'Himalayan Life Insurance', sector: 'Insurance', price: 403.00, change: 2.76, changePercent: 0.69, volume: 97890, marketCap: '18.9B', pe: 16.5 },
    { symbol: 'NABIL', name: 'Nabil Bank Ltd.', sector: 'Banking', price: 492.30, change: 1.37, changePercent: 0.28, volume: 17834, marketCap: '65.2B', pe: 15.4 },
    { symbol: 'SCBNL', name: 'Standard Chartered Bank Nepal', sector: 'Banking', price: 613.00, change: 0.15, changePercent: 0.02, volume: 5371, marketCap: '48.7B', pe: 12.8 },
    { symbol: 'EBL', name: 'Everest Bank Ltd.', sector: 'Banking', price: 651.00, change: 5.11, changePercent: 0.79, volume: 64325, marketCap: '52.3B', pe: 18.2 },
    { symbol: 'KBL', name: 'Kumari Bank Ltd.', sector: 'Banking', price: 209.70, change: 1.48, changePercent: 0.71, volume: 165279, marketCap: '28.4B', pe: 14.6 },
    { symbol: 'UPPER', name: 'Upper Tamakosi Hydro Power', sector: 'Hydropower', price: 200.00, change: 0.25, changePercent: 0.13, volume: 80329, marketCap: '125.8B', pe: 22.1 },
    { symbol: 'CHCL', name: 'Chilime Hydro Company Ltd.', sector: 'Hydropower', price: 564.00, change: 12.34, changePercent: 2.24, volume: 363291, marketCap: '89.5B', pe: 19.7 },
    { symbol: 'NLICL', name: 'Nepal Life Insurance Co. Ltd.', sector: 'Insurance', price: 600.00, change: 4.90, changePercent: 0.82, volume: 11170, marketCap: '42.8B', pe: 16.8 },
    { symbol: 'NICL', name: 'Nepal Insurance Co. Ltd.', sector: 'Insurance', price: 779.00, change: 14.77, changePercent: 1.93, volume: 12277, marketCap: '35.7B', pe: 13.4 },
    { symbol: 'CFCL', name: 'Central Finance Co. Ltd.', sector: 'Finance', price: 533.00, change: 24.08, changePercent: 4.73, volume: 14605, marketCap: '18.7B', pe: 9.8 },
    { symbol: 'NHPC', name: 'National Hydro Power Co.', sector: 'Hydropower', price: 221.50, change: 2.01, changePercent: 0.92, volume: 77362, marketCap: '156.4B', pe: 21.5 },
    { symbol: 'HIDCL', name: 'Hydroelectricity Investment', sector: 'Hydropower', price: 317.20, change: 6.72, changePercent: 2.16, volume: 648146, marketCap: '198.7B', pe: 24.8 },
    { symbol: 'NTC', name: 'Nepal Telecom Company', sector: 'Communication', price: 869.00, change: 30.71, changePercent: 3.66, volume: 410784, marketCap: '425.6B', pe: 18.9 },
    { symbol: 'SANIMA', name: 'Sanima Bank Ltd.', sector: 'Banking', price: 316.00, change: 4.47, changePercent: 1.43, volume: 40640, marketCap: '38.9B', pe: 16.2 },
    { symbol: 'GBIME', name: 'Global IME Bank Ltd.', sector: 'Banking', price: 234.00, change: -0.16, changePercent: -0.07, volume: 108887, marketCap: '45.8B', pe: 15.7 },
    { symbol: 'MBL', name: 'Muktinath Bikas Bank', sector: 'Banking', price: 218.00, change: 1.52, changePercent: 0.70, volume: 97869, marketCap: '32.4B', pe: 14.9 },
    { symbol: 'NBL', name: 'Nepal Bank Ltd.', sector: 'Banking', price: 253.50, change: -0.60, changePercent: -0.24, volume: 33873, marketCap: '28.7B', pe: 13.8 },
  ];

  const sectors = ['all', 'Banking', 'Hydropower', 'Insurance', 'Finance', 'Manufacturing', 'Communication'];

  const filteredStocks = stocksData.filter(stock => {
    const matchesSearch = stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stock.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || stock.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const getSectorColor = (sector: string) => {
    const colors = {
      'Banking': 'bg-blue-500/20 text-blue-400',
      'Hydropower': 'bg-green-500/20 text-green-400',
      'Insurance': 'bg-purple-500/20 text-purple-400',
      'Finance': 'bg-yellow-500/20 text-yellow-400',
      'Manufacturing': 'bg-orange-500/20 text-orange-400',
      'Communication': 'bg-pink-500/20 text-pink-400',
    };
    return colors[sector as keyof typeof colors] || 'bg-gray-500/20 text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            All Stocks - Nepal Stock Exchange (Live Data)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stocks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Sector" />
              </SelectTrigger>
              <SelectContent>
                {sectors.map(sector => (
                  <SelectItem key={sector} value={sector}>
                    {sector === 'all' ? 'All Sectors' : sector}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketCap">Market Cap</SelectItem>
                <SelectItem value="volume">Volume</SelectItem>
                <SelectItem value="change">% Change</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Stocks Table */}
      <Card className="glass-card">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Company Name</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead className="text-right">LTP (NPR)</TableHead>
                  <TableHead className="text-right">Point Change</TableHead>
                  <TableHead className="text-right">% Change</TableHead>
                  <TableHead className="text-right">Volume</TableHead>
                  <TableHead className="text-right">Market Cap</TableHead>
                  <TableHead className="text-right">P/E</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStocks.map((stock, index) => (
                  <TableRow key={index} className="hover:bg-background/50">
                    <TableCell className="font-medium">{stock.symbol}</TableCell>
                    <TableCell className="max-w-xs truncate">{stock.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={getSectorColor(stock.sector)}>
                        {stock.sector}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-mono">{stock.price.toLocaleString()}</TableCell>
                    <TableCell className="text-right">
                      <div className={`flex items-center justify-end gap-1 ${stock.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {stock.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                        {stock.change > 0 ? '+' : ''}{stock.change}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={stock.changePercent > 0 ? 'text-green-400' : 'text-red-400'}>
                        {stock.changePercent > 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-mono">{stock.volume.toLocaleString()}</TableCell>
                    <TableCell className="text-right font-mono">{stock.marketCap}</TableCell>
                    <TableCell className="text-right font-mono">{stock.pe}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Market Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Stocks</p>
              <p className="text-2xl font-bold">{filteredStocks.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Gainers</p>
              <p className="text-2xl font-bold text-green-400">
                {filteredStocks.filter(s => s.change > 0).length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Losers</p>
              <p className="text-2xl font-bold text-red-400">
                {filteredStocks.filter(s => s.change < 0).length}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Avg Change</p>
              <p className="text-2xl font-bold">
                {(filteredStocks.reduce((acc, s) => acc + s.changePercent, 0) / filteredStocks.length).toFixed(2)}%
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AllStocksData;
