window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

let nav = document.querySelector(".navigation-container");

function sendMail() {
  let body = document.getElementById("message").value;
  let subjectLine = document.getElementById("subject").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  window.location.href = "mailto:atelierlore25@gmail.com?subject=" + subjectLine + "&body=" + "Naam: " + name + "%0D%0A" + "Telefoonnummer: " + phone + "%0D%0A" + body;
}

// Store image paths for each service
const serviceImages = {
  "services-images-1": ["Images/item-4.jpg", "Images/item-3.jpg", "Images/item-5.jpg"],
  "services-images-2": ["Images/herinneringskoffer.jpg", "Images/koffer.jpg", "Images/koffer-2.jpg", "Images/koffer-3.jpg"],
  "services-images-3": ["Images/product-3.jpg", "Images/product-3-1.jpg", "Images/bloempot.jpg"],
  "services-images-4": ["Images/line-art-1.jpg", "Images/line-art-2.jpg", "Images/line-art-3.jpg"],
  "services-images-5": ["Images/cadeaubox-1.jpg", "Images/cadeaubox-2.jpg", "Images/cadeaubox-3.jpg"],
};

const modal = document.getElementById("modal");
const carouselContainer = document.getElementById("carousel-services");
const closeBtn = document.querySelector(".close-btn");
let currentPosition = 0;

// Function to reset carousel position
function resetCarousel() {
  // Reset the scroll position to the beginning
  carouselContainer.scrollLeft = 0;
  currentPosition = 0;
}

// Add event listeners to all service containers
document.querySelectorAll(".service-images-container > div").forEach((service) => {
  service.addEventListener("click", function () {
    // Get the class name of the clicked service
    const serviceClass = this.className;

    // Clear previous carousel content
    carouselContainer.innerHTML = "";

    // Get the images for this service
    const images = serviceImages[serviceClass];

    if (images && images.length > 0) {
      // Create image elements and add them to the carousel
      images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Service Image";
        carouselContainer.appendChild(img);
      });

      // Reset carousel position before showing
      resetCarousel();

      // Show the modal
      modal.style.display = "block";
    } else {
      console.warn(`No images found for service class: ${serviceClass}`);
    }
  });
});

// Close the modal when clicking the close button
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Add keyboard navigation to close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});

// Function to scroll the carousel
function scrollCarousel(direction) {
  const images = carouselContainer.querySelectorAll("img");
  if (images.length === 0) return;

  // Calculate new position
  currentPosition = Math.max(0, Math.min(currentPosition + direction, images.length - 1));

  // Get the target image and scroll to it
  const targetImage = images[currentPosition];
  if (targetImage) {
    targetImage.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }
}

// Optional: Add navigation buttons for carousel
function addCarouselControls() {
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "&#10094;";
  prevBtn.className = "carousel-control prev";
  prevBtn.onclick = function () {
    scrollCarousel(-1);
  };

  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = "&#10095;";
  nextBtn.className = "carousel-control next";
  nextBtn.onclick = function () {
    scrollCarousel(1);
  };

  const modalContent = document.querySelector(".modal-content");
  modalContent.appendChild(prevBtn);
  modalContent.appendChild(nextBtn);
}

// Call this function to add navigation controls
addCarouselControls();
