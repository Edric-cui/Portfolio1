/**
 * Sound Manager for Jekyll site
 * Gesture-gated sound playback with toggle and localStorage persistence
 */

(function() {
  'use strict';

  // Sound configuration
  const SOUND_STORAGE_KEY = 'sound-enabled';
  const DEFAULT_SOUND_ENABLED = true;

  // Audio files
  const audioFiles = {
    bootHum: null
  };

  // Initialize sound
  function initSound() {
    const soundEnabled = localStorage.getItem(SOUND_STORAGE_KEY);
    const shouldEnable = soundEnabled !== null ? soundEnabled === 'true' : DEFAULT_SOUND_ENABLED;

    // Create audio instance for boot hum
    const baseUrl = document.querySelector('meta[property="baseurl"]')?.content || '';
    audioFiles.bootHum = new Audio(baseUrl + '/assets/site/audio/sfx_boot_hum.mp3');
    audioFiles.bootHum.volume = 0.3;
    audioFiles.bootHum.preload = 'metadata';

    // Set initial state
    setSoundEnabled(shouldEnable);

    // Play boot hum on first user interaction if enabled
    let hasPlayedBootHum = false;
    const playBootHumOnce = function(e) {
      if (!hasPlayedBootHum && audioFiles.bootHum && getSoundEnabled()) {
        audioFiles.bootHum.play().catch(function(err) {
          console.log('Audio playback failed:', err);
        });
        hasPlayedBootHum = true;
        // Remove listener after first play
        document.removeEventListener('click', playBootHumOnce);
        document.removeEventListener('keydown', playBootHumOnce);
      }
    };

    // Wait for user gesture before playing
    document.addEventListener('click', playBootHumOnce, { once: true });
    document.addEventListener('keydown', playBootHumOnce, { once: true });
  }

  function getSoundEnabled() {
    const stored = localStorage.getItem(SOUND_STORAGE_KEY);
    return stored !== null ? stored === 'true' : DEFAULT_SOUND_ENABLED;
  }

  function setSoundEnabled(enabled) {
    localStorage.setItem(SOUND_STORAGE_KEY, String(enabled));
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('sound-toggle', { 
      detail: { enabled: enabled } 
    }));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSound);
  } else {
    initSound();
  }

  // Expose to window for testing
  window.soundManager = {
    playBootHum: function() {
      if (audioFiles.bootHum && getSoundEnabled()) {
        audioFiles.bootHum.currentTime = 0;
        audioFiles.bootHum.play().catch(function(err) {
          console.log('Audio playback failed:', err);
        });
      }
    },
    getEnabled: getSoundEnabled,
    setEnabled: setSoundEnabled
  };

})();
