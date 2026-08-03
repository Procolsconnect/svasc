import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';
import axios from 'axios';

const AboutTab = () => {
  const [certifications, setCertifications] = useState([]);
  const [teacherAwards, setTeacherAwards] = useState([]);

  const loadData = async () => {
    try {
      const [certRes, awardsRes] = await Promise.allSettled([
        fetchAdminData('/api/about/certifications'),
        fetchAdminData('/api/about/teacher-awards') // using the non-grouped route for the admin table
      ]);
      if (certRes.status === 'fulfilled') setCertifications(certRes.value || []);
      if (awardsRes.status === 'fulfilled') setTeacherAwards(awardsRes.value || []);
    } catch (err) {
      console.error('Error loading about page data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSaveCert = async (formData, id) => {
    await saveAdminData('/api/about/certifications', id, formData, 'image');
    loadData();
  };

  const handleDeleteCert = async (id) => {
    await deleteAdminData('/api/about/certifications', id);
    loadData();
  };

  const handleSaveAward = async (formData, id) => {
    try {
        const payload = {
            year: formData.year,
            awardName: formData.awardName,
            facultyName: formData.facultyName
        };
        
        if (id) {
            await axios.put(`http://localhost:5000/api/about/teacher-awards/${id}`, payload);
        } else {
            await axios.post(`http://localhost:5000/api/about/teacher-awards`, payload);
        }
    } catch(err) {
        console.error(err);
        alert('Failed to save teacher award');
    }
    loadData();
  };

  const handleDeleteAward = async (id) => {
    await deleteAdminData('/api/about/teacher-awards', id);
    loadData();
  };

  return (
    <div>
      <CrudManager
        title="Awards & Certifications"
        data={certifications}
        columns={[
          { key: 'order', label: 'Order', type: 'text' },
          { key: 'image', label: 'Certificate Image', type: 'image' }
        ]}
        onSave={(data, id) => handleSaveCert(data, id)}
        onDelete={(id) => handleDeleteCert(id)}
        initialFormState={{ order: 0, image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Display Order" type="number" value={formData.order || 0} onChange={(e) => setFormData({...formData, order: e.target.value})} />
            <FileUploader
              label="Certificate Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />

      <CrudManager
        title="Awards Received By Teachers"
        data={teacherAwards}
        columns={[
          { key: 'year', label: 'Year', type: 'text' },
          { key: 'awardName', label: 'Award Name', type: 'text' },
          { key: 'facultyName', label: 'Faculty Name', type: 'text' }
        ]}
        onSave={(data, id) => handleSaveAward(data, id)}
        onDelete={(id) => handleDeleteAward(id)}
        initialFormState={{ year: new Date().getFullYear(), awardName: '', facultyName: '' }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Year" type="number" value={formData.year || ''} onChange={(e) => setFormData({...formData, year: e.target.value})} required />
            <FormInput label="Award Name" value={formData.awardName || ''} onChange={(e) => setFormData({...formData, awardName: e.target.value})} required />
            <FormInput label="Faculty Name" value={formData.facultyName || ''} onChange={(e) => setFormData({...formData, facultyName: e.target.value})} required />
          </>
        )}
      />
    </div>
  );
};

export default AboutTab;
