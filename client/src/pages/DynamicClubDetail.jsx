import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CellPage } from '@/components/site/CellPage';
import { pageBySlug, pages } from '@/data/site';

export default function DynamicClubDetail() {
  const { slug, category } = useParams();

  if (!slug) {
    return <Navigate to="/activities" replace />;
  }

  const cleanSlug = slug.toLowerCase().trim().replace(/^\//, '');
  const targetSlug = `/${cleanSlug}`;

  // 1. Exact match with site.ts page slug
  let page = pageBySlug(targetSlug);

  // 2. Fallback search by slug substring or title matching
  if (!page) {
    page = pages.find((p) => {
      const pSlug = p.slug.replace(/^\//, '').toLowerCase();
      return pSlug === cleanSlug || pSlug.includes(cleanSlug) || cleanSlug.includes(pSlug);
    });
  }

  if (!page) {
    return <Navigate to="/activities" replace />;
  }

  return <CellPage page={page} />;
}
