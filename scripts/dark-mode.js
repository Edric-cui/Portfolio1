(function() {
  'use strict';

  // Get theme preference from localStorage or system preference
  function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Apply theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    updateToggleIcon(theme);
  }

  // Update toggle button icon and text
  function updateToggleIcon(theme) {
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      const icon = toggle.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fas fa-sun';
          toggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
          toggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
          icon.className = 'fas fa-moon';
          toggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
          toggle.setAttribute('aria-label', 'Switch to dark mode');
        }
      }
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Initialize theme on page load (before DOM is fully loaded to prevent flash)
  const initialTheme = getThemePreference();
  applyTheme(initialTheme);

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      const toggle = document.getElementById('dark-mode-toggle');
      if (toggle) {
        toggle.addEventListener('click', toggleTheme);
      }
    });
  } else {
    // DOM is already ready
    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  }

  // Listen for system theme changes
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function(e) {
      // Only apply system preference if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();

