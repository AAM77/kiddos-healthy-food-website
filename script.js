// Animation Configuration
// Modify these values to adjust animation behavior
const ANIMATION_CONFIG = {
    // Duration settings (in milliseconds)
    hopDuration: 500,    // Duration of a single hop
    spinDuration: 1000,  // Duration of a single full rotation

    // Repetition settings
    hopRepetitions: 10,   // Number of times the hop animation repeats
    spinRotations: 2,    // Number of full 360° rotations for spinning animation

    // Total duration calculations (don't modify these)
    get totalHopDuration() { return this.hopDuration * this.hopRepetitions; },
    get totalSpinDuration() { return this.spinDuration * this.spinRotations; }
};

// Individual Animation Controls
// Set to: 'hop', 'spin', or 'none' to control each image's animation
const INDIVIDUAL_ANIMATIONS = {
    // Fruits Section (alternating hop and spin)
    'orange': 'hop',          // 1st fruit - hop
    'watermelon': 'spin',     // 2nd fruit - spin
    'strawberry': 'hop',      // 3rd fruit - hop
    'rainbow-fruit': 'spin',  // 4th fruit - spin
    'star-fruit': 'hop',      // 5th fruit - hop
    
    // Vegetables Section
    'carrot': 'hop',
    'broccoli': 'hop',
    'bell-pepper': 'spin',
    'rainbow-beans': 'spin',
    'cloud-mushrooms': 'hop'
};

// Individual Card Flip Controls
// Set to true/false to enable/disable flipping for specific cards
const CARD_FLIP_CONTROLS = {
    // Fruits Section
    'orange': true,
    'watermelon': true,
    'strawberry': true,
    'rainbow-fruit': true,
    'star-fruit': true,
    
    // Vegetables Section
    'carrot': true,
    'broccoli': true,
    'bell-pepper': true,
    'rainbow-beans': true,
    'cloud-mushrooms': true
};

// Animation state
let isHopping = true; // Global animation state - Toggle this to change all non-middle animations

/**
 * Initialize all card and image interactions
 * This function sets up event listeners for both card flipping and image animations
 */
function initializeInteractions() {
    setupCardFlipping();
    setupImageAnimations();
}

/**
 * Set up card flipping functionality
 * Only enables flipping for cards that have it enabled in CARD_FLIP_CONTROLS
 */
function setupCardFlipping() {
    document.querySelectorAll('.card').forEach(card => {
        // Get the card's identifier from its data attribute
        const cardId = card.closest('.card-wrapper').getAttribute('data-item-id');
        
        if (CARD_FLIP_CONTROLS[cardId]) {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        }
    });
}

/**
 * Set up image animations based on individual configuration
 */
function setupImageAnimations() {
    document.querySelectorAll('.card-wrapper').forEach(wrapper => {
        const image = wrapper.querySelector('.clickable-image');
        if (!image) return;

        const itemId = wrapper.getAttribute('data-item-id');
        const animationType = INDIVIDUAL_ANIMATIONS[itemId];
        
        if (animationType !== 'none') {
            image.addEventListener('click', function() {
                animateImage(this, animationType);
            });
        }
    });
}

/**
 * Check if a card wrapper is in the middle position of its section
 * @param {HTMLElement} wrapper - The card wrapper element to check
 * @returns {boolean} - True if the wrapper is in the middle position
 */
function isMiddlePosition(wrapper) {
    const section = wrapper.closest('section');
    if (!section) return false;

    const wrappersInSection = Array.from(section.querySelectorAll('.card-wrapper'));
    const middleIndex = Math.floor(wrappersInSection.length / 2);
    
    return wrappersInSection.indexOf(wrapper) === middleIndex;
}

/**
 * Animate an image based on its configured animation type
 * @param {HTMLElement} image - The image element to animate
 * @param {string} animationType - The type of animation ('hop' or 'spin')
 */
function animateImage(image, animationType) {
    // Remove any existing animation classes
    image.classList.remove('hopping', 'spinning');
    image.style.animation = '';
    
    // Apply the specified animation
    if (animationType === 'hop') {
        image.style.animation = `hop ${ANIMATION_CONFIG.hopDuration}ms ease ${ANIMATION_CONFIG.hopRepetitions}`;
        image.classList.add('hopping');
        setTimeout(() => {
            image.classList.remove('hopping');
            image.style.animation = '';
        }, ANIMATION_CONFIG.totalHopDuration);
    } else if (animationType === 'spin') {
        image.style.animation = `spin ${ANIMATION_CONFIG.spinDuration}ms linear ${ANIMATION_CONFIG.spinRotations}`;
        image.classList.add('spinning');
        setTimeout(() => {
            image.classList.remove('spinning');
            image.style.animation = '';
        }, ANIMATION_CONFIG.totalSpinDuration);
    }
}

// Initialize all interactions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeInteractions); 