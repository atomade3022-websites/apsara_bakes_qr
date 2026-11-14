/* ==========================================================================
   APSARA BAKES - Navigation, Mobile Swipe, Popup & Fullscreen Image Viewer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. CAKE INGREDIENTS (Apsara Special Fresh Cream Cakes)
  // -------------------------------------------------------------------------
  const cakeData = {
    "Berry Chocolate Cake": {
      menuName: "BERRY CHOCOLATE",
      ingredients: "Black Red Cake, Truffle, Milkmaid, Praline, White Chip, Black Chip"
    },
    "Blueberry Cake": {
      menuName: "BLUEBERRY",
      ingredients: "White Cake, Blueberry Filling, Milkmaid, White Chip"
    },
    "Boost Nap Cake": {
      menuName: "BOOST NAP",
      ingredients: "Black Cake, Boost, Black Chip"
    },
    "Butterscotch Delight": {
      menuName: "BUTTERSCOTCH",
      ingredients: "White Cake, White Chip, Praline, Caramel"
    },
    "Caramel Crunch": {
      menuName: "CARAMEL",
      ingredients: "White Cake, Nuts, White Chip, Praline, Caramel Gel"
    },
    "Choco Crunch Cake": {
      menuName: "CHOCO CRUNCH",
      ingredients: "Black Cake, Boost, Horlicks, Choco Filling, Nuts, Black Chip, Praline, Truffle"
    },
    "Choco Truffle Cake": {
      menuName: "CHOCO TRUFFLE",
      ingredients: "Black Cake, Truffle, Black Chip, Nuts"
    },
    "Choco Vanilla Cake": {
      menuName: "CHOCO VANILLA",
      ingredients: "White Black Cake, Black Cake, White Cake, Nuts, Truffle"
    },
    "Choco Velvet Cake": {
      menuName: "CHOCO VELVET",
      ingredients: "Red Cake, Truffle, Nuts, Black Cake, Strawberry Crush"
    },
    "Cocktail Fruit Cake": {
      menuName: "COCKTAIL",
      ingredients: "White Cake, Fresh Mixed Fruit"
    },
    "Coffee Fresh Cake": {
      menuName: "COFFEE FRESH",
      ingredients: "Black Cake, Truffle, Coffee Powder, Black Cake, Praline, Nuts"
    },
    "Coffee Peanut Cake": {
      menuName: "COFFEE PEANUT",
      ingredients: "White Cake, Peanut, Coffee Powder, Truffle, Black Cake"
    },
    "Crunchy KitKat Cake": {
      menuName: "CRUNCHY KITKAT",
      ingredients: "Black Cake, Nutella, KitKat, Nuts, Gems"
    },
    "Dates Rich Cake": {
      menuName: "DATES RICH",
      ingredients: "White Cake, Dates, Praline, White Cake, Nuts, Dates Syrup"
    },
    "Dutch Fantasy Cake": {
      menuName: "DUTCH FANTACY",
      ingredients: "Black Cake, Truffle, Dark Fantasy, Praline, Black Cake"
    },
    "Ferrero Choco Cake": {
      menuName: "FERRARO CHOCO",
      ingredients: "Black Cake, Nutella, Ferrero Rocher, KitKat, Praline, Nuts"
    },
    "Fudge Nut Cake": {
      menuName: "FUDGE NUT",
      ingredients: "White Cake, Caramel, Praline, Nuts, Black Cake, White Cake"
    },
    "Gemscort Cake": {
      menuName: "GEMSCORT",
      ingredients: "Black White Cake, Gems, Truffle, Munch, Nuts, Black Cake, White Cake"
    },
    "German Chocolate Cake": {
      menuName: "GERMAN CHOCOLATE",
      ingredients: "Black Cake, Almond, Praline, White Cake, Black Cake, Coconut Powder"
    },
    "Honey Almond Cake": {
      menuName: "HONEY ALMOND",
      ingredients: "White Cake, Pure Honey, Almond, White Cake"
    },
    "Honey Nut Cake": {
      menuName: "HONEY NUT",
      ingredients: "White Cake, Pure Honey, Nuts, White Cake"
    },
    "Horlicks Vanilla Cake": {
      menuName: "HORLICKS VANILLA",
      ingredients: "White Cake, Horlicks, White Cake, Nuts, Praline"
    },
    "Kifaya Cake": {
      menuName: "KIFAYA CAKE",
      ingredients: "White Red Cake, Strawberry Crush, Mango Crush, Pista, Nuts, Praline"
    },
    "Kulfi Cake": {
      menuName: "KULFI CAKE",
      ingredients: "White Cake, Kulfi Mix, Pista, Almond, White Cake"
    },
    "Lotus Biscoff Cake": {
      menuName: "LOTUS",
      ingredients: "White Cake, Lotus Cheese Cream, Lotus Biscuit, Nuts, Praline"
    },
    "Mango Magic Cake": {
      menuName: "MANGO MAGIC",
      ingredients: "White Cake, White Cake, Mango Gel, Mango Filling"
    },
    "Merryberry Cake": {
      menuName: "MERRYBERRY",
      ingredients: "White Black Red Cake, Strawberry Crush, Truffle, Black Cake, White Cake, Praline, Nuts"
    },
    "Milk Chocolate Cake": {
      menuName: "MILK CHOCOLATE",
      ingredients: "Black Cake, Truffle, Nuts, Black Cake"
    },
    "Milk Fantasy Cake": {
      menuName: "MILK FANTACY",
      ingredients: "White Cake, White Cake, Fresh Milk Cream"
    },
    "Mingle Cake": {
      menuName: "MINGLE CAKE",
      ingredients: "White Cake, Hershey's Syrup, Orange Crush, Wafer Biscuit, Cherry, Praline"
    },
    "Munch Bite Cake": {
      menuName: "MUNCH BITE",
      ingredients: "White Cake, Munch, White Cake, Praline"
    },
    "Nestle Vanilla Cake": {
      menuName: "NESTLE VANILLA",
      ingredients: "White Cake, Praline, White Cake, Horlicks, Truffle"
    },
    "Nut Chocolate Cake": {
      menuName: "NUT CHOCOLATE",
      ingredients: "Black Cake, Nuts, Truffle, Black Cake"
    },
    "Nutella Cake": {
      menuName: "NUTELLA CAKE",
      ingredients: "Black Cake, Nutella, Nuts, Black Cake, Praline"
    },
    "Nutty Bubble Cake": {
      menuName: "NUTTY BUBBLE",
      ingredients: "White Cake, Almond, Nuts, White Chip, Black Chip, Milkmaid"
    },
    "Oreo Flake Cake": {
      menuName: "OREO FLAKE",
      ingredients: "Black Cake, Oreo Biscuit, Truffle"
    },
    "Pineapple Cotex Cake": {
      menuName: "PINEAPPLE COTEX",
      ingredients: "White Cake, White Cake, Pineapple Crush & Filling"
    },
    "Premium Choco Chip Cake": {
      menuName: "PREMIUM CHOCO CHIP",
      ingredients: "Black Cake, Truffle, Choco Chips"
    },
    "Premium White Chip Cake": {
      menuName: "PREMIUM WHITE CHIP",
      ingredients: "White Cake, Truffle, White Cake, White Chips"
    },
    "Praline Cake": {
      menuName: "PROLINE",
      ingredients: "White Cake, Praline, Black Cake, White Cake"
    },
    "Red Bee Cake": {
      menuName: "RED BEE",
      ingredients: "White Black Red Cake, Truffle, Nuts, Black Cake, White Cake, Praline"
    },
    "Red Vancho Cake": {
      menuName: "RED VANCHO",
      ingredients: "Black Red Cake, Nuts, Black Cake, White Cake, Praline, Truffle"
    },
    "Red Velvet Cake": {
      menuName: "RED VELVET",
      ingredients: "Red Cake, Nuts, White Cake"
    },
    "Snickers Drip Cake": {
      menuName: "SNICKERS DRIP",
      ingredients: "Black Cake, Snickers, Peanut, Milk Truffle"
    },
    "Spanish Delight Cake": {
      menuName: "SPANISH DELIGHT",
      ingredients: "Black Cake, Nutella, Boost, White Cake, Black Cake"
    },
    "Strawberry Cake": {
      menuName: "STRAWBERRY",
      ingredients: "White Cake, Strawberry Filling Gel"
    },
    "Vancho Cake": {
      menuName: "VANCHO",
      ingredients: "White Black Cake, Truffle, Nuts, White Cake, Black Cake"
    }
  };

  // -------------------------------------------------------------------------
  // 2. WISH POPUP: "Thank you for choosing Apsara Bakes. Have a sweet day!"
  // -------------------------------------------------------------------------
  const popup = document.getElementById("welcomePopup");
  const closeBtn = document.getElementById("closePopupBtn");
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

  if (closeBtn) closeBtn.addEventListener("click", closePopup);
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }

  // Auto-close after 2 seconds without mentioning time
  setTimeout(() => {
    closePopup();
  }, 2000);

  // -------------------------------------------------------------------------
  // 3. FULLSCREEN IMAGE VIEWER MODAL (WHITE BACKGROUND + SHARE)
  // -------------------------------------------------------------------------
  const viewerModal = document.getElementById("imageViewerModal");
  const viewerImage = document.getElementById("viewerImage");
  const viewerTitle = document.getElementById("viewerTitle");
  const viewerIngredientsBox = document.getElementById("viewerIngredientsBox");
  const viewerIngredientsList = document.getElementById("viewerIngredientsList");
  const viewerCategoryTag = document.getElementById("viewerCategoryTag");
  const viewerBackdrop = document.getElementById("viewerBackdrop");
  const closeViewerBtn = document.getElementById("closeViewerBtn");

  const shareWhatsAppBtn = document.getElementById("shareWhatsAppBtn");
  const shareInstagramBtn = document.getElementById("shareInstagramBtn");
  const shareNativeBtn = document.getElementById("shareNativeBtn");
  const shareCopyBtn = document.getElementById("shareCopyBtn");
  const copyBtnLabel = document.getElementById("copyBtnLabel");
  const shareToast = document.getElementById("shareToast");

  let currentItemData = {
    title: "",
    ingredients: "",
    fullSrc: "",
    url: ""
  };

  function getShareUrl(title) {
    const base = window.location.origin + window.location.pathname;
    return `${base}?item=${encodeURIComponent(title)}`;
  }

  function getShareText(includeUrl = true) {
    let text = `🎂 *${currentItemData.title}* from Apsara Bakes!`;
    if (currentItemData.ingredients) {
      text += `\n✨ Ingredients: ${currentItemData.ingredients}`;
    }
    if (includeUrl) {
      text += `\n👉 View details: ${currentItemData.url}`;
    }
    return text;
  }

  let toastTimeout = null;
  function showToast(message) {
    if (!shareToast) return;
    shareToast.textContent = message;
    shareToast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      shareToast.classList.remove("show");
    }, 2500);
  }

  function copyToClipboard(text, successMsg = "Link copied to clipboard!") {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand("copy");
      showToast(successMsg);
    } catch (e) {
      showToast("Unable to copy link");
    }
    document.body.removeChild(textarea);
  }

  function openImageViewer(fullSrc, title, ingredients = "", isBakery = false) {
    if (!viewerModal) return;

    // Resolve ingredients (for standard cakes)
    const fallback = cakeData[title] || {};
    const finalIngredients = ingredients || fallback.ingredients || "";

    currentItemData = {
      title,
      ingredients: finalIngredients,
      fullSrc,
      url: getShareUrl(title)
    };

    viewerImage.src = fullSrc;
    viewerImage.alt = title;
    viewerTitle.textContent = title;

    // Ingredients section (Shown only for fresh cream cakes that have ingredients)
    if (viewerIngredientsBox && viewerIngredientsList) {
      if (finalIngredients) {
        viewerIngredientsList.innerHTML = "";
        const parts = finalIngredients.split(",").map(s => s.trim()).filter(Boolean);
        parts.forEach(ing => {
          const chip = document.createElement("span");
          chip.className = "ingredient-chip";
          chip.textContent = ing;
          viewerIngredientsList.appendChild(chip);
        });
        viewerIngredientsBox.style.display = "block";
        if (viewerCategoryTag) viewerCategoryTag.style.display = "none";
      } else {
        viewerIngredientsBox.style.display = "none";
        if (viewerCategoryTag) {
          if (isBakery) {
            viewerCategoryTag.style.display = "inline-flex";
          } else {
            viewerCategoryTag.style.display = "none";
          }
        }
      }
    }

    // Reset Copy button label
    if (copyBtnLabel) copyBtnLabel.textContent = "Copy Link";
    if (shareCopyBtn) shareCopyBtn.classList.remove("copied");

    // Display modal with white background
    hideSlideGuide();
    viewerModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      viewerModal.classList.add("active");
    });
  }

  function closeImageViewer() {
    if (!viewerModal) return;
    viewerModal.classList.remove("active");
    document.body.style.overflow = "";
    setTimeout(() => {
      viewerModal.style.display = "none";
      viewerImage.src = "";
      if (!allSectionsVisited) showSlideGuide();
    }, 260);
  }

  if (closeViewerBtn) closeViewerBtn.addEventListener("click", closeImageViewer);
  if (viewerBackdrop) viewerBackdrop.addEventListener("click", closeImageViewer);

  // -------------------------------------------------------------------------
  // SHARE EVENT HANDLERS (WhatsApp, Instagram, Native Share, Copy Link)
  // -------------------------------------------------------------------------
  if (shareWhatsAppBtn) {
    shareWhatsAppBtn.addEventListener("click", () => {
      const text = getShareText(true);
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
      window.open(waUrl, "_blank");
    });
  }

  if (shareInstagramBtn) {
    shareInstagramBtn.addEventListener("click", async () => {
      const shareUrl = currentItemData.url;
      const text = getShareText(false);

      if (navigator.share) {
        try {
          await navigator.share({
            title: currentItemData.title,
            text: text,
            url: shareUrl
          });
          return;
        } catch (err) {
          if (err.name === "AbortError") return;
        }
      }

      copyToClipboard(shareUrl, "Link copied! Opening Instagram...");
      setTimeout(() => {
        window.open("https://www.instagram.com/", "_blank");
      }, 600);
    });
  }

  if (shareNativeBtn) {
    shareNativeBtn.addEventListener("click", async () => {
      const shareUrl = currentItemData.url;
      const text = getShareText(false);
      if (navigator.share) {
        try {
          await navigator.share({
            title: currentItemData.title,
            text: text,
            url: shareUrl
          });
        } catch (err) {
          if (err.name !== "AbortError") {
            copyToClipboard(shareUrl);
          }
        }
      } else {
        copyToClipboard(shareUrl);
      }
    });
  }

  if (shareCopyBtn) {
    shareCopyBtn.addEventListener("click", () => {
      copyToClipboard(currentItemData.url);
      if (copyBtnLabel) copyBtnLabel.textContent = "Copied! ✓";
      shareCopyBtn.classList.add("copied");
      setTimeout(() => {
        if (copyBtnLabel) copyBtnLabel.textContent = "Copy Link";
        shareCopyBtn.classList.remove("copied");
      }, 2000);
    });
  }

  // Attach click listener to each item card across all pages
  const cards = document.querySelectorAll(".item-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (isSwiping || Math.abs(totalDragDist) > 10) return;
      const fullSrc = card.getAttribute("data-full");
      const name = card.getAttribute("data-name") || card.querySelector(".item-name")?.textContent;
      const ingredients = card.getAttribute("data-ingredients") || "";
      const isBakery = Boolean(card.closest("#pageBakery"));
      if (fullSrc) {
        openImageViewer(fullSrc, name, ingredients, isBakery);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. PAGE NAVIGATION & TABS (3 SECTIONS: CAKES, BAKERY, CUSTOMIZED CAKES)
  // -------------------------------------------------------------------------
  const swipeContainer = document.getElementById("swipeContainer");
  const tabCakes = document.getElementById("tabCakes");
  const tabBakery = document.getElementById("tabBakery");
  const tabCustomized = document.getElementById("tabCustomized");
  const dot0 = document.getElementById("dot0");
  const dot1 = document.getElementById("dot1");
  const dot2 = document.getElementById("dot2");
  const swipeViewport = document.getElementById("swipeViewport");

  // Slide to next section animated indicator
  const slideGuideHint = document.getElementById("slideGuideHint");
  const slideGuideText = document.getElementById("slideGuideText");
  const swipeHint = document.getElementById("swipeHint");

  const visitedSections = new Set([0]); // Starts on section 0 (Cakes)
  let allSectionsVisited = false;
  let scrollStopTimer = null;

  function updateSlideGuideText(pageIndex) {
    if (allSectionsVisited || !slideGuideHint) return;
    const arrowIcon = slideGuideHint.querySelector(".slide-guide-arrow-icon");

    if (pageIndex === 0) {
      if (slideGuideText) slideGuideText.textContent = "Slide for Bakery Items";
      if (arrowIcon) arrowIcon.style.transform = "rotate(0deg)";
    } else if (pageIndex === 1) {
      if (slideGuideText) slideGuideText.textContent = "Slide for Customized Cakes";
      if (arrowIcon) arrowIcon.style.transform = "rotate(0deg)";
    } else if (pageIndex === 2) {
      if (!visitedSections.has(1)) {
        if (slideGuideText) slideGuideText.textContent = "Slide for Bakery Items";
        if (arrowIcon) arrowIcon.style.transform = "rotate(180deg)";
      } else if (!visitedSections.has(0)) {
        if (slideGuideText) slideGuideText.textContent = "Slide for Cakes";
        if (arrowIcon) arrowIcon.style.transform = "rotate(180deg)";
      }
    }
  }

  function hideSlideGuide() {
    if (!slideGuideHint || allSectionsVisited) return;
    slideGuideHint.classList.add("hidden");
    slideGuideHint.classList.remove("popping-up");
  }

  function showSlideGuide() {
    if (!slideGuideHint || allSectionsVisited) return;
    if (visitedSections.size >= 3) {
      stopSlideGuidePermanently();
      return;
    }
    slideGuideHint.classList.remove("hidden");
    slideGuideHint.classList.remove("popping-up");
    void slideGuideHint.offsetWidth; // Force reflow to replay pop-up animation
    slideGuideHint.classList.add("popping-up");
  }

  function stopSlideGuidePermanently() {
    allSectionsVisited = true;
    if (slideGuideHint) {
      slideGuideHint.classList.add("hidden", "stopped");
      slideGuideHint.style.display = "none";
    }
    if (swipeHint) {
      swipeHint.style.display = "none";
    }
  }

  function handleSectionChange(newPageIndex) {
    visitedSections.add(newPageIndex);

    // If all 3 sections (0, 1, 2) have been visited, permanently stop animation
    if (visitedSections.has(0) && visitedSections.has(1) && visitedSections.has(2)) {
      stopSlideGuidePermanently();
      return;
    }

    updateSlideGuideText(newPageIndex);
    showSlideGuide();
  }

  if (slideGuideHint) {
    slideGuideHint.addEventListener("click", () => {
      if (currentPage < totalPages - 1) {
        goToPage(currentPage + 1);
      } else if (currentPage === 2) {
        if (!visitedSections.has(1)) goToPage(1);
        else if (!visitedSections.has(0)) goToPage(0);
      }
    });
  }

  // Scroll detection: while user scrolls down, animation stops; when user stops scrolling, pops up again
  function onScrollHandler() {
    if (allSectionsVisited) return;

    // Scrolling down/up: stop animation and hide
    hideSlideGuide();

    // When scrolling stops, pop up again
    clearTimeout(scrollStopTimer);
    scrollStopTimer = setTimeout(() => {
      if (!allSectionsVisited) {
        showSlideGuide();
      }
    }, 280);
  }

  const menuPages = document.querySelectorAll(".menu-page");
  menuPages.forEach(p => {
    p.addEventListener("scroll", onScrollHandler, { passive: true });
  });
  window.addEventListener("scroll", onScrollHandler, { passive: true });
  document.addEventListener("scroll", onScrollHandler, { passive: true });

  let currentPage = 0; // 0 = Cakes, 1 = Bakery Items, 2 = Customized Cakes
  const totalPages = 3;

  const tabs = [tabCakes, tabBakery, tabCustomized];
  const dots = [dot0, dot1, dot2];

  function goToPage(pageIndex) {
    if (pageIndex < 0) pageIndex = 0;
    if (pageIndex >= totalPages) pageIndex = totalPages - 1;
    currentPage = pageIndex;

    swipeContainer.style.transition = "transform 0.32s cubic-bezier(0.2, 0.9, 0.3, 1)";
    swipeContainer.style.transform = `translateX(-${currentPage * (100 / totalPages)}%)`;

    tabs.forEach((tab, idx) => {
      if (!tab) return;
      if (idx === currentPage) tab.classList.add("active");
      else tab.classList.remove("active");
    });

    dots.forEach((dot, idx) => {
      if (!dot) return;
      if (idx === currentPage) dot.classList.add("active");
      else dot.classList.remove("active");
    });

    handleSectionChange(currentPage);
  }

  if (tabCakes) tabCakes.addEventListener("click", () => goToPage(0));
  if (tabBakery) tabBakery.addEventListener("click", () => goToPage(1));
  if (tabCustomized) tabCustomized.addEventListener("click", () => goToPage(2));

  if (dot0) dot0.addEventListener("click", () => goToPage(0));
  if (dot1) dot1.addEventListener("click", () => goToPage(1));
  if (dot2) dot2.addEventListener("click", () => goToPage(2));

  // -------------------------------------------------------------------------
  // 5. TOUCH SWIPE GESTURES (Mobile phone screen swipe across 3 pages)
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
      const stepPercent = 100 / totalPages;
      const basePercent = -currentPage * stepPercent;
      const viewportWidth = swipeViewport.clientWidth || 360;
      const dragPercent = (diffX / viewportWidth) * stepPercent;
      
      let finalPercent = basePercent + dragPercent;
      const maxLimit = 0;
      const minLimit = -((totalPages - 1) * stepPercent);

      if (finalPercent > maxLimit) finalPercent = dragPercent * 0.25;
      if (finalPercent < minLimit) finalPercent = minLimit + (finalPercent - minLimit) * 0.25;

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
  // 6. MOUSE DRAG & KEYBOARD SUPPORT
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
    } else if (e.key === "ArrowRight" && currentPage < totalPages - 1) {
      goToPage(currentPage + 1);
    } else if (e.key === "ArrowLeft" && currentPage > 0) {
      goToPage(currentPage - 1);
    }
  });

  // -------------------------------------------------------------------------
  // 7. DEEP LINKING: AUTO-OPEN SHARED CAKE/ITEM FROM URL (?item=...)
  // -------------------------------------------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const sharedItemName = urlParams.get("item");
  if (sharedItemName) {
    if (popup) {
      closed = true;
      popup.style.display = "none";
    }

    const targetCard = Array.from(document.querySelectorAll(".item-card")).find(c => {
      const n = c.getAttribute("data-name") || c.querySelector(".item-name")?.textContent?.trim();
      return n && n.toLowerCase() === sharedItemName.toLowerCase();
    });

    if (targetCard) {
      if (targetCard.closest("#pageBakery")) {
        goToPage(1);
      } else if (targetCard.closest("#pageCustomized")) {
        goToPage(2);
      } else {
        goToPage(0);
      }
      const fullSrc = targetCard.getAttribute("data-full");
      const name = targetCard.getAttribute("data-name") || targetCard.querySelector(".item-name")?.textContent;
      const ingredients = targetCard.getAttribute("data-ingredients") || "";
      const isBakery = Boolean(targetCard.closest("#pageBakery"));
      setTimeout(() => {
        openImageViewer(fullSrc, name, ingredients, isBakery);
      }, 350);
    }
  }
});
