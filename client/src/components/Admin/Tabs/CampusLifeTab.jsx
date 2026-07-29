import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const CampusLifeTab = () => {
  const [gallery, setGallery] = useState([]);
  const [scrollItems, setScrollItems] = useState([]);

  const loadData = async () => {
    try {
      const [gRes, sRes] = await Promise.allSettled([
        fetchAdminData('/api/campus-life/gallery'),
        fetchAdminData('/api/campus-life/scroll-items'),
      ]);
      if (gRes.status === 'fulfilled') setGallery(gRes.value || []);
      if (sRes.status === 'fulfilled') setScrollItems(sRes.value || []);
    } catch (err) {
      console.error('Error loading campus life data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSave = async (endpoint, fileKey, formData, id) => {
    await saveAdminData(endpoint, id, formData, fileKey);
    loadData();
  };

  const handleDelete = async (endpoint, id) => {
    await deleteAdminData(endpoint, id);
    loadData();
  };

  return (
    <div>
      <HeroForm pageKey="campus-life" title="Campus Life Page Hero Section" />

      <CrudManager
        title="SVASC Gallery (Hover Effect)"
        data={gallery}
        columns={[
          { key: 'name', label: 'Name', type: 'text' },
          { key: 'description', label: 'Description', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={(data, id) => handleSave('/api/campus-life/gallery', 'image', data, id)}
        onDelete={(id) => handleDelete('/api/campus-life/gallery', id)}
        initialFormState={{ name: '', description: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Image Name / Title" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <FormInput label="Description (shows on hover)" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <FileUploader
              label="Gallery Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />

      <CrudManager
        title="Campus Life Scroll Section"
        data={scrollItems}
        columns={[
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={(data, id) => handleSave('/api/campus-life/scroll-items', 'image', data, id)}
        onDelete={(id) => handleDelete('/api/campus-life/scroll-items', id)}
        initialFormState={{ title: '', description: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <FormInput label="About / Description" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <FileUploader
              label="Section Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />
    </div>
  );
};

export default CampusLifeTab;
