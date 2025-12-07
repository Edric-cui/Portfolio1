(function() {
  'use strict';

  // Generate URL-friendly ID from text
  function generateId(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .trim();
  }

  // Extract headings and build TOC
  function buildTOC() {
    const postContent = document.querySelector('.post');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const tocContainer = document.getElementById('toc-container');
    if (!tocContainer) return;

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';
    
    let currentH2Item = null;

    headings.forEach(function(heading) {
      // Generate or get ID
      let id = heading.id;
      if (!id) {
        id = generateId(heading.textContent);
        heading.id = id;
      }

      const link = document.createElement('a');
      link.href = '#' + id;
      link.textContent = heading.textContent;
      link.className = 'toc-link';
      if (heading.tagName === 'H2') {
        link.className += ' toc-link-h2';
      } else {
        link.className += ' toc-link-h3';
      }

      // Smooth scroll on click - use closure to capture heading reference
      (function(headingElement, headingId) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Get target element by ID (should exist since we set it above)
          const target = document.getElementById(headingId);
          const contentElement = document.querySelector('.content');
          
          if (target && contentElement) {
            const offset = 120; // Offset from top
            
            // Get the scrollable container (content element)
            const scrollContainer = contentElement;
            const containerRect = scrollContainer.getBoundingClientRect();
            const targetRect = target.getBoundingClientRect();
            
            // Calculate position relative to scroll container
            const targetPosition = targetRect.top - containerRect.top + scrollContainer.scrollTop - offset;
            
            // Smooth scroll using requestAnimationFrame
            function smoothScrollTo(targetPos) {
              const startPos = scrollContainer.scrollTop;
              const distance = targetPos - startPos;
              const duration = 600;
              let start = null;

              function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                // Easing function (ease-in-out cubic)
                const ease = percentage < 0.5 
                  ? 4 * percentage * percentage * percentage
                  : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                
                const currentPos = startPos + distance * ease;
                scrollContainer.scrollTop = currentPos;
                
                if (progress < duration) {
                  requestAnimationFrame(step);
                } else {
                  // Ensure we end at exact position
                  scrollContainer.scrollTop = targetPos;
                }
              }
              
              requestAnimationFrame(step);
            }
            
            smoothScrollTo(targetPosition);
            
            // Update URL hash
            if (history.pushState) {
              history.pushState(null, null, '#' + headingId);
            }
          }
        });
      })(heading, id);

      if (heading.tagName === 'H2') {
        // Create new H2 item
        const listItem = document.createElement('li');
        listItem.className = 'toc-item toc-item-h2';
        listItem.appendChild(link);
        tocList.appendChild(listItem);
        currentH2Item = listItem;
      } else {
        // H3 - add to current H2 or create standalone
        if (currentH2Item) {
          let subList = currentH2Item.querySelector('ul');
          if (!subList) {
            subList = document.createElement('ul');
            subList.className = 'toc-sublist';
            currentH2Item.appendChild(subList);
          }
          const listItem = document.createElement('li');
          listItem.className = 'toc-item toc-item-h3';
          listItem.appendChild(link);
          subList.appendChild(listItem);
        } else {
          // Standalone H3 (shouldn't happen but handle it)
          const listItem = document.createElement('li');
          listItem.className = 'toc-item toc-item-h3';
          listItem.appendChild(link);
          tocList.appendChild(listItem);
        }
      }
    });

    tocContainer.appendChild(tocList);
  }

  // Right edge hover detection
  function initRightEdgeHover() {
    const tocContainer = document.getElementById('toc-container');
    const tocIndicator = document.getElementById('toc-indicator');
    if (!tocContainer) return;

    let hoverTimeout;
    const triggerZone = 80; // pixels from right edge
    let isHovering = false;
    let isTOCVisible = false;
    let touchStartX = null;
    let touchStartY = null;

    function showTOC() {
      clearTimeout(hoverTimeout);
      tocContainer.classList.add('toc-visible');
      if (tocIndicator) {
        tocIndicator.classList.add('toc-indicator-hidden');
      }
      isHovering = true;
      isTOCVisible = true;
    }

    function hideTOC() {
      hoverTimeout = setTimeout(function() {
        tocContainer.classList.remove('toc-visible');
        if (tocIndicator) {
          tocIndicator.classList.remove('toc-indicator-hidden');
        }
        isHovering = false;
        isTOCVisible = false;
      }, 200); // Small delay to prevent flickering
    }

    function toggleTOC() {
      if (isTOCVisible) {
        hideTOC();
      } else {
        showTOC();
      }
    }

    // Mouse move detection for right edge (desktop only)
    document.addEventListener('mousemove', function(e) {
      const windowWidth = window.innerWidth;
      const mouseX = e.clientX;

      if (windowWidth - mouseX <= triggerZone) {
        if (!isHovering) {
          showTOC();
        }
      } else {
        // Only hide if not hovering over TOC itself or indicator
        const isHoveringTOC = tocContainer.matches(':hover');
        const isHoveringIndicator = tocIndicator && tocIndicator.matches(':hover');
        if (!isHoveringTOC && !isHoveringIndicator) {
          hideTOC();
        }
      }
    });

    // Keep TOC visible when hovering over it
    tocContainer.addEventListener('mouseenter', function() {
      showTOC();
    });

    tocContainer.addEventListener('mouseleave', function() {
      hideTOC();
    });

    // Also handle indicator hover
    if (tocIndicator) {
      tocIndicator.addEventListener('mouseenter', function() {
        showTOC();
      });
    }

    // Touch event support for mobile
    // Make indicator tappable to toggle TOC
    if (tocIndicator) {
      tocIndicator.addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleTOC();
      }, { passive: false });

      // Also make indicator clickable (for hybrid devices)
      tocIndicator.addEventListener('click', function(e) {
        // Only handle click if it's not from a mouse (to avoid double-triggering)
        if (e.pointerType === 'mouse') {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        toggleTOC();
      });
    }

    // Touch detection for right edge swipe
    document.addEventListener('touchstart', function(e) {
      const touch = e.touches[0];
      if (touch) {
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
      }
    }, { passive: true });

    document.addEventListener('touchend', function(e) {
      if (touchStartX === null || touchStartY === null) return;

      const touch = e.changedTouches[0];
      if (!touch) return;

      const windowWidth = window.innerWidth;
      const touchX = touch.clientX;
      const touchY = touch.clientY;
      const deltaX = touchX - touchStartX;
      const deltaY = touchY - touchStartY;

      // Check if touch started near right edge
      if (windowWidth - touchStartX <= triggerZone) {
        // If swiping left (toward center) or just a tap, show TOC
        if (Math.abs(deltaX) < 20 && Math.abs(deltaY) < 20) {
          // It's a tap
          if (!isTOCVisible) {
            showTOC();
          }
        } else if (deltaX < -30) {
          // Swipe left - show TOC
          if (!isTOCVisible) {
            showTOC();
          }
        }
      }

      touchStartX = null;
      touchStartY = null;
    }, { passive: true });

    // Dismiss TOC when tapping outside (on mobile)
    document.addEventListener('touchstart', function(e) {
      if (!isTOCVisible) return;

      const target = e.target;
      // If touch is outside TOC container and indicator, hide TOC
      if (tocContainer && !tocContainer.contains(target) && 
          tocIndicator && !tocIndicator.contains(target)) {
        hideTOC();
      }
    }, { passive: true });

    // Also handle click outside for hybrid devices
    document.addEventListener('click', function(e) {
      if (!isTOCVisible) return;

      const target = e.target;
      // If click is outside TOC container and indicator, hide TOC
      if (tocContainer && !tocContainer.contains(target) && 
          tocIndicator && !tocIndicator.contains(target)) {
        // Only hide on mobile viewport
        if (window.innerWidth <= 920) {
          hideTOC();
        }
      }
    });
  }

  // Build indicator bars based on headings
  function buildIndicator() {
    const tocIndicator = document.getElementById('toc-indicator');
    if (!tocIndicator) return;

    const postContent = document.querySelector('.post');
    if (!postContent) return;

    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    // Clear existing bars
    tocIndicator.innerHTML = '';

    // Create bars (limit to reasonable number for visual clarity)
    const barCount = Math.min(headings.length, 10);

    for (let i = 0; i < barCount; i++) {
      const bar = document.createElement('div');
      bar.className = 'toc-indicator-bar';
      bar.setAttribute('data-heading-index', i);
      tocIndicator.appendChild(bar);
    }

    // Get content element once
    const contentElement = document.querySelector('.content');
    
    // Update active bar on scroll - tracks current reading position
    function updateActiveBar() {
      const bars = tocIndicator.querySelectorAll('.toc-indicator-bar');
      if (bars.length === 0 || headings.length === 0) return;
      if (!contentElement) return;

      const containerRect = contentElement.getBoundingClientRect();
      const scrollTop = contentElement.scrollTop;
      const containerHeight = contentElement.clientHeight;
      const viewportCenter = scrollTop + containerHeight / 2; // Reading position relative to content
      
      let activeHeadingIndex = -1;
      let closestDistance = Infinity;

      // Find the heading closest to the viewport center
      headings.forEach(function(heading, index) {
        // Get heading position using getBoundingClientRect relative to content
        const headingRect = heading.getBoundingClientRect();
        const containerRect = contentElement.getBoundingClientRect();
        
        // Calculate position relative to content's scroll position
        const headingTop = headingRect.top - containerRect.top + scrollTop;
        const headingHeight = headingRect.height;
        const headingCenter = headingTop + headingHeight / 2;
        
        // Calculate distance from viewport center
        const distance = Math.abs(viewportCenter - headingCenter);
        
        // Check if heading is in the visible scroll area
        const isVisible = headingRect.bottom >= containerRect.top && 
                         headingRect.top <= containerRect.bottom;
        
        if (isVisible) {
          // Heading is visible - check if it's closest to center
          if (distance < closestDistance) {
            closestDistance = distance;
            activeHeadingIndex = index;
          }
        } else if (activeHeadingIndex === -1) {
          // If no visible heading yet, track the last one that passed above viewport
          if (headingRect.bottom < containerRect.top) {
            activeHeadingIndex = index;
          }
        }
      });

      // Fallback to first heading if none found
      if (activeHeadingIndex === -1) {
        activeHeadingIndex = 0;
      }

      // Map heading index to bar index
      const barIndex = barCount > 1 
        ? Math.min(Math.floor((activeHeadingIndex / headings.length) * barCount), barCount - 1)
        : 0;

      bars.forEach(function(bar, index) {
        if (index === barIndex) {
          bar.classList.add('active');
        } else {
          bar.classList.remove('active');
        }
      });
    }

    // Update on scroll using IntersectionObserver for better performance
    const bars = tocIndicator.querySelectorAll('.toc-indicator-bar');
    
    // Use IntersectionObserver to track which heading is in viewport center
    if ('IntersectionObserver' in window && contentElement) {
      const observerOptions = {
        root: contentElement,
        rootMargin: '-40% 0px -40% 0px', // Only trigger when in center 20% of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };
      
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Find which heading this is
            const headingIndex = Array.from(headings).indexOf(entry.target);
            if (headingIndex !== -1) {
              // Map heading index to bar index
              const barIndex = barCount > 1 
                ? Math.min(Math.floor((headingIndex / headings.length) * barCount), barCount - 1)
                : 0;
              
              bars.forEach(function(bar, index) {
                if (index === barIndex) {
                  bar.classList.add('active');
                } else {
                  bar.classList.remove('active');
                }
              });
            }
          }
        });
      }, observerOptions);
      
      // Observe all headings
      headings.forEach(function(heading) {
        observer.observe(heading);
      });
    } else {
      // Fallback to scroll event if IntersectionObserver not available
      let scrollTimeout;
      function handleScroll() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveBar, 50);
      }
      
      if (contentElement) {
        contentElement.addEventListener('scroll', handleScroll, { passive: true });
      }
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Initial update
    updateActiveBar();
    
    // Also update on resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateActiveBar, 100);
    });
  }

  // Initialize when DOM is ready (only on post pages)
  function init() {
    const postContent = document.querySelector('.post');
    if (!postContent) {
      // Hide TOC elements if not on a post page
      const tocContainer = document.getElementById('toc-container');
      const tocIndicator = document.getElementById('toc-indicator');
      if (tocContainer) tocContainer.style.display = 'none';
      if (tocIndicator) tocIndicator.style.display = 'none';
      return;
    }

    buildTOC();
    buildIndicator();
    initRightEdgeHover();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

