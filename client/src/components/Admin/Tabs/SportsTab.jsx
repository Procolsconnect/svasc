import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const SportsTab = () => {
  const [houses, setHouses] = useState([]);

  const loadData = async () => {
    try {
      const data = await fetchAdminData('/api/sports/houses');
      setHouses(data || []);
    } catch (err) {
      console.error('Error loading sports data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div>
      <HeroForm pageKey="sports" title="Sports Page Hero Section" />

      <CrudManager
        title="SVASC Sport Houses"
        data={houses}
        columns={[
          { key: 'name', label: 'House Name', type: 'text' },
          { key: 'description', label: 'Description', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={async (formData, id) => {
          await saveAdminData('/api/sports/houses', id, formData, 'image');
          loadData();
        }}
        onDelete={async (id) => {
          await deleteAdminData('/api/sports/houses', id);
          loadData();
        }}
        initialFormState={{ name: '', description: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="House Name" value={formData.name || ''} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
            <FormInput label="Description" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <FileUploader
              label="House Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />
    </div>
  );
};

export default SportsTab;
