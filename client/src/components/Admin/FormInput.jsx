import React from 'react';
import styles from './FormInput.module.css';

export const FormGroup = ({ label, children }) => (
  <div className={styles.formGroup}>
    <label className={styles.label}>{label}</label>
    {children}
  </div>
);

export const FormInput = ({ type = 'text', label, options, ...props }) => {
  let inputElement;

  if (type === 'textarea') {
    inputElement = <textarea className={styles.input} rows={4} {...props} />;
  } else if (type === 'select') {
    inputElement = (
      <select className={styles.input} {...props}>
        {options && options.map((opt, i) => (
          <option key={i} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    );
  } else {
    inputElement = <input type={type} className={styles.input} {...props} />;
  }

  if (label) {
    return (
      <FormGroup label={label}>
        {inputElement}
      </FormGroup>
    );
  }
  return inputElement;
};

export const FileUploader = ({ label, onChange, previewUrl, accept = "image/*" }) => (
  <FormGroup label={label}>
    <input type="file" accept={accept} onChange={onChange} className={styles.fileInput} />
    {previewUrl && (
      <div className={styles.previewContainer}>
        {accept.includes('video') ? (
           <video src={previewUrl} controls className={styles.preview} />
        ) : (
           <img src={previewUrl} alt="Preview" className={styles.preview} />
        )}
      </div>
    )}
  </FormGroup>
);
