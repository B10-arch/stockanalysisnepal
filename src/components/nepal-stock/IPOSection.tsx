
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, FileText, Clock, ExternalLink } from 'lucide-react';
import { useIPOAnnouncements } from '@/hooks/useIPOAnnouncements';
import { format } from 'date-fns';

const IPOSection = () => {
  const { data: announcements, isLoading, error } = useIPOAnnouncements();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-500/20 text-green-400';
      case 'closing': return 'bg-orange-500/20 text-orange-400';
      case 'approved': return 'bg-blue-500/20 text-blue-400';
      case 'announced': return 'bg-purple-500/20 text-purple-400';
      case 'closed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ipo': return 'bg-blue-500/20 text-blue-400';
      case 'rights': return 'bg-green-500/20 text-green-400';
      case 'fpo': return 'bg-purple-500/20 text-purple-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const ipoAnnouncements = announcements?.filter(a => a.type === 'ipo') || [];
  const rightsAnnouncements = announcements?.filter(a => a.type === 'rights') || [];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <Card className="glass-card">
          <CardContent className="p-6">
            <p className="text-warning">Error loading IPO data. Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* IPO Announcements */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Recent IPO Announcements
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              <a href="https://www.sharesansar.com/category/ipo-fpo-news" target="_blank" rel="noopener noreferrer">
                View All News
              </a>
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ipoAnnouncements.length > 0 ? (
              ipoAnnouncements.slice(0, 8).map((announcement) => (
                <div key={announcement.id} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-sm">{announcement.company_name}</h3>
                          <Badge variant="secondary" className={getStatusColor(announcement.status)}>
                            {announcement.status.charAt(0).toUpperCase() + announcement.status.slice(1)}
                          </Badge>
                          <Badge variant="outline" className={getTypeColor(announcement.type)}>
                            {announcement.type.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{announcement.title}</p>
                        {announcement.details && (
                          <p className="text-xs text-muted-foreground">{announcement.details}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(announcement.announcement_date), 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-center py-8">No IPO announcements available</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Right Shares */}
      {rightsAnnouncements.length > 0 && (
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Right Share Announcements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rightsAnnouncements.map((announcement) => (
                <div key={announcement.id} className="p-4 rounded-lg bg-background/50 border border-border/50">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-sm">{announcement.company_name}</h3>
                          <Badge variant="secondary" className={getStatusColor(announcement.status)}>
                            {announcement.status.charAt(0).toUpperCase() + announcement.status.slice(1)}
                          </Badge>
                          <Badge variant="outline" className={getTypeColor(announcement.type)}>
                            Rights
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{announcement.title}</p>
                        {announcement.details && (
                          <p className="text-xs text-muted-foreground">{announcement.details}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">
                          {format(new Date(announcement.announcement_date), 'MMM dd, yyyy')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* IPO Calendar */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>IPO Calendar - June 2025</CardTitle>
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
            {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
              <div key={date} className="p-2 text-center border border-border/50 rounded">
                <span className="text-sm">{date}</span>
                {(date === 3 || date === 6 || date === 8) && (
                  <div className="w-2 h-2 bg-primary rounded-full mx-auto mt-1"></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>IPO/Rights Announcement Date</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IPOSection;
