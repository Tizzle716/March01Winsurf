import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import { Database } from '../types/database';

type Profile = Database['public']['Tables']['profiles']['Row'];

export const useProfile = (user: User | null) => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!user) {
          setProfile(null);
          return;
        }

        const { data, error: fetchError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (fetchError) throw fetchError;

        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const updateProfile = async (updates: Partial<Profile>) => {
    try {
      if (!user) throw new Error('No user logged in');

      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (updateError) throw updateError;

      // Refresh profile data
      const { data, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (fetchError) throw fetchError;

      setProfile(data);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'An error occurred'
      };
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile
  };
};
