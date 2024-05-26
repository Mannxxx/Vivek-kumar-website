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
    const images = document.querySelectorAll('.slideshow-container img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('previous');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');

        setTimeout(() => {
            images.forEach(img => img.classList.remove('previous'));
        }, 1000); // This timeout should match the transition duration
    }

    setInterval(showNextImage, 3000);
});

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
