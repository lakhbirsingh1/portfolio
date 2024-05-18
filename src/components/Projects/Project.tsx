import React, { useState } from 'react';
import styles from '@/components/Projects/ImageGallery.module.css'; // Import CSS module for styling
import MotionAndVisualGraphics from './MotionAndVisualGraphics';
import FourDGraphics from './FourDGraphics';
import WebDesign from './WebDesign';
import Latest from './Latest';

const Project = () => {
  const [activeTab, setActiveTab] = useState('latest');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.imageGallery}>
      <div className="border-b border-slate-700/50 p-6 flex justify-between">
        <h2 className="text-2xl">Works</h2>
        <div className={`${styles.tabMenu} flex items-center`}>
          <button className={`${activeTab === 'latest' ? `${styles.active} text-green-400` : ''} font-normal text-sm px-3`} onClick={() => handleTabChange('latest')}>Latest</button>
          <button className={`${activeTab === 'design' ? `${styles.active} text-green-400` : ''}  font-normal text-sm px-3`} onClick={() => handleTabChange('design')}>Web & Mobile App Design</button>
          <button className={`${activeTab === 'ae' ? `${styles.active} text-green-400` : ''}  font-normal text-sm px-3`} onClick={() => handleTabChange('ae')}>After Effects</button>
          <button className={`${activeTab === 'blender' ? `${styles.active} text-green-400` : ''}  font-normal text-sm px-3`} onClick={() => handleTabChange('blender')}>Blender</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {activeTab === 'latest' && (
          <div className={styles.image}>
            <Latest />
          </div>
        )}
        {activeTab === 'design' && (
          <div className={styles.image}>
            <WebDesign />
          </div>
        )}
        {activeTab === 'ae' && (
          <div className={styles.image}>
            <MotionAndVisualGraphics />
          </div>
        )}
        {activeTab === 'blender' && (
          <div className={styles.image}>
            <FourDGraphics />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
