window.onload = function() {
  var sidebar = document.getElementById("sidebar");
  var sidebarButton = document.getElementById("sidebar-button");
  var scrim = document.getElementById("scrim");

  function openSidebar(e) {
    if (sidebar.className.indexOf("slideIn") != -1) {
      // Close sidebar
      sidebar.className = sidebar.className.replace(" slideIn", "");
      if (scrim) {
        scrim.classList.remove("active");
        // Remove scrim after transition
        setTimeout(function() {
          scrim.style.display = "none";
        }, 300);
      }
      document.body.style.overflow = "";
    } else {
      // Open sidebar
      sidebar.className = sidebar.className + " slideIn";
      if (scrim) {
        scrim.style.display = "block";
        // Trigger opacity transition
        setTimeout(function() {
          scrim.classList.add("active");
        }, 10);
      }
      document.body.style.overflow = "hidden";
    }
  }

  function closeSidebar() {
    sidebar.className = sidebar.className.replace(" slideIn", "");
    if (scrim) {
      scrim.classList.remove("active");
      setTimeout(function() {
        scrim.style.display = "none";
      }, 300);
    }
    document.body.style.overflow = "";
  }

  if (sidebarButton) {
    sidebarButton.addEventListener("click", openSidebar, false);
  }

  // Close sidebar when clicking on scrim
  if (scrim) {
    scrim.addEventListener("click", closeSidebar, false);
  }

  // Close sidebar on escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && sidebar.className.indexOf("slideIn") != -1) {
      closeSidebar();
    }
  });
};
