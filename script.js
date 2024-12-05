/* Style for the header photo */
.header-photo {
    position: absolute; /* Positions the image absolutely within the header */
    top: 10px;  /* Adjust the space from the top */
    left: 10px; /* Adjust the space from the left */
    width: 100px; /* Set the size of the image */
    height: 100px; /* Set the height of the image */
    border-radius: 50%; /* Makes the image round (optional) */
    object-fit: cover; /* Ensures the image fits within the specified width and height */
}

header {
    position: relative; /* Makes the header a positioning context for the image */
    text-align: center;
    padding: 50px 0;
}

// Simple JavaScript to show a welcome alert
window.onload = function() {
    alert('Welcome to my GitHub Page!');
}
