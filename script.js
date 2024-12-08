window.onload = function() {
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#006400';
    banner.style.color = 'white';
    banner.style.padding = '15px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '1000';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    banner.textContent = 'Welcome to my GitHub Page!';

    const closeButton = document.createElement('span');
    closeButton.textContent = ' ✖ ';
    closeButton.classList.add('close-button');  // Add the CSS class

    // Close button action
    closeButton.onclick = function() {
        banner.style.display = 'none';
    };

    banner.appendChild(closeButton);
    document.body.appendChild(banner);
};
