function Animations(selector) {
    
    const scrollBlock = document.querySelectorAll(selector);
    
    function animateBlocks() {
        scrollBlock.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (blockTop < windowHeight) {
                block.classList.add('animate');
            }
        });
    }

    animateBlocks();

    window.addEventListener('scroll', animateBlocks);
}

export default Animations;