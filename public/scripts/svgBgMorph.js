import("https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js").then(module => {
    const duration = 5000;
    document.querySelectorAll('.Layer[id*="A"]').forEach((x, index) => {
        const animation = KUTE.fromTo(
            `.Layer#A${index}`,
            { path: `.Layer#A${index}` },
            { path: `.Layer#B${index}` },
            {
                repeat: 999,
                duration,
                yoyo: true
            });
        animation.start();
    });
});