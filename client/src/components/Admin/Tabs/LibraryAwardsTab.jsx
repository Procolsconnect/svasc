import React, { useState, useEffect } from 'react';
import CrudManager from '../CrudManager';
import FormInput from '../FormInput';
import FileUploader from '../FileUploader';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const LibraryAwardsTab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetchAdminData('/api/library-awards');
      setData(res || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async (formData, id) => {
    await saveAdminData('/api/library-awards', id, formData, 'image');
    loadData();
  };

  const handleDelete = async (id) => {
    await deleteAdminData('/api/library-awards', id);
    loadData();
  };

  const columns = [
    { key: 'image', label: 'Photo', type: 'image' },
    { key: 'name', label: 'Name' },
    { key: 'category', label: 'Category' },
    { key: 'designation', label: 'Designation / Class' }
  ];

  const renderForm = (formData, setFormData) => (
    <>
      <FormInput
        label="Category"
        type="select"
        options={[
          { value: 'Student', label: 'Student Recipient' },
          { value: 'Faculty', label: 'Faculty Recipient' },
          { value: 'NonTeaching', label: 'Non-Teaching Staff Recipient' }
        ]}
        value={formData.category || 'Student'}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
        required
      />
      <FormInput
        label="Full Name"
        value={formData.name || ''}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <FormInput
        label={formData.category === 'Student' ? "Class (e.g., II B.Com CA)" : "Designation / Role (e.g., Assistant Professor)"}
        value={formData.designation || ''}
        onChange={(e) => setFormData({...formData, designation: e.target.value})}
        required
      />
      
      {/* Department is only relevant for Faculty based on the frontend layout */}
      {formData.category === 'Faculty' && (
        <FormInput
          label="Department (e.g., English)"
          value={formData.department || ''}
          onChange={(e) => setFormData({...formData, department: e.target.value})}
          required={formData.category === 'Faculty'}
        />
      )}

      <FileUploader
        label="Profile Image"
        onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
        existingUrl={formData.image}
      />
    </>
  );

  return (
    <CrudManager
      title="Library User Awards"
      data={data}
      columns={columns}
      onSave={(data, id) => handleSave(data, id)}
      onDelete={handleDelete}
      renderForm={renderForm}
      initialFormState={{ category: 'Student', name: '', designation: '', department: '', image: null }}
    />
  );
};

export default LibraryAwardsTab;
