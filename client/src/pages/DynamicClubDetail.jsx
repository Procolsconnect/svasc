import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CellPage } from '@/components/site/CellPage';
import { pageBySlug, pages } from '@/data/site';
import { getActivityById } from '@/services/activityService';

export default function DynamicClubDetail() {
  const { slug, category } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const cleanSlug = (slug || '').toLowerCase().trim().replace(/^\//, '');

  useEffect(() => {
    const fetchClubDetail = async () => {
      if (!cleanSlug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        // 1. Try fetching from Backend API
        const res = await getActivityById(cleanSlug);
        const apiData = res?.data || res;

        if (apiData && (apiData.category || apiData.title)) {
          // If the API matched a full activity/category
          if (apiData.category) {
            const formatted = {
              slug: `/${cleanSlug}`,
              nav: apiData.category,
              hero: apiData.category,
              intro: apiData.intro || apiData.description || `Welcome to the ${apiData.category} of SVASC.`,
              motto: apiData.clubsSummary || '',
              image: apiData.bannerImage || '/hero-campus.jpg',
              customImage: apiData.bannerImage,
              overview: {
                vision: apiData.vision || '',
                mission: apiData.mission || '',
                objectives: apiData.objectives ? (Array.isArray(apiData.objectives) ? apiData.objectives : apiData.objectives.split('\n').filter(Boolean)) : []
              },
              cards: apiData.cards || [],
              roles: apiData.roles || [],
              members: apiData.members || []
            };
            setPageData(formatted);
            return;
          }
        }

        // 2. Fallback to site.ts / Activities local data
        loadFallback();
      } catch (error) {
        // If API fails / not found, use local fallback
        loadFallback();
      } finally {
        setLoading(false);
      }
    };

    const loadFallback = () => {
      let fallback = pageBySlug(`/${cleanSlug}`);
      if (!fallback) {
        fallback = pages.find((p) => {
          const pSlug = p.slug.replace(/^\//, '').toLowerCase();
          return pSlug === cleanSlug || pSlug.includes(cleanSlug) || cleanSlug.includes(pSlug);
        });
      }
      setPageData(fallback || null);
    };

    fetchClubDetail();
  }, [cleanSlug]);

  if (loading) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', color: '#fff' }}>
        <p>Loading Details...</p>
      </div>
    );
  }

  if (!pageData) {
    return <Navigate to="/activities" replace />;
  }

  return <CellPage page={pageData} />;
}
