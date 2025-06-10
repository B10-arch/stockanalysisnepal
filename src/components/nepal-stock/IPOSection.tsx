
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, FileText, Clock } from 'lucide-react';

const IPOSection = () => {
  const upcomingIPOs = [
    {
      company: 'Nepal Telecom Infrastructure Ltd.',
      sector: 'Telecommunication',
      offerSize: 'NPR 2.5B',
      sharePrice: 'NPR 100',
      openDate: '2024-07-15',
      closeDate: '2024-07-19',
      status: 'upcoming',
      daysRemaining: 12,
    },
    {
      company: 'Himalayan Power Company Ltd.',
      sector: 'Hydropower',
      offerSize: 'NPR 1.8B',
      sharePrice: 'NPR 150',
      openDate: '2024-07-22',
      closeDate: '2024-07-26',
      status: 'upcoming',
      daysRemaining: 19,
    },
    {
      company: 'Green Energy Solutions Pvt. Ltd.',
      sector: 'Renewable Energy',
      offerSize: 'NPR 950M',
      sharePrice: 'NPR 80',
      openDate: '2024-07-08',
      closeDate: '2024-07-12',
      status: 'open',
      daysRemaining: 5,
    },
  ];

  const rightShares = [
    {
      company: 'Nabil Bank Ltd.',
      symbol: 'NABIL',
      ratio: '1:4',
      price: 'NPR 950',
      recordDate: '2024-06-28',
      openDate: '2024-07-10',
      closeDate: '2024-07-14',
      status: 'open',
    },
    {
      company: 'Standard Chartered Bank Nepal',
      symbol: 'SCBNL',
      ratio: '1:5',
      price: 'NPR 400',
      recordDate: '2024-07-05',
      openDate: '2024-07-18',
      closeDate: '2024-07-22',
      status: 'upcoming',
    },
    {
      company: 'Everest Bank Ltd.',
      symbol: 'EBL',
      ratio: '1:3',
      price: 'NPR 580',
      recordDate: '2024-07-12',
      openDate: '2024-07-25',
      closeDate: '2024-07-29',
      status: 'upcoming',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'upcoming': return 'bg-blue-500/20 text-blue-400';
      case 'closed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Upcoming IPOs */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Upcoming IPOs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingIPOs.map((ipo, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{ipo.company}</h3>
                      <Badge variant="secondary" className={getStatusColor(ipo.status)}>
                        {ipo.status.charAt(0).toUpperCase() + ipo.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Sector</p>
                        <p className="font-medium">{ipo.sector}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Offer Size</p>
                        <p className="font-medium">{ipo.offerSize}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Share Price</p>
                        <p className="font-medium">{ipo.sharePrice}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Open - Close</p>
                        <p className="font-medium">{ipo.openDate} - {ipo.closeDate}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Days Remaining</p>
                      <p className="text-2xl font-bold text-primary">{ipo.daysRemaining}</p>
                    </div>
                    <Button size="sm" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Right Shares */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Right Share Issues
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {rightShares.map((right, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{right.company}</h3>
                      <Badge variant="outline" className="text-xs">{right.symbol}</Badge>
                      <Badge variant="secondary" className={getStatusColor(right.status)}>
                        {right.status.charAt(0).toUpperCase() + right.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Ratio</p>
                        <p className="font-medium">{right.ratio}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Price</p>
                        <p className="font-medium">{right.price}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Record Date</p>
                        <p className="font-medium">{right.recordDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Open Date</p>
                        <p className="font-medium">{right.openDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Close Date</p>
                        <p className="font-medium">{right.closeDate}</p>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Apply
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* IPO Calendar */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>IPO Calendar - July 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 text-center mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="p-2 font-semibold text-sm text-muted-foreground">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
              <div key={date} className="p-2 text-center border border-border/50 rounded">
                <span className="text-sm">{date}</span>
                {(date === 8 || date === 15 || date === 22) && (
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto mt-1"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>IPO Opening/Closing Date</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IPOSection;
