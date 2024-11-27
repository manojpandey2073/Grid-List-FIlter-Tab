// Select tabs and content containers
const tabsPane = document.querySelectorAll(".grid-filter-btn-ul > .form-radio");
const tabContents = document.querySelectorAll(".grid-content-container"); 

// Function to play video on hover on grid items in the active tab
function applyHoverEffects(container) {
    const gridCards = container.querySelectorAll('.grid-outer-body');
    const gridImages = container.getElementsByClassName('grid-body-img');
    const gridVideos = container.getElementsByClassName('grid-body-video');

    gridCards.forEach((card, index) => {
        card.addEventListener('mouseover', function () {
            if (gridImages[index] && gridVideos[index]) {
                gridVideos[index].play();
            }
        });

        card.addEventListener('mouseleave', function () {
            if (gridImages[index] && gridVideos[index]) {
                gridVideos[index].pause();
                gridVideos[index].currentTime = 0;
            }
        });
    });
}

// Apply hover effects on all grid content containers
tabContents.forEach(container => {
    applyHoverEffects(container);
});


// Handle tab switching to ensure only the active tab's content has the hover effect applied
    tabsPane.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Remove 'active' class from all tab contents and tabs
            tabContents.forEach(content => content.classList.remove("active"));
            tabsPane.forEach(tab => tab.classList.remove("active"));

            // Set the selected tab and content as active
            tabContents[index].classList.add("active");
            tab.classList.add("active");

            // Apply hover effects to the elements in the currently active tab
            applyHoverEffects(tabContents[index]);
        });
    });

    // Initialize hover effects for the first active tab on load
    document.addEventListener('DOMContentLoaded', () => {
        tabContents[0].classList.add("active"); // Set the first tab content as active initially
        tabsPane[0].classList.add("active");     // Set the first tab button as active initially
        applyHoverEffects(tabContents[0]);       // Apply hover effects for the active tab
    });

    


    document.addEventListener('DOMContentLoaded', () => {
        // First Script: Initialize Tabs and Clone Cards
        const tabContents = document.querySelectorAll('.grid-content-container');
        const tabsPane = document.querySelectorAll('.grid-filter-btn-ul > .form-radio');
        const viewAllContainer = document.querySelector('.grid-content-container[data-tab="view-all"]');
        const tabContainers = document.querySelectorAll('.grid-content-container:not([data-tab="view-all"])');
        
        tabContents[0].classList.add("active"); // Set the first tab content as active initially
        tabsPane[0].classList.add("active");     // Set the first tab button as active initially
        applyHoverEffects(tabContents[0]);       // Apply hover effects for the active tab
    
        // Collect all cards from other tabs for the "View All" tab
        tabContainers.forEach(container => {
            const cards = container.querySelectorAll('.grid-outer-body');
            cards.forEach(card => {
                const clonedCard = card.cloneNode(true); // Clone each card
                viewAllContainer.querySelector('.grid-content-outer').appendChild(clonedCard);
            });
        });
    
        // Initialize the first tab (View All) as active by default
        viewAllContainer.classList.add('active');
        tabsPane[0].classList.add('active');
        applyHoverEffects(viewAllContainer);
        
    
        // Second Script: Custom Cursor Animation
// Select all grid items
const gridCards1 = document.querySelectorAll('.grid-outer-body');

gridCards1.forEach((el) => {
    // Find the custom cursor within the current grid item
    const customCursor = el.querySelector('.custom-cursor');

    // Check if the custom cursor exists within this grid item
    if (customCursor) {
        // Add mousemove event listener to the grid item
        el.addEventListener("mousemove", (e) => {
            // Get the bounding rectangle of the current grid item
            const rect = el.getBoundingClientRect();

            // Calculate the mouse position relative to the current grid item
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            // Update the position of the custom cursor within this grid item
            customCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
    }
});


    });

// Script for toggle
const toggle1 = document.querySelector('.toggle');

toggle1.addEventListener('click', function() {
    // Toggle the 'active' class on click
    toggle1.classList.toggle('active');

    // Check for 'active' class to apply styles and control custom cursor display
    checkActive();
    appendStyle();
});

function checkActive() {
    const customCursors = document.querySelectorAll('.custom-cursor');
    customCursors.forEach((element) => {
        // Hide custom cursor if 'active' is present, otherwise show it
        element.style.display = toggle1.classList.contains('active') ? 'none' : 'block';
    });
}

function appendStyle() {
    // Only add internal CSS if 'active' class is present
    if (toggle1.classList.contains('active')) {
        // Check if style already exists to avoid appending multiple times
        if (!document.getElementById('dynamic-styles')) {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.id = 'dynamic-styles';  // Assign an ID to identify this style

            // Define your CSS rules
            style.innerHTML = `
                .grid-picture-video {
                    display: none;
                }
                .grid-outer-body{
                    max-width:100%;
                }
                .grid-content-outer {
                    grid-template-columns: 1fr;
                    width: 100%;
                }
                .grid-text {
                    display: flex;
                    flex-direction: row-reverse;
                    align-items: center;
                    gap: 20px;
                    justify-content: space-between;
                    border-top: 1px solid #848484;
                    border-bottom: 1px solid #848484;
                    padding: 35px 20px;
                }
                .grid-body-subtitle {
                    flex-basis: 70%;
                    padding-top: 0;
                }
                .grid-body-heading {
                    padding-top: 0;
                    flex-basis: 30%;
                }
                .grid-body-subtitle span:first-child {
                    flex-basis: 70%;
                }
                .grid-body-subtitle span:last-child {
                    flex-basis: 30%;
                }
                
            `;

            // Append the <style> element to the <head> section
            document.head.appendChild(style);
            console.log('Internal CSS added');
        }
    } else {
        // Remove the style if 'active' class is not present
        const existingStyle = document.getElementById('dynamic-styles');
        if (existingStyle) {
            existingStyle.remove();
            console.log('Internal CSS removed');
        }
    }
}





    
    
 

    
