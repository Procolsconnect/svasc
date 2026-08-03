import React, { useState, useEffect } from 'react';
import CrudManager from '../CrudManager';
import FormInput from '../FormInput';
import FileUploader from '../FileUploader';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const LibraryActivitiesTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetchAdminData('/api/library-activities');
      setData(res || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData, id) => {
    // Both image1 and image2 are fileKeys
    await saveAdminData('/api/library-activities', id, formData, ['image1', 'image2']);
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteAdminData('/api/library-activities', id);
    loadData();
  };

  const columns = [
    { key: 'image1', label: 'Image 1', type: 'image' },
    { key: 'image2', label: 'Image 2', type: 'image' },
    { key: 'title', label: 'Activity Title' },
    { key: 'date', label: 'Date' }
  ];

  const renderForm = (formData, setFormData) => (
    <>
      <FormInput
        label="Activity Title"
        value={formData.title || ''}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        required
      />
      <FormInput
        label="Date"
        value={formData.date || ''}
        onChange={(e) => setFormData({...formData, date: e.target.value})}
        required
      />
      <FormInput
        label="Description"
        type="textarea"
        value={formData.desc || ''}
        onChange={(e) => setFormData({...formData, desc: e.target.value})}
        required
      />
      <FileUploader
        label="Image 1"
        onChange={(e) => setFormData({...formData, image1: e.target.files[0]})}
        existingUrl={formData.image1}
      />
      <FileUploader
        label="Image 2"
        onChange={(e) => setFormData({...formData, image2: e.target.files[0]})}
        existingUrl={formData.image2}
      />
    </>
  );

  return (
    <CrudManager
      title="Library Activities"
      data={data}
      columns={columns}
      onSave={(data, id) => handleSave(data, id)}
      onDelete={handleDelete}
      renderForm={renderForm}
      initialFormState={{ title: '', date: '', desc: '', image1: null, image2: null }}
    />
  );
};

export default LibraryActivitiesTab;
