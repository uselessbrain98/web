document.addEventListener("DOMContentLoaded", function() {
    let scrollingText = document.getElementById('moving-text');
    let scrollDirection = 1; // 1 represents scrolling to the right

    window.addEventListener('scroll', () => {
        if (scrollingText) {
            const scrollDistance = window.scrollY;
            
            // Update scrollDirection based on scroll distance
            if (scrollDistance > 0 && scrollDirection === 1) {
                // Change direction to the left when scrolling down
                scrollDirection = -1;
                scrollingText.style.animationDirection = "reverse";
            } else if (scrollDistance === 0 && scrollDirection === -1) {
                // Change direction to the right when scrolling up and reaching the top
                scrollDirection = 1;
                scrollingText.style.animationDirection = "normal";
            }
        }
    });
});