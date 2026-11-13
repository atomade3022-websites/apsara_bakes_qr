/* ==========================================================================
   APSARA BAKES - Navigation, Mobile Swipe, Popup & Fullscreen Image Viewer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. WISH POPUP: "Thank you for choosing Apsara Bakes. Have a sweet day!"
  // -------------------------------------------------------------------------
  const popup = document.getElementById("welcomePopup");
  const closeBtn = document.getElementById("closePopupBtn");
  const countdownEl = document.getElementById("popupCountdown");
  let timeLeft = 4;
  let closed = false;

  const closePopup = () => {
    if (closed) return;
    closed = true;
    if (popup) {
      popup.classList.add("fade-out");
      setTimeout(() => {
        popup.style.display = "none";
      }, 400);
    }
  };

  // Close on button click or overlay backdrop click
  if (closeBtn) closeBtn.addEventListener("click", closePopup);
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }

  // 4-second countdown
  const timerInterval = setInterval(() => {
    timeLeft -= 1;
    if (timeLeft > 0) {
      if (countdownEl) countdownEl.textContent = `Closing in ${timeLeft}s...`;
    } else {
      clearInterval(timerInterval);
      closePopup();
    }
  }, 1000);

  // -------------------------------------------------------------------------
  // 2. FULLSCREEN IMAGE VIEWER MODAL
  // -------------------------------------------------------------------------
  const viewerModal = document.getElementById("imageViewerModal");
  const viewerImage = document.getElementById("viewerImage");
  const viewerTitle = document.getElementById("viewerTitle");
  const viewerBackdrop = document.getElementById("viewerBackdrop");
  const closeViewerBtn = document.getElementById("closeViewerBtn");

  function openImageViewer(fullSrc, title) {
    if (!viewerModal) return;
    viewerImage.src = fullSrc;
    viewerImage.alt = title;
    viewerTitle.textContent = title;
    viewerModal.style.display = "flex";
    requestAnimationFrame(() => {
      viewerModal.classList.add("active");
    });
  }

  function closeImageViewer() {
    if (!viewerModal) return;
    viewerModal.classList.remove("active");
    setTimeout(() => {
      viewerModal.style.display = "none";
      viewerImage.src = "";
    }, 280);
  }

  if (closeViewerBtn) closeViewerBtn.addEventListener("click", closeImageViewer);
  if (viewerBackdrop) viewerBackdrop.addEventListener("click", closeImageViewer);

  // Attach click listener to each item card
  const cards = document.querySelectorAll(".item-card");
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      if (isSwiping || Math.abs(totalDragDist) > 10) return;
      const fullSrc = card.getAttribute("data-full");
      const name = card.getAttribute("data-name") || card.querySelector(".item-name")?.textContent;
      if (fullSrc) {
        openImageViewer(fullSrc, name);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 3. PAGE NAVIGATION & TABS
  // -------------------------------------------------------------------------
  const swipeContainer = document.getElementById("swipeContainer");
  const tabCakes = document.getElementById("tabCakes");
  const tabBakery = document.getElementById("tabBakery");
  const dot0 = document.getElementById("dot0");
  const dot1 = document.getElementById("dot1");
  const swipeViewport = document.getElementById("swipeViewport");

  let currentPage = 0; // 0 = Cakes, 1 = Bakery Items
  const totalPages = 2;

  function goToPage(pageIndex) {
    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex >= totalPages) pageIndex = totalPages - 1;
    currentPage = pageIndex;

    swipeContainer.style.transition = "transform 0.32s cubic-bezier(0.2, 0.9, 0.3, 1)";
    swipeContainer.style.transform = `translateX(-${currentPage * 50}%)`;

    if (currentPage === 0) {
      tabCakes.classList.add("active");
      tabBakery.classList.remove("active");
      dot0.classList.add("active");
      dot1.classList.remove("active");
    } else {
      tabBakery.classList.add("active");
      tabCakes.classList.remove("active");
      dot1.classList.add("active");
      dot0.classList.remove("active");
    }
  }

  if (tabCakes) tabCakes.addEventListener("click", () => goToPage(0));
  if (tabBakery) tabBakery.addEventListener("click", () => goToPage(1));
  if (dot0) dot0.addEventListener("click", () => goToPage(0));
  if (dot1) dot1.addEventListener("click", () => goToPage(1));

  // -------------------------------------------------------------------------
  // 4. TOUCH SWIPE GESTURES (Mobile phone screen swipe)
  // -------------------------------------------------------------------------
  let touchStartX = 0;
  let touchStartY = 0;
  let touchCurrentX = 0;
  let isSwiping = false;
  let isHorizontal = false;
  let totalDragDist = 0;

  swipeViewport.addEventListener("touchstart", (e) => {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchCurrentX = touchStartX;
    isSwiping = true;
    isHorizontal = false;
    totalDragDist = 0;
    swipeContainer.style.transition = "none";
  }, { passive: true });

  swipeViewport.addEventListener("touchmove", (e) => {
    if (!isSwiping || e.touches.length !== 1) return;
    touchCurrentX = e.touches[0].clientX;
    const diffX = touchCurrentX - touchStartX;
    const diffY = e.touches[0].clientY - touchStartY;
    totalDragDist = Math.max(totalDragDist, Math.abs(diffX));

    if (!isHorizontal) {
      if (Math.abs(diffX) > 12 && Math.abs(diffX) > Math.abs(diffY)) {
        isHorizontal = true;
      }
    }

    if (isHorizontal) {
      const basePercent = -currentPage * 50;
      const viewportWidth = swipeViewport.clientWidth || 360;
      const dragPercent = (diffX / viewportWidth) * 50;
      
      let finalPercent = basePercent + dragPercent;
      if (finalPercent > 0) finalPercent = dragPercent * 0.25;
      if (finalPercent < -50) finalPercent = -50 + (finalPercent + 50) * 0.25;

      swipeContainer.style.transform = `translateX(${finalPercent}%)`;
    }
  }, { passive: true });

  swipeViewport.addEventListener("touchend", () => {
    if (!isSwiping) return;
    isSwiping = false;

    if (isHorizontal) {
      const diffX = touchCurrentX - touchStartX;
      const threshold = 40;

      if (diffX < -threshold && currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (diffX > threshold && currentPage > 0) {
        goToPage(currentPage - 1);
      } else {
        goToPage(currentPage);
      }
    } else {
      goToPage(currentPage);
    }
  });

  // -------------------------------------------------------------------------
  // 5. MOUSE DRAG & KEYBOARD SUPPORT
  // -------------------------------------------------------------------------
  let mouseStartX = 0;
  let mouseStartY = 0;
  let isMouseDown = false;
  let isMouseDragging = false;

  swipeViewport.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    isMouseDragging = false;
    mouseStartX = e.clientX;
    mouseStartY = e.clientY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    const diffX = e.clientX - mouseStartX;
    const diffY = e.clientY - mouseStartY;
    if (Math.abs(diffX) > 15 && Math.abs(diffX) > Math.abs(diffY)) {
      isMouseDragging = true;
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (!isMouseDown) return;
    isMouseDown = false;
    if (isMouseDragging) {
      const diffX = e.clientX - mouseStartX;
      const threshold = 50;
      if (diffX < -threshold && currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (diffX > threshold && currentPage > 0) {
        goToPage(currentPage - 1);
      }
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImageViewer();
    } else if (e.key === "ArrowRight" && currentPage === 0) {
      goToPage(1);
    } else if (e.key === "ArrowLeft" && currentPage === 1) {
      goToPage(0);
    }
  });
});
