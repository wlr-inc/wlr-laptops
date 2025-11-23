/* 
========================================
MODAL FUNCTIONALITY
========================================
ProductPage Template Modal System
- Sign Up Modal open/close functions
- Click outside to close functionality
- Escape key to close functionality
======================================== 
*/

// Sign Up Modal Functions
function openSignUpModal() {
  document.getElementById("signUpModal").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSignUpModal() {
  document.getElementById("signUpModal").classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Initialize modal event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Close modal when clicking outside
  const modal = document.getElementById("signUpModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeSignUpModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const modal = document.getElementById("signUpModal");
      if (modal && !modal.classList.contains("hidden")) {
        closeSignUpModal();
      }
    }
  });
});
