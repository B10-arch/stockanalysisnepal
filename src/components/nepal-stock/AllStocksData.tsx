
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
    { symbol: 'NABIL', name: 'Nabil Bank Ltd.', sector: 'Banking', price: 1245, change: 8.5, changePercent: 0.69, volume: 12345, marketCap: '45.2B', pe: 15.4 },
    { symbol: 'SCBNL', name: 'Standard Chartered Bank Nepal Ltd.', sector: 'Banking', price: 458, change: -2.5, changePercent: -0.54, volume: 8967, marketCap: '23.8B', pe: 12.8 },
    { symbol: 'EBL', name: 'Everest Bank Ltd.', sector: 'Banking', price: 678, change: 15.2, changePercent: 2.29, volume: 15432, marketCap: '38.7B', pe: 18.2 },
    { symbol: 'KBL', name: 'Kumari Bank Ltd.', sector: 'Banking', price: 234, change: -1.8, changePercent: -0.76, volume: 9876, marketCap: '12.4B', pe: 14.6 },
    { symbol: 'UPPER', name: 'Upper Tamakosi Hydro Power Ltd.', sector: 'Hydropower', price: 456, change: 12.4, changePercent: 2.80, volume: 23456, marketCap: '67.8B', pe: 22.1 },
    { symbol: 'CHCL', name: 'Chilime Hydro Company Ltd.', sector: 'Hydropower', price: 567, change: -8.9, changePercent: -1.54, volume: 18765, marketCap: '34.5B', pe: 19.7 },
    { symbol: 'NLICL', name: 'Nepal Life Insurance Co. Ltd.', sector: 'Insurance', price: 890, change: 25.6, changePercent: 2.96, volume: 7654, marketCap: '28.9B', pe: 16.8 },
    { symbol: 'NICL', name: 'Nepal Insurance Co. Ltd.', sector: 'Insurance', price: 432, change: -3.2, changePercent: -0.73, volume: 5432, marketCap: '15.7B', pe: 13.4 },
    { symbol: 'HGI', name: 'Himalayan General Insurance', sector: 'Insurance', price: 321, change: 7.8, changePercent: 2.49, volume: 4321, marketCap: '8.9B', pe: 11.2 },
    { symbol: 'CFCL', name: 'Central Finance Co. Ltd.', sector: 'Finance', price: 198, change: -5.4, changePercent: -2.65, volume: 3210, marketCap: '6.7B', pe: 9.8 },
  ];

  const sectors = ['all', 'Banking', 'Hydropower', 'Insurance', 'Finance', 'Hotels', 'Manufacturing'];

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
      'Hotels': 'bg-pink-500/20 text-pink-400',
      'Manufacturing': 'bg-orange-500/20 text-orange-400',
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
            All Stocks - Nepal Stock Exchange
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
                  <TableHead className="text-right">Price (NPR)</TableHead>
                  <TableHead className="text-right">Change</TableHead>
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
