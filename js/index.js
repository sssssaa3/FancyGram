$("document").ready(() => {
    Fancybox.bind(
        '[data-fancybox="gallery"], [data-fancybox="gallery-b"], [data-fancybox="gallery-c"], [data-fancybox="gallery-d"], [data-fancybox="gallery-e"], [data-fancybox="gallery-f"], [data-fancybox="gallery-g"], [data-fancybox="gallery-h"], [data-fancybox="gallery-i"], [data-fancybox="gallery-j"]', {
        Thumbs: {
            type: "modern"
        }
    });
});

$(window).on("load", () => {
    setTimeout(() => {
        $("#loadingModal").fadeOut("slow")
    }, 500);

})

