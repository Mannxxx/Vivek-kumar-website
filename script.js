document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".js-cite-modal").addEventListener("click", function () {
        document.getElementById("citePopup").style.display = "block";
    });
});

function closePopup() {
    document.getElementById("citePopup").style.display = "none";
}

function downloadCitation() {
    // Add functionality for downloading citation
    alert("Downloading citation...");
}

function copyToClipboard() {
    // Add functionality for copying to clipboard
    alert("Copying to clipboard...");
}

document.addEventListener("DOMContentLoaded", function() {
    const linkedinLinks = document.querySelectorAll(".linkedin-link");
    
    linkedinLinks.forEach(link => {
        fetchLinkedInProfile(link);
    });
});

function fetchLinkedInProfile(link) {
    const url = link.href;
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            const html = data.contents;
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const positionElement = doc.querySelector(".pv-text-details__left-panel .text-body-medium");
            const currentPosition = positionElement ? positionElement.textContent.trim() : "Not Available";
            
            link.closest("tr").querySelector(".current-position").textContent = currentPosition;
        })
        .catch(error => {
            console.error("Error fetching LinkedIn profile:", error);
            link.closest("tr").querySelector(".current-position").textContent = "Error fetching position";
        });
}


const images = document.querySelectorAll('.slideshow-container img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

document.addEventListener('DOMContentLoaded', function () {
    // Update the current year in the footer
    document.getElementById("currentYear").innerText = new Date().getFullYear();
  
    // Update the last updated date (you can customize this part based on your needs)
    document.getElementById("lastUpdated").innerText = "May, 2024"; // Update with your actual last updated date

    // Add back to top functionality
    window.onscroll = function () {
    scrollFunction();
};
});

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}