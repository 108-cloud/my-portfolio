import AOS from 'aos';

export function initAOS() {
    AOS.init({
        once: true, // Animations only trigger once
        offset: 50, // Trigger point
        duration: 1000, // Global animation duration in ms
    });
}
