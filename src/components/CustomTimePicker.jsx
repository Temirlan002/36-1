// CustomTimePicker.tsx
import React, { useState } from 'react';
import styles from './timePickerComponent.module.css';

const CustomTimePicker = () => {
  const [hour, setHour] = useState('01');
  const [minute, setMinute] = useState('30');

  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  return (
    <div className={styles.timePicker}>
      <label>Select Activity</label>
      <div className={styles.timePickerInput}>
        <select value={hour} onChange={(e) => setHour(e.target.value)} className={styles.select}>
          {hours.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
        :
        <select value={minute} onChange={(e) => setMinute(e.target.value)} className={styles.select}>
          {minutes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomTimePicker;
