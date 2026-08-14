(function ($) {
  "use strict";

  var path = function (folder, name) {
    return ["website pics", folder, name].map(encodeURIComponent).join("/");
  };
  var numbered = function (folder, prefix, numbers, extension) {
    return numbers.map(function (number) { return path(folder, prefix + " (" + number + ")." + extension); });
  };
  var whatsapp = function (folder, date, times) {
    var images = [];
    times.forEach(function (time) {
      ["(1)", "(2)", "(3)", "(4)", ""].forEach(function (suffix) {
        images.push(path(folder, "WhatsApp Image " + date + " at " + time + (suffix ? " " + suffix : "") + ".jpeg"));
      });
    });
    return images;
  };

  var galleries = {
    bedroom: numbered("BEDROOM 1", "2", [1, 3, 5, 7, 8, 9], "png"),
    cancer: numbered("CANCER INSTITUTE", "1", [1, 2, 3, 4, 6, 7, 8, 9], "png"),
    glovo: numbered("GLOVO", "GLOVO", [1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], "png"),
    indigo: numbered("INDIGO", "INDIGO", [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 16], "png").concat([path("INDIGO", "office.png")]),
    kitchens: numbered("Kitchens & wadrobes", "KIGO", [2, 3, 4, 5, 7, 13], "png").concat(whatsapp("Kitchens & wadrobes", "2026-08-05", ["11.52.57"])),
    kigo: [path("KIGO LANDSCAPE", "3d.jpeg"), path("KIGO LANDSCAPE", "ls1.jpeg")].concat(whatsapp("KIGO LANDSCAPE", "2026-07-11", ["15.48.25", "15.48.26"])),
    blueberries: whatsapp("BLUE BERRIES HOTEL", "2026-07-11", ["15.48.18", "15.48.19", "15.48.20", "15.48.21"]),
    eye: numbered("EYE SANTE", ".", [1, 2, 3, 4, 5], "png").concat(whatsapp("EYE SANTE", "2026-06-29", ["13.28.06", "13.28.07", "13.28.08"]), [path("EYE SANTE", "WhatsApp Image 2026-06-29 at 13.28.07 (5).jpeg")]),
    namulanda: numbered("NAMULANDA KITCHEN", "NAMULANDA", [1, 2, 3, 4, 5], "png"),
    tali: [path("TALI CAFE", "poertifolio.jpeg")].concat(whatsapp("TALI CAFE", "2026-07-11", ["15.48.21", "15.48.22", "15.48.23", "15.48.24"])),
    others: [path("others", "miko.jpeg"), path("others", "cab.jpeg"), path("others", "tvu.jpeg")].concat(whatsapp("others", "2026-07-11", ["13.29.44", "13.36.26", "13.36.27", "13.36.28", "13.36.29", "15.48.24"])),
    renders: [path("renders", "bg_1.jpeg")].concat(whatsapp("renders", "2026-06-29", ["12.34.29", "12.34.30"])),
    sightsavers: whatsapp("sight savers", "2026-06-29", ["12.57.34"]).concat([5, 6, 7, 8, 9].map(function (number) { return path("sight savers", "WhatsApp Image 2026-06-29 at 12.57.34 (" + number + ").jpeg"); }))
  };

  $(".project-gallery-trigger").on("click", function (event) {
    event.preventDefault();
    var images = galleries[$(this).data("gallery")] || [$(this).attr("href")];
    var validImages = [], remaining = images.length;
    var projectName = $(this).closest(".project").find("h3").first().text() || "Project gallery";
    images.forEach(function (src) {
      var image = new Image();
      image.onload = function () { validImages.push(src); if (!--remaining) openGallery(); };
      image.onerror = function () { if (!--remaining) openGallery(); };
      image.src = src;
    });
    function openGallery() {
      if (!validImages.length) return;
      var $dialog = $("<div class='project-collage-dialog'></div>");
      $dialog.append("<div class='project-collage-header'><h2></h2><p>Explore the complete project collection.</p></div>");
      $dialog.find("h2").text(projectName);
      var $grid = $("<div class='project-collage-grid'></div>");
      validImages.forEach(function (src, index) {
        var $link = $("<a class='project-collage-image' target='_blank' rel='noopener'></a>").attr("href", src);
        $link.append($("<img loading='lazy' alt=''>").attr({ src: src, alt: projectName + " image " + (index + 1) }));
        $grid.append($link);
      });
      $dialog.append($grid);
      $.magnificPopup.open({
        items: { src: $dialog, type: "inline" },
        closeBtnInside: true,
        callbacks: {
          close: function () { $dialog.remove(); }
        }
      });
    }
  });

  $(".project").on("click", function (event) {
    if ($(event.target).closest("a, button").length) return;
    var $trigger = $(this).find(".project-gallery-trigger").first();
    if ($trigger.length) $trigger.trigger("click");
  });

  $(".portfolio-filter").on("click", function () {
    var filter = $(this).data("filter");
    $(".portfolio-filter").removeClass("active");
    $(this).addClass("active");
    $(".portfolio-item").each(function () {
      $(this).toggle(filter === "all" || $(this).data("category").split(" ").indexOf(filter) !== -1);
    });
  });
})(jQuery);
