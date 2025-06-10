
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface IPOAnnouncement {
  id: string;
  company_name: string;
  title: string;
  announcement_date: string;
  status: 'announced' | 'open' | 'closed' | 'approved' | 'closing';
  type: 'ipo' | 'rights' | 'fpo';
  details: string | null;
  created_at: string;
  updated_at: string;
}

export const useIPOAnnouncements = () => {
  return useQuery({
    queryKey: ['ipo-announcements'],
    queryFn: async (): Promise<IPOAnnouncement[]> => {
      const { data, error } = await supabase
        .from('ipo_announcements')
        .select('*')
        .order('announcement_date', { ascending: false });

      if (error) {
        console.error('Error fetching IPO announcements:', error);
        throw error;
      }

      return data || [];
    },
  });
};
