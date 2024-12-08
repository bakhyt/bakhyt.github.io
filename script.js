window.onload = function() {
    // Check if the banner has already been closed using localStorage
    if (localStorage.getItem("welcomeBannerClosed") === "true") {
        return;  // If it's already closed, don't show the banner
    }

    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#006400';  // Dark green background color
    banner.style.color = 'white';
    banner.style.padding = '15px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '1000';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    banner.textContent = 'Welcome to my GitHub Page!';

    const closeButton = document.createElement('span');
    closeButton.textContent = ' ✖ ';
    closeButton.style.cursor = 'pointer';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '50%';
    closeButton.style.right = '20px';
    closeButton.style.transform = 'translateY(-50%)';
    closeButton.style.fontWeight = 'bold';
    closeButton.style.fontSize = '1.5em';
    closeButton.style.color = 'white';
    closeButton.style.padding = '0 10px';
    closeButton.style.borderRadius = '50%';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.transition = 'background-color 0.3s ease';

    closeButton.onmouseover = function() {
        closeButton.style.backgroundColor = '#ff4d4d'; // Change color on hover
    };

    closeButton.onmouseout = function() {
        closeButton.style.backgroundColor = '#333'; // Revert color
    };

    // Close button action
    closeButton.onclick = function() {
        banner.style.display = 'none';
        localStorage.setItem("welcomeBannerClosed", "true");  // Save that the banner has been closed
    };

    banner.appendChild(closeButton);
    document.body.appendChild(banner);
};
