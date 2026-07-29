import React, { useState, useEffect } from 'react';
import { FormGroup, FormInput, FileUploader } from './FormInput';
import { fetchAdminData, saveAdminData } from '../../utils/adminApi';
import styles from './CrudManager.module.css';

const HeroForm = ({ pageKey, title = "Hero Section" }) => {
  const [formData, setFormData] = useState({ title: '', description: '', image: null });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const loadHero = async () => {
      try {
        const data = await fetchAdminData(`/api/page-heros/${pageKey}`);
        if (data) {
          setFormData({
            title: data.title || '',
            description: data.description || '',
            image: data.image || null
          });
        }
      } catch (err) {
        console.error(`Error loading hero for ${pageKey}`, err);
      }
    };
    loadHero();
  }, [pageKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('title', formData.title || '');
      fd.append('description', formData.description || '');
      if (formData.image instanceof File) {
        fd.append('image', formData.image);
      }
      const url = `http://localhost:5000/api/page-heros/${pageKey}`;
      const res = await fetch(url, { method: 'PUT', body: fd });
      if (!res.ok) throw new Error('Server error');
      alert("Hero section updated successfully!");
    } catch (err) {
      console.error("Error saving hero", err);
      alert("Failed to update hero.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.crudWrapper} style={{ padding: '2rem' }}>
      <h2 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#333' }}>{title}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
        <FormInput 
          label="Title" 
          value={formData.title} 
          onChange={(e) => setFormData({...formData, title: e.target.value})} 
        />
        <FormInput 
          label="Description" 
          type="textarea"
          value={formData.description} 
          onChange={(e) => setFormData({...formData, description: e.target.value})} 
        />
        <FileUploader 
          label="Hero Image"
          onChange={(e) => setFormData({...formData, image: e.target.files[0]})} 
          previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
        />
        <div>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save Hero'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
