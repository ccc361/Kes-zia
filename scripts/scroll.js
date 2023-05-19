// JavaScript-Code zum Scrollen zu den jeweiligen Abschnitten
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({behavior: "smooth"});
    }
}