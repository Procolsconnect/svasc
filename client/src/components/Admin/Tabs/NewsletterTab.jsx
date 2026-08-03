import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const NewsletterTab = () => {
  const [newsletters, setNewsletters] = useState([]);

  const loadData = async () => {
    try {
      const res = await fetchAdminData('/api/newsletter');
      setNewsletters(res || []);
    } catch (err) {
      console.error('Error loading newsletter data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSave = async (formData, id) => {
    // The backend uses 'file' for the multer upload field name in the newsletter route
    await saveAdminData('/api/newsletter', id, formData, 'file');
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteAdminData('/api/newsletter', id);
    loadData();
  };

  return (
    <div>
      <CrudManager
        title="Manage Newsletters"
        data={newsletters}
        columns={[
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'pdf', label: 'Image', type: 'image' }
        ]}
        onSave={(data, id) => handleSave(data, id)}
        onDelete={(id) => handleDelete(id)}
        initialFormState={{ title: '', file: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <FileUploader
              label="Newsletter Image"
              onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
              previewUrl={typeof formData.file === 'string' ? `http://localhost:5000/${formData.file.replace(/^\/+/, '')}` : (formData.file ? URL.createObjectURL(formData.file) : (formData.pdf ? `http://localhost:5000/${formData.pdf.replace(/^\/+/, '')}` : null))}
            />
          </>
        )}
      />
    </div>
  );
};

export default NewsletterTab;
