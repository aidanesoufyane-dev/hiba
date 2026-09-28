import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hiba_profile_photo';
const defaultHeroPortrait = '/assets/profile.jpeg?v=5c03a02';

export function useProfilePortrait() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return stored;
    }
    return defaultHeroPortrait;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPhotoUrl(stored);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('hiba_photo_updated', handleStorageChange);

    // Also check if /assets/me.jpeg or /me.jpeg is reachable
    fetch('/assets/me.jpeg', { method: 'HEAD' })
      .then((res) => {
        if (res.ok && !localStorage.getItem(STORAGE_KEY)) {
          setPhotoUrl('/assets/me.jpeg');
        }
      })
      .catch(() => {});

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('hiba_photo_updated', handleStorageChange);
    };
  }, []);

  const handleFileUpload = (file: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        localStorage.setItem(STORAGE_KEY, result);
        setPhotoUrl(result);
        window.dispatchEvent(new Event('hiba_photo_updated'));
      }
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotoUrl(defaultHeroPortrait);
    window.dispatchEvent(new Event('hiba_photo_updated'));
  };

  return { photoUrl, handleFileUpload, resetToDefault };
}
