import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const AwardsGalleryTab = () => {
  const [awards, setAwards] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetchAdminData('/api/awards-gallery');
      setAwards(res || []);
    } catch (err) {
      console.error('Error loading awards gallery data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSave = async (formData, id) => {
    await saveAdminData('/api/awards-gallery', id, formData, 'image');
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteAdminData('/api/awards-gallery', id);
    loadData();
  };

  return (
    <div>
      <CrudManager
        title="Awards & Achievements Gallery"
        data={awards}
        columns={[
          { key: 'category', label: 'Category', type: 'text' },
          { key: 'alt', label: 'Title / Alt Text', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={(data, id) => handleSave(data, id)}
        onDelete={(id) => handleDelete(id)}
        initialFormState={{ category: 'academic', alt: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput 
                label="Category" 
                type="select" 
                value={formData.category || 'academic'} 
                onChange={(e) => setFormData({...formData, category: e.target.value})} 
                required 
                options={[
                    {value: 'academic', label: 'Academic Certificates'},
                    {value: 'professional', label: 'Professional/Staff Certificates'},
                    {value: 'achievement', label: 'Achievement Certificates'},
                    {value: 'industry', label: 'Industry/Professional Certificates'},
                    {value: 'special', label: 'Special Purpose Certificates'},
                    {value: 'research', label: 'Research Certificates'}
                ]}
            />
            <FormInput label="Title / Alt Text" value={formData.alt || ''} onChange={(e) => setFormData({...formData, alt: e.target.value})} required />
            <FileUploader
              label="Award Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />
    </div>
  );
};

export default AwardsGalleryTab;
