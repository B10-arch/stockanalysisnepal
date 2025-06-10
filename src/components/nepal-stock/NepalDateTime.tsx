
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from 'lucide-react';

const NepalDateTime = () => {
  const [nepalTime, setNepalTime] = useState(new Date());
  const [marketStatus, setMarketStatus] = useState('closed');

  useEffect(() => {
    const timer = setInterval(() => {
      // Convert to Nepal time (UTC+5:45)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const nepalOffset = 5.75; // Nepal is UTC+5:45
      const nepalCurrentTime = new Date(utc + (nepalOffset * 3600000));
      setNepalTime(nepalCurrentTime);

      // Check market status (Sunday to Friday, 10:00 AM to 3:00 PM Nepal time)
      const day = nepalCurrentTime.getDay();
      const hour = nepalCurrentTime.getHours();
      const isWeekday = day >= 0 && day <= 4; // Sunday (0) to Thursday (4)
      const isMarketHours = hour >= 10 && hour < 15;
      
      if (isWeekday && isMarketHours) {
        setMarketStatus('open');
      } else if (isWeekday) {
        setMarketStatus('pre-market');
      } else {
        setMarketStatus('closed');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNepalDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatNepalTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getMarketStatusColor = () => {
    switch (marketStatus) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'pre-market': return 'bg-yellow-500/20 text-yellow-400';
      case 'closed': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getMarketStatusText = () => {
    switch (marketStatus) {
      case 'open': return 'Market Open';
      case 'pre-market': return 'Pre-Market';
      case 'closed': return 'Market Closed';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="glass-card w-full lg:w-auto">
      <CardContent className="p-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {/* Date and Time */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{formatNepalDate(nepalTime)}</p>
                <p className="text-xs text-muted-foreground">Nepal Standard Time</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <div>
                <p className="text-lg font-mono font-bold">{formatNepalTime(nepalTime)}</p>
                <p className="text-xs text-muted-foreground">NPT (UTC+5:45)</p>
              </div>
            </div>
          </div>

          {/* Market Status */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className={getMarketStatusColor()}>
              {getMarketStatusText()}
            </Badge>
            {marketStatus === 'open' && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400">Live</span>
              </div>
            )}
          </div>
        </div>

        {/* Market Hours Info */}
        <div className="mt-2 pt-2 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            Market Hours: Sunday - Friday, 10:00 AM - 3:00 PM NPT
          </p>
          {marketStatus === 'closed' && (
            <p className="text-xs text-muted-foreground">
              Next trading session: {nepalTime.getDay() === 5 ? 'Sunday' : 'Tomorrow'} at 10:00 AM
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NepalDateTime;
