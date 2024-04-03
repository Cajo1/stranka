// accordion.js
function toggleAccordion(sectionId) {
    const content = document.getElementById(sectionId + 'Content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}