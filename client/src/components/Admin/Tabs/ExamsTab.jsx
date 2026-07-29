import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroForm from '../HeroForm';
import CrudManager from '../CrudManager';
import { FormInput, FileUploader, FormGroup } from '../FormInput';
import { fetchAdminData, deleteAdminData } from '../../../utils/adminApi';
import styles from '../CrudManager.module.css';

const BASE_URL = 'http://localhost:5000';

const ExamsTab = () => {
  const [timetables, setTimetables] = useState([]);
  const [portalConfig, setPortalConfig] = useState({ image1: null, image2: null, image3: null, schedules: [] });
  const [portalSubmitting, setPortalSubmitting] = useState(false);

  const loadData = async () => {
    try {
      const [ttRes, pcRes] = await Promise.allSettled([
        fetchAdminData('/api/exam'),
        fetchAdminData('/api/exam/portal-config'),
      ]);
      if (ttRes.status === 'fulfilled') setTimetables(ttRes.value || []);
      if (pcRes.status === 'fulfilled' && pcRes.value) {
        setPortalConfig({
          image1: pcRes.value.image1 || null,
          image2: pcRes.value.image2 || null,
          image3: pcRes.value.image3 || null,
          schedules: pcRes.value.schedules || []
        });
      }
    } catch (err) {
      console.error('Error loading exam data', err);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleSavePortal = async (e) => {
    e.preventDefault();
    setPortalSubmitting(true);
    try {
      const data = new FormData();
      ['image1', 'image2', 'image3'].forEach(key => {
        if (portalConfig[key] instanceof File) data.append(key, portalConfig[key]);
      });
      data.append('schedules', JSON.stringify(portalConfig.schedules));
      await axios.put(`${BASE_URL}/api/exam/portal-config`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      alert('Portal config updated!');
      loadData();
    } catch (err) {
      alert('Failed to update portal config.');
    } finally {
      setPortalSubmitting(false);
    }
  };

  const addSchedule = () => {
    setPortalConfig(prev => ({
      ...prev,
      schedules: [...prev.schedules, { examType: '', department: '', startDate: '', endDate: '' }]
    }));
  };

  const updateSchedule = (idx, field, val) => {
    setPortalConfig(prev => {
      const updated = [...prev.schedules];
      updated[idx] = { ...updated[idx], [field]: val };
      return { ...prev, schedules: updated };
    });
  };

  const removeSchedule = (idx) => {
    setPortalConfig(prev => ({ ...prev, schedules: prev.schedules.filter((_, i) => i !== idx) }));
  };

  return (
    <div>
      <HeroForm pageKey="exam" title="Examination Page Hero Section" />

      {/* Exam Portal Config */}
      <div className={styles.crudWrapper} style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ marginTop: 0, color: '#333', marginBottom: '1.5rem' }}>Exam Portal — 3 Images & Exam Schedules</h2>
        <form onSubmit={handleSavePortal} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
            {[1, 2, 3].map(n => (
              <FileUploader
                key={n}
                label={`Portal Image ${n}`}
                onChange={(e) => setPortalConfig(prev => ({ ...prev, [`image${n}`]: e.target.files[0] }))}
                previewUrl={typeof portalConfig[`image${n}`] === 'string' ? `${BASE_URL}/${portalConfig[`image${n}`].replace(/^\/+/, '')}` : (portalConfig[`image${n}`] ? URL.createObjectURL(portalConfig[`image${n}`]) : null)}
              />
            ))}
          </div>
          <div>
            <button type="submit" className={styles.submitBtn} disabled={portalSubmitting}>
              {portalSubmitting ? 'Saving...' : 'Save Images'}
            </button>
          </div>
        </form>

        <form onSubmit={handleSavePortal} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, color: '#333' }}>Exam Schedules (Popup Content)</h3>
              <button type="button" className={styles.addButton} onClick={addSchedule}>+ Add Schedule</button>
            </div>
            {portalConfig.schedules.map((sch, idx) => (
              <div key={idx} style={{ border: '1px solid #eaeaea', borderRadius: '4px', padding: '1rem', marginBottom: '1rem', background: '#f8f9fa' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
                  <FormGroup label="Exam Type (e.g. Sem Exam)">
                    <input className={styles.table ? '' : ''} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={sch.examType || ''} onChange={(e) => updateSchedule(idx, 'examType', e.target.value)} />
                  </FormGroup>
                  <FormGroup label="Department">
                    <input style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={sch.department || ''} onChange={(e) => updateSchedule(idx, 'department', e.target.value)} />
                  </FormGroup>
                  <FormGroup label="Start Date">
                    <input type="date" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={sch.startDate || ''} onChange={(e) => updateSchedule(idx, 'startDate', e.target.value)} />
                  </FormGroup>
                  <FormGroup label="End Date">
                    <input type="date" style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', width: '100%', boxSizing: 'border-box' }} value={sch.endDate || ''} onChange={(e) => updateSchedule(idx, 'endDate', e.target.value)} />
                  </FormGroup>
                </div>
                <button type="button" onClick={() => removeSchedule(idx)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.25rem 0.75rem', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
              </div>
            ))}
          </div>

          <div>
            <button type="submit" className={styles.submitBtn} disabled={portalSubmitting}>
              {portalSubmitting ? 'Saving...' : 'Save Schedules'}
            </button>
          </div>
        </form>
      </div>

      {/* Timetables */}
      <CrudManager
        title="Exam Timetables (PDF Upload)"
        data={timetables}
        columns={[
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'examType', label: 'Type', type: 'text' }
        ]}
        onSave={async (formData, id) => {
          const data = new FormData();
          Object.keys(formData).forEach(key => {
            if (key === 'file' && formData[key] instanceof File) data.append('file', formData[key]);
            else if (key !== '_id' && key !== 'createdAt' && key !== 'updatedAt' && key !== '__v' && key !== 'file') data.append(key, formData[key]);
          });
          const url = id ? `${BASE_URL}/api/exam/${id}` : `${BASE_URL}/api/exam`;
          await fetch(url, { method: id ? 'PUT' : 'POST', body: data });
          loadData();
        }}
        onDelete={async (id) => { await deleteAdminData('/api/exam', id); loadData(); }}
        initialFormState={{ title: '', examType: 'Bharathiyar University', file: null }}
        renderForm={(formData, setFormData) => (
          <>
            <FormInput label="Timetable Title" value={formData.title || ''} onChange={(e) => setFormData({...formData, title: e.target.value})} required />
            <FormGroup label="Exam Type">
              <select value={formData.examType || ''} onChange={(e) => setFormData({...formData, examType: e.target.value})} style={{ padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}>
                <option value="Bharathiyar University">Bharathiyar University</option>
                <option value="Continuous Internal Assessment">Continuous Internal Assessment</option>
              </select>
            </FormGroup>
            <FileUploader
              label="Upload PDF"
              accept=".pdf"
              onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
            />
          </>
        )}
      />
    </div>
  );
};

export default ExamsTab;
