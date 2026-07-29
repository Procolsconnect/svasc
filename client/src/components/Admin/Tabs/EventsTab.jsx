import React, { useState, useEffect } from 'react';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader, FormGroup } from '../FormInput';
import { fetchAdminData, saveAdminData, deleteAdminData } from '../../../utils/adminApi';

const EventsTab = () => {
  const [gridEvents, setGridEvents] = useState([]);
  const [marqueeEvents, setMarqueeEvents] = useState([]);

  const loadData = async () => {
    try {
      const [gRes, mRes] = await Promise.allSettled([
        fetchAdminData('/api/events/grid'),
        fetchAdminData('/api/events/marquee'),
      ]);
      if (gRes.status === 'fulfilled') setGridEvents(gRes.value || []);
      if (mRes.status === 'fulfilled') setMarqueeEvents(mRes.value || []);
    } catch (err) {
      console.error('Error loading events data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div>
      <HeroForm pageKey="events" title="Events Page Hero Section" />

      <CrudManager
        title="Upcoming Events Grid"
        data={gridEvents}
        columns={[
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'date', label: 'Date', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={async (formData, id) => {
          await saveAdminData('/api/events/grid', id, formData, 'image');
          loadData();
        }}
        onDelete={async (id) => {
          await deleteAdminData('/api/events/grid', id);
          loadData();
        }}
        initialFormState={{ title: '', date: '', description: '', image: null, spanTwoCols: false }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Event Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <FormInput label="Date (e.g. Mar 15-17, CS Department - Annual Tech Fest)" value={formData.date || ''} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
            <FormInput label="Description" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <FormGroup label="Display Size">
              <select
                value={formData.spanTwoCols ? 'wide' : 'normal'}
                onChange={(e) => setFormData({...formData, spanTwoCols: e.target.value === 'wide'})}
                style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}
              >
                <option value="normal">Normal Card</option>
                <option value="wide">Wide Card (Spans 2 Columns)</option>
              </select>
            </FormGroup>
            <FileUploader
              label="Event Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />

      <CrudManager
        title="Events at SVASC (Marquee / Slider)"
        data={marqueeEvents}
        columns={[
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'day', label: 'Day', type: 'text' },
          { key: 'month', label: 'Month', type: 'text' },
          { key: 'image', label: 'Image', type: 'image' }
        ]}
        onSave={async (formData, id) => {
          await saveAdminData('/api/events/marquee', id, formData, 'image');
          loadData();
        }}
        onDelete={async (id) => {
          await deleteAdminData('/api/events/marquee', id);
          loadData();
        }}
        initialFormState={{ day: '', month: '', title: '', description: '', url: '', youtubeUrl: '', image: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Day (e.g. 28)" value={formData.day || ''} onChange={(e) => setFormData({...formData, day: e.target.value})} required />
            <FormInput label="Month (e.g. Apr)" value={formData.month || ''} onChange={(e) => setFormData({...formData, month: e.target.value})} required />
            <FormInput label="Event Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <FormInput label="Description" type="textarea" value={formData.description || ''} onChange={(e) => setFormData({...formData, description: e.target.value})} required />
            <FormInput label="External URL (optional)" value={formData.url || ''} onChange={(e) => setFormData({...formData, url: e.target.value})} />
            <FormInput label="YouTube Link (optional)" value={formData.youtubeUrl || ''} onChange={(e) => setFormData({...formData, youtubeUrl: e.target.value})} />
            <FileUploader
              label="Event Image"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              previewUrl={typeof formData.image === 'string' ? `http://localhost:5000/${formData.image.replace(/^\/+/, '')}` : (formData.image ? URL.createObjectURL(formData.image) : null)}
            />
          </>
        )}
      />
    </div>
  );
};

export default EventsTab;
