document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("main-header");
    const themeTriggers = document.querySelectorAll("[data-theme]");

    // Define colors matching the screenshots
    const themes = {
        blue: "#000080", // Dark Blue for Design
        green: "#006400", // Dark Green for Development
        red: "#8b0000",   // Dark Red for Art
        default: "#111111" // Original Dark Grey
    };

    themeTriggers.forEach(trigger => {
        // Change header color on hover
        trigger.addEventListener("mouseenter", (e) => {
            const theme = e.target.getAttribute("data-theme");
            header.style.backgroundColor = themes[theme];
        });

        // Revert to default when mouse leaves the dropdown area
        // We attach this to the parent .dropdown so the color stays while navigating the sub-menu
        trigger.closest('.dropdown').addEventListener("mouseleave", () => {
            header.style.backgroundColor = themes.default;
        });
    });
});