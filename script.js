/* ==========================================================================
   APSARA BAKES - Navigation, Mobile Swipe, Popup & Fullscreen Image Viewer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------------------
  // 1. CAKE INGREDIENTS & PRICES (Apsara Special Fresh Cream Cakes)
  // -------------------------------------------------------------------------
  const cakeData = {
    // Menu Card 1 & 2 items
    "Berry Chocolate Cake": {
      menuName: "BERRY CHOCOLATE",
      price: "₹1000/-",
      ingredients: "Black Red Cake, Truffle, Milkmaid, Praline, White Chip, Black Chip"
    },
    "Blueberry Cake": {
      menuName: "BLUEBERRY",
      price: "₹800/-",
      ingredients: "White Cake, Blueberry Filling, Milkmaid, White Chip"
    },
    "Boost Nap Cake": {
      menuName: "BOOST NAP",
      price: "₹900/-",
      ingredients: "Black Cake, Boost, Black Chip"
    },
    "Butterscotch Delight": {
      menuName: "BUTTERSCOTCH",
      price: "₹800/-",
      ingredients: "White Cake, White Chip, Praline, Caramel"
    },
    "Caramel Crunch": {
      menuName: "CARAMEL",
      price: "₹800/-",
      ingredients: "White Cake, Nuts, White Chip, Praline, Caramel Gel"
    },
    "Choco Crunch Cake": {
      menuName: "CHOCO CRUNCH",
      price: "₹900/-",
      ingredients: "Black Cake, Boost, Horlicks, Choco Filling, Nuts, Black Chip, Praline, Truffle"
    },
    "Choco Truffle Cake": {
      menuName: "CHOCO TRUFFLE",
      price: "₹800/-",
      ingredients: "Black Cake, Truffle, Black Chip, Nuts"
    },
    "Choco Vanilla Cake": {
      menuName: "CHOCO VANILLA",
      price: "₹900/-",
      ingredients: "White Black Cake, Black Cake, White Cake, Nuts, Truffle"
    },
    "Choco Velvet Cake": {
      menuName: "CHOCO VELVET",
      price: "₹900/-",
      ingredients: "Red Cake, Truffle, Nuts, Black Cake, Strawberry Crush"
    },
    "Cocktail Fruit Cake": {
      menuName: "COCKTAIL",
      price: "₹1300/-",
      ingredients: "White Cake, Fresh Mixed Fruit"
    },
    "Coffee Fresh Cake": {
      menuName: "COFFEE FRESH",
      price: "₹800/-",
      ingredients: "Black Cake, Truffle, Coffee Powder, Black Cake, Praline, Nuts"
    },
    "Coffee Peanut Cake": {
      menuName: "COFFEE PEANUT",
      price: "₹900/-",
      ingredients: "White Cake, Peanut, Coffee Powder, Truffle, Black Cake"
    },
    "Crunchy KitKat Cake": {
      menuName: "CRUNCHY KITKAT",
      price: "₹1400/-",
      ingredients: "Black Cake, Nutella, KitKat, Nuts, Gems"
    },
    "Dates Rich Cake": {
      menuName: "DATES RICH",
      price: "₹900/-",
      ingredients: "White Cake, Dates, Praline, White Cake, Nuts, Dates Syrup"
    },
    "Dutch Fantasy Cake": {
      menuName: "DUTCH FANTACY",
      price: "₹1000/-",
      ingredients: "Black Cake, Truffle, Dark Fantasy, Praline, Black Cake"
    },
    "Ferrero Choco Cake": {
      menuName: "FERRARO CHOCO",
      price: "₹1400/-",
      ingredients: "Black Cake, Nutella, Ferrero Rocher, KitKat, Praline, Nuts"
    },
    "Fudge Nut Cake": {
      menuName: "FUDGE NUT",
      price: "₹900/-",
      ingredients: "White Cake, Caramel, Praline, Nuts, Black Cake, White Cake"
    },
    "Gemscort Cake": {
      menuName: "GEMSCORT",
      price: "₹1000/-",
      ingredients: "Black White Cake, Gems, Truffle, Munch, Nuts, Black Cake, White Cake"
    },
    "German Chocolate Cake": {
      menuName: "GERMAN CHOCOLATE",
      price: "₹900/-",
      ingredients: "Black Cake, Almond, Praline, White Cake, Black Cake, Coconut Powder"
    },
    "Honey Almond Cake": {
      menuName: "HONEY ALMOND",
      price: "₹900/-",
      ingredients: "White Cake, Pure Honey, Almond, White Cake"
    },
    "Honey Nut Cake": {
      menuName: "HONEY NUT",
      price: "₹900/-",
      ingredients: "White Cake, Pure Honey, Nuts, White Cake"
    },
    "Horlicks Vanilla Cake": {
      menuName: "HORLICKS VANILLA",
      price: "₹1000/-",
      ingredients: "White Cake, Horlicks, White Cake, Nuts, Praline"
    },
    "Kifaya Cake": {
      menuName: "KIFAYA CAKE",
      price: "₹900/-",
      ingredients: "White Red Cake, Strawberry Crush, Mango Crush, Pista, Nuts, Praline"
    },
    "Kulfi Cake": {
      menuName: "KULFI CAKE",
      price: "₹900/-",
      ingredients: "White Cake, Kulfi Mix, Pista, Almond, White Cake"
    },
    "Lotus Biscoff Cake": {
      menuName: "LOTUS",
      price: "₹1300/-",
      ingredients: "White Cake, Lotus Cheese Cream, Lotus Biscuit, Nuts, Praline"
    },
    "Mango Magic Cake": {
      menuName: "MANGO MAGIC",
      price: "₹700/-",
      ingredients: "White Cake, White Cake, Mango Gel, Mango Filling"
    },
    "Merryberry Cake": {
      menuName: "MERRYBERRY",
      price: "₹900/-",
      ingredients: "White Black Red Cake, Strawberry Crush, Truffle, Black Cake, White Cake, Praline, Nuts"
    },
    "Milk Chocolate Cake": {
      menuName: "MILK CHOCOLATE",
      price: "₹900/-",
      ingredients: "Black Cake, Truffle, Nuts, Black Cake"
    },
    "Milk Fantasy Cake": {
      menuName: "MILK FANTACY",
      price: "₹900/-",
      ingredients: "White Cake, White Cake, Fresh Milk Cream"
    },
    "Mingle Cake": {
      menuName: "MINGLE CAKE",
      price: "₹900/-",
      ingredients: "White Cake, Hershey's Syrup, Orange Crush, Wafer Biscuit, Cherry, Praline"
    },
    "Munch Bite Cake": {
      menuName: "MUNCH BITE",
      price: "₹800/-",
      ingredients: "White Cake, Munch, White Cake, Praline"
    },
    "Nestle Vanilla Cake": {
      menuName: "NESTLE VANILLA",
      price: "₹800/-",
      ingredients: "White Cake, Praline, White Cake, Horlicks, Truffle"
    },
    "Nut Chocolate Cake": {
      menuName: "NUT CHOCOLATE",
      price: "₹1000/-",
      ingredients: "Black Cake, Nuts, Truffle, Black Cake"
    },
    "Nutella Cake": {
      menuName: "NUTELLA CAKE",
      price: "₹900/-",
      ingredients: "Black Cake, Nutella, Nuts, Black Cake, Praline"
    },
    "Nutty Bubble Cake": {
      menuName: "NUTTY BUBBLE",
      price: "₹900/-",
      ingredients: "White Cake, Almond, Nuts, White Chip, Black Chip, Milkmaid"
    },
    "Oreo Flake Cake": {
      menuName: "OREO FLAKE",
      price: "₹800/-",
      ingredients: "Black Cake, Oreo Biscuit, Truffle"
    },
    "Pineapple Cotex Cake": {
      menuName: "PINEAPPLE COTEX",
      price: "₹700/-",
      ingredients: "White Cake, White Cake, Pineapple Crush & Filling"
    },
    "Premium Choco Chip Cake": {
      menuName: "PREMIUM CHOCO CHIP",
      price: "₹900/-",
      ingredients: "Black Cake, Truffle, Choco Chips"
    },
    "Premium White Chip Cake": {
      menuName: "PREMIUM WHITE CHIP",
      price: "₹900/-",
      ingredients: "White Cake, Truffle, White Cake, White Chips"
    },
    "Praline Cake": {
      menuName: "PROLINE",
      price: "₹700/-",
      ingredients: "White Cake, Praline, Black Cake, White Cake"
    },
    "Red Bee Cake": {
      menuName: "RED BEE",
      price: "₹900/-",
      ingredients: "White Black Red Cake, Truffle, Nuts, Black Cake, White Cake, Praline"
    },
    "Red Vancho Cake": {
      menuName: "RED VANCHO",
      price: "₹900/-",
      ingredients: "Black Red Cake, Nuts, Black Cake, White Cake, Praline, Truffle"
    },
    "Red Velvet Cake": {
      menuName: "RED VELVET",
      price: "₹800/-",
      ingredients: "Red Cake, Nuts, White Cake"
    },
    "Snickers Drip Cake": {
      menuName: "SNICKERS DRIP",
      price: "₹1100/-",
      ingredients: "Black Cake, Snickers, Peanut, Milk Truffle"
    },
    "Spanish Delight Cake": {
      menuName: "SPANISH DELIGHT",
      price: "₹1000/-",
      ingredients: "Black Cake, Nutella, Boost, White Cake, Black Cake"
    },
    "Strawberry Cake": {
      menuName: "STRAWBERRY",
      price: "₹800/-",
      ingredients: "White Cake, Strawberry Filling Gel"
    },
    "Vancho Cake": {
      menuName: "VANCHO",
      price: "₹800/-",
      ingredients: "White Black Cake, Truffle, Nuts, White Cake, Black Cake"
    }
  };

  // -------------------------------------------------------------------------
  // 2. WISH POPUP: "Thank you for choosing Apsara Bakes. Have a sweet day!"
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

  if (closeBtn) closeBtn.addEventListener("click", closePopup);
  if (popup) {
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }

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
  // 3. FULLSCREEN IMAGE VIEWER MODAL (WHITE BACKGROUND + INGREDIENTS + SHARE)
  // -------------------------------------------------------------------------
  const viewerModal = document.getElementById("imageViewerModal");
  const viewerImage = document.getElementById("viewerImage");
  const viewerTitle = document.getElementById("viewerTitle");
  const viewerPrice = document.getElementById("viewerPrice");
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
    price: "",
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
    if (currentItemData.price) {
      text += `\n💰 Price: ${currentItemData.price}`;
    }
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

  function openImageViewer(fullSrc, title, price = "", ingredients = "") {
    if (!viewerModal) return;

    // Resolve ingredients and price from dataset or lookup dictionary
    const fallback = cakeData[title] || {};
    const finalPrice = price || fallback.price || "";
    const finalIngredients = ingredients || fallback.ingredients || "";

    currentItemData = {
      title,
      price: finalPrice,
      ingredients: finalIngredients,
      fullSrc,
      url: getShareUrl(title)
    };

    viewerImage.src = fullSrc;
    viewerImage.alt = title;
    viewerTitle.textContent = title;

    // Price badge
    if (viewerPrice) {
      if (finalPrice) {
        viewerPrice.textContent = finalPrice;
        viewerPrice.style.display = "inline-flex";
      } else {
        viewerPrice.style.display = "none";
      }
    }

    // Ingredients section (Shown in fullscreen mode for cakes)
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
        if (viewerCategoryTag) viewerCategoryTag.style.display = "inline-flex";
      }
    }

    // Reset Copy button label
    if (copyBtnLabel) copyBtnLabel.textContent = "Copy Link";
    if (shareCopyBtn) shareCopyBtn.classList.remove("copied");

    // Display modal with white background
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

      // On mobile devices supporting Web Share, open native share drawer (Instagram option)
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

      // Fallback: copy link and redirect to Instagram
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

  // Attach click listener to each item card across both pages
  const cards = document.querySelectorAll(".item-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (isSwiping || Math.abs(totalDragDist) > 10) return;
      const fullSrc = card.getAttribute("data-full");
      const name = card.getAttribute("data-name") || card.querySelector(".item-name")?.textContent;
      const price = card.getAttribute("data-price") || "";
      const ingredients = card.getAttribute("data-ingredients") || "";
      if (fullSrc) {
        openImageViewer(fullSrc, name, price, ingredients);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. PAGE NAVIGATION & TABS
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
  // 5. TOUCH SWIPE GESTURES (Mobile phone screen swipe)
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
    } else if (e.key === "ArrowRight" && currentPage === 0) {
      goToPage(1);
    } else if (e.key === "ArrowLeft" && currentPage === 1) {
      goToPage(0);
    }
  });

  // -------------------------------------------------------------------------
  // 7. DEEP LINKING: AUTO-OPEN SHARED CAKE/ITEM FROM URL (?item=...)
  // -------------------------------------------------------------------------
  const urlParams = new URLSearchParams(window.location.search);
  const sharedItemName = urlParams.get("item");
  if (sharedItemName) {
    // If arriving via shared link, dismiss welcome popup immediately
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
      }
      const fullSrc = targetCard.getAttribute("data-full");
      const name = targetCard.getAttribute("data-name") || targetCard.querySelector(".item-name")?.textContent;
      const price = targetCard.getAttribute("data-price") || "";
      const ingredients = targetCard.getAttribute("data-ingredients") || "";
      setTimeout(() => {
        openImageViewer(fullSrc, name, price, ingredients);
      }, 350);
    }
  }
});
