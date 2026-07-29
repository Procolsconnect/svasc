import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader } from '../FormInput';
import { fetchAdminData, deleteAdminData } from '../../../utils/adminApi';
import styles from '../CrudManager.module.css';
import { Plus, Trash2 } from 'lucide-react';

const BASE_URL = 'http://localhost:5000';

// Builds FormData exactly as the backend controller expects:
// - bannerImage (file)
// - cardImages  (multiple files, one per card)
// - cardTitles  (JSON string array of titles, same length as cardImages)
const buildActivityFormData = (formData) => {
  const fd = new FormData();
  fd.append('category', formData.category || '');
  fd.append('description', formData.description || '');

  if (formData.bannerImage instanceof File) {
    fd.append('bannerImage', formData.bannerImage);
  }

  const cardTitles = [];
  const cardDescriptions = [];
  (formData.cards || []).forEach((card) => {
    cardTitles.push(card.title || '');
    cardDescriptions.push(card.description || '');
    if (card.image instanceof File) {
      fd.append('cardImages', card.image);
    }
  });
  fd.append('cardTitles', JSON.stringify(cardTitles));
  fd.append('cardDescriptions', JSON.stringify(cardDescriptions));

  return fd;
};

const CardBuilder = ({ cards, setCards }) => {
  const addCard = () => setCards([...cards, { title: '', description: '', image: null }]);
  const removeCard = (idx) => setCards(cards.filter((_, i) => i !== idx));
  const updateCard = (idx, field, val) => {
    const updated = [...cards];
    updated[idx] = { ...updated[idx], [field]: val };
    setCards(updated);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <label style={{ fontWeight: 600, color: '#333', fontSize: '0.9rem' }}>Cards (Unlimited)</label>
        <button type="button" className={styles.addButton}
          style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}
          onClick={addCard}>
          <Plus size={14} /> Add Card
        </button>
      </div>
      {cards.map((card, idx) => (
        <div key={idx} style={{ border: '1px solid #e0e0e0', borderRadius: '6px', padding: '1rem', marginBottom: '0.75rem', background: '#fafafa' }}>
          <FormInput
            label={`Card ${idx + 1} Title`}
            value={card.title || ''}
            onChange={(e) => updateCard(idx, 'title', e.target.value)}
          />
          <FormInput
            label={`Card ${idx + 1} Content/Description`}
            type="textarea"
            value={card.description || ''}
            onChange={(e) => updateCard(idx, 'description', e.target.value)}
          />
          <div style={{ marginTop: '0.75rem' }}>
            <FileUploader
              label={`Card ${idx + 1} Image`}
              onChange={(e) => updateCard(idx, 'image', e.target.files[0])}
              previewUrl={
                typeof card.image === 'string'
                  ? `${BASE_URL}/${card.image.replace(/^\/+/, '')}`
                  : (card.image ? URL.createObjectURL(card.image) : null)
              }
            />
          </div>
          <button type="button" onClick={() => removeCard(idx)}
            style={{ marginTop: '0.75rem', background: '#dc3545', color: 'white', border: 'none', padding: '0.3rem 0.75rem', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem' }}>
            <Trash2 size={13} /> Remove Card
          </button>
        </div>
      ))}
      {cards.length === 0 && (
        <p style={{ color: '#999', fontStyle: 'italic', fontSize: '0.88rem' }}>No cards added yet. Click "Add Card" above.</p>
      )}
    </div>
  );
};

const CategoryForm = (formData, setFormData, pageKey) => (
  <>
    <FormInput
      label="Category Name"
      value={formData.category || ''}
      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      required
    />
    <FormInput
      label="Description"
      type="textarea"
      value={formData.description || ''}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      required
    />
    <FileUploader
      label="Banner Image"
      onChange={(e) => setFormData({ ...formData, bannerImage: e.target.files[0] })}
      previewUrl={
        typeof formData.bannerImage === 'string'
          ? `${BASE_URL}/${formData.bannerImage.replace(/^\/+/, '')}`
          : (formData.bannerImage ? URL.createObjectURL(formData.bannerImage) : null)
      }
    />
    <CardBuilder
      cards={formData.cards || []}
      setCards={(cards) => setFormData({ ...formData, cards })}
    />
  </>
);

const BlogsTab = () => {
  const [blogs, setBlogs] = useState([]);

  const loadData = async () => {
    try {
      const bRes = await fetchAdminData('/api/blogs');
      setBlogs(bRes || []);
    } catch (err) {
      console.error('Error loading blogs data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSave = async (endpoint, formData, id) => {
    const fd = buildActivityFormData(formData);
    const url = id ? `${BASE_URL}${endpoint}/${id}` : `${BASE_URL}${endpoint}`;
    const res = await fetch(url, { method: id ? 'PUT' : 'POST', body: fd });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Server error');
    }
    loadData();
  };

  const handleDelete = async (endpoint, id) => {
    await deleteAdminData(endpoint, id);
    loadData();
  };

  const activityColumns = [
    { key: 'category', label: 'Category', type: 'text' },
    { key: 'bannerImage', label: 'Banner', type: 'image' }
  ];
  const initialState = { category: '', description: '', bannerImage: null, cards: [] };

  return (
    <div>
      <HeroForm pageKey="blogs" title="Blogs Page Hero Section" />

      <CrudManager
        title="College Blogs Categories & Cards"
        data={blogs}
        columns={activityColumns}
        onSave={(data, id) => handleSave('/api/blogs', data, id)}
        onDelete={(id) => handleDelete('/api/blogs', id)}
        initialFormState={initialState}
        renderForm={(formData, setFormData) => CategoryForm(formData, setFormData, 'blogs')}
      />
    </div>
  );
};

export default BlogsTab;
