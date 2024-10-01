// src/hooks/useCollection.js
import { useQuery } from '@tanstack/react-query';
import { fetchCollection } from '../services/Api/collectionApi';

export const useCollection = () => {
    return useQuery({
        queryKey: ['collection'], // Updated to queryKey
        queryFn: fetchCollection,  // Updated to queryFn
        staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
        refetchOnWindowFocus: false, // Don't refetch when window is focused
    });
};
