let activeButton = null; // Track the active button

// Display the default tab
showTab("tab1", document.querySelector(".tab-button"));

function showTab(tabId, button) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabToShow = document.getElementById(tabId);
  const buttons = document.querySelectorAll(".tab-button");

  // Hide all tabs and reset button styles
  tabs.forEach((tab) => {
    tab.style.display = "none";
  });

  buttons.forEach((btn) => {
    btn.style.backgroundColor = "inherit";
    btn.style.color = "#c4c7c4"; // Reset text color
  });

  // Display the selected tab
  tabToShow.style.display = "block";

  // Highlight the clicked button
  button.style.backgroundColor = "lightgray";
  button.style.color = "#2e354e";

  // Reset the previously active button
  if (activeButton && activeButton !== button) {
    activeButton.style.backgroundColor = "inherit";
    activeButton.style.color = "#c4c7c4"; // Reset text color
  }

  activeButton = button;
}

const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
const smallImages = document.querySelectorAll(".carousel-small img");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showImage(index) {
  // Update the large images
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Update the small images
  smallImages.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active-small");
    } else {
      img.classList.remove("active-small");
    }
  });
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
  updateDots(currentIndex);
}

setInterval(nextImage, 5000); // Change image every 5 seconds
