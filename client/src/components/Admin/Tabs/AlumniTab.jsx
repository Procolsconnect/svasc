import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const AlumniTab = () => {
  const [risingStars, setRisingStars] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [rankHolders, setRankHolders] = useState([]);

  const loadData = async () => {
    try {
      const [rsRes, ssRes, rhRes] = await Promise.allSettled([
        fetchAdminData('/api/alumni/rising-stars'),
        fetchAdminData('/api/alumni/success-stories'),
        fetchAdminData('/api/alumni/rank-holders'),
      ]);
      if (rsRes.status === 'fulfilled') setRisingStars(rsRes.value || []);
      if (ssRes.status === 'fulfilled') setSuccessStories(ssRes.value || []);
      if (rhRes.status === 'fulfilled') setRankHolders(rhRes.value || []);
    } catch (err) {
      console.error('Error loading alumni data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  // Rising Star: backend uses { name, degree, video }
  const handleSaveRisingStar = async (formData, id) => {
    const data = new FormData();
    data.append('name', formData.name || '');
    data.append('degree', formData.degree || '');
    if (formData.video instanceof File) data.append('video', formData.video);
    const url = id ? `${BASE_URL}/api/alumni/rising-stars/${id}` : `${BASE_URL}/api/alumni/rising-stars`;
    const res = await fetch(url, { method: id ? 'PUT' : 'POST', body: data });
    if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
    loadData();
  };

  // Success Story: backend uses { name, role, description, image }
  const handleSaveStory = async (formData, id) => {
    await saveAdminData('/api/alumni/success-stories', id, formData, 'image');
    loadData();
  };

  // Rank Holder: backend uses { name, degree, rank, year } — text only, no file
  const handleSaveRankHolder = async (formData, id) => {
    const data = new FormData();
    data.append('name', formData.name || '');
    data.append('degree', formData.degree || '');
    data.append('rank', formData.rank || '');
    data.append('year', formData.year || '');
    const url = id ? `${BASE_URL}/api/alumni/rank-holders/${id}` : `${BASE_URL}/api/alumni/rank-holders`;
    const res = await fetch(url, { method: id ? 'PUT' : 'POST', body: data });
    if (!res.ok) { const e = await res.json(); throw new Error(e.message); }
    loadData();
  };

  const handleDelete = async (endpoint, id) => {
    await deleteAdminData(endpoint, id);
    loadData();
  };

  return (
    <div>
      <HeroForm pageKey="alumni" title="Alumni Page Hero Section" />

      <CrudManager
        title="Rising Stars of SVASC (Video Upload)"
        data={risingStars}
        columns={[
          { key: 'name', label: 'Student Name', type: 'text' },
          { key: 'degree', label: 'Degree', type: 'text' },
          { key: 'video', label: 'Video', type: 'video' }
        ]}
        onSave={handleSaveRisingStar}
        onDelete={(id) => handleDelete('/api/alumni/rising-stars', id)}
        initialFormState={{ name: '', degree: '', video: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Student Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <FormInput label="Degree Name (e.g. B.Com, MBA)" value={formData.degree || ''} onChange={(e) => setFormData({...formData, degree: e.target.value})} required />
            <FileUploader
              label="Upload Video"
              accept="video/*"
              onChange={(e) => setFormData({...formData, video: e.target.files[0]})}
              previewUrl={typeof formData.video === 'string' ? (formData.video.startsWith('http') ? formData.video : `${BASE_URL}/${formData.video.replace(/^\/+/, '')}`) : (formData.video ? URL.createObjectURL(formData.video) : null)}
            />
          </>
        )}
      />

      <CrudManager
        title="Success Stories"
        data={successStories}
        columns={[
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'role', label: 'Role', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={handleSaveStory}
        onDelete={(id) => handleDelete('/api/alumni/success-stories', id)}
        initialFormState={{ name: '', role: '', description: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <FormInput label="Role / Position" value={formData.role || ''} onChange={(e) => setFormData({...formData, role: e.target.value})} required />
            <FormInput label="Description / Quote" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} />
            <FileUploader
              label="Photo"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? (formData.image.startsWith('http') ? formData.image : `${BASE_URL}/${formData.image.replace(/^\/+/, '')}`) : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />

      <CrudManager
        title="Rank Holders (Year-wise)"
        data={rankHolders}
        columns={[
          { key: 'year', label: 'Year', type: 'text' },
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'degree', label: 'Degree/Dept', type: 'text' },
          { key: 'rank', label: 'Rank', type: 'text' }
        ]}
        onSave={handleSaveRankHolder}
        onDelete={(id) => handleDelete('/api/alumni/rank-holders', id)}
        initialFormState={{ year: '', name: '', degree: '', rank: '' }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Academic Year (e.g. 2023-24)" value={formData.year || ''} onChange={(e) => setFormData({...formData, year: e.target.value})} required />
            <FormInput label="Student Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <FormInput label="Degree / Department" value={formData.degree || ''} onChange={(e) => setFormData({...formData, degree: e.target.value})} required />
            <FormInput label="Rank (e.g. University Rank 1)" value={formData.rank || ''} onChange={(e) => setFormData({...formData, rank: e.target.value})} required />
          </>
        )}
      />
    </div>
  );
};

export default AlumniTab;
