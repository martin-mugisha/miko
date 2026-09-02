(function ($) {
  "use strict";

  var basePath = "MIKO/miko";
  var img = function (folder, filename) {
    return [basePath, folder, filename].map(encodeURIComponent).join("/");
  };

  var galleries = {
    bedroom: [
      img("BEDROOM_1", "Bedroom_view.webp"),
      img("BEDROOM_1", "Bed.webp"),
      img("BEDROOM_1", "Bed_view.webp"),
      img("BEDROOM_1", "Bed_view_with_striplight.webp"),
      img("BEDROOM_1", "Bed_view_without_striplight.webp"),
      img("BEDROOM_1", "Bedroom_side_view.webp"),
      img("BEDROOM_1", "Wadrobe_view.webp")
    ],
    cancer: [
      img("CANCER_INSTITUTE", "A_view_of_waiting_area.webp"),
      img("CANCER_INSTITUTE", "Aview_of_the_furniture.webp"),
      img("CANCER_INSTITUTE", "Aview_of_the_waiting_area.webp"),
      img("CANCER_INSTITUTE", "Decor.webp"),
      img("CANCER_INSTITUTE", "Furniture_view.webp"),
      img("CANCER_INSTITUTE", "Hospital_hall_way.webp"),
      img("CANCER_INSTITUTE", "Interior_design.webp"),
      img("CANCER_INSTITUTE", "Other_waiting_area.webp"),
      img("CANCER_INSTITUTE", "Reception.webp"),
      img("CANCER_INSTITUTE", "View_of_a_Waiting_station.webp"),
      img("CANCER_INSTITUTE", "Waiting_area.webp"),
      img("CANCER_INSTITUTE", "Waiting_area1.webp")
    ],
    glovo: [
      img("GLOVO", "GLOVO_(9).webp"),
      img("GLOVO", "Interior_view_1.webp"),
      img("GLOVO", "Offices_view.webp"),
      img("GLOVO", "Offices_view_2.webp"),
      img("GLOVO", "Work_space_1.webp"),
      img("GLOVO", "Work_space_2.webp"),
      img("GLOVO", "Interior_view_2.webp"),
      img("GLOVO", "Interior_view_3.webp"),
      img("GLOVO", "Room_1.webp"),
      img("GLOVO", "Room_2.webp"),
      img("GLOVO", "Sitting_area.webp"),
      img("GLOVO", "Waiting_area.webp"),
      img("GLOVO", "Dining_space.webp"),
      img("GLOVO", "Kitchen_view.webp"),
      img("GLOVO", "Inner_view.webp"),
      img("GLOVO", "Interior_design.webp"),
      img("GLOVO", "Furniture.webp"),
      img("GLOVO", "Bag_storage_space_1.webp"),
      img("GLOVO", "bag_storage_space_2.webp")
    ],
    indigo: [
      img("INDIGO", "Interior_view.webp"),
      img("INDIGO", "Dining_&_Kitchen_view.webp"),
      img("INDIGO", "Dining_view.webp"),
      img("INDIGO", "Interior.webp"),
      img("INDIGO", "Kitchen_side_1.webp"),
      img("INDIGO", "Meeting_room_view_1.webp"),
      img("INDIGO", "Meeting_room_view_2.webp"),
      img("INDIGO", "Reception.webp"),
      img("INDIGO", "View_of_work_space_in_night.webp"),
      img("INDIGO", "View_of_workspace_in_day.webp"),
      img("INDIGO", "meeting_room_3.webp")
    ],
    kitchens: [
      img("KITCHEN_&_WADROBES", "Kitchen_view_1.webp"),
      img("KITCHEN_&_WADROBES", "Kitchen_view_2.webp"),
      img("KITCHEN_&_WADROBES", "Kitchen_view_3.webp"),
      img("KITCHEN_&_WADROBES", "Wadrobe_1.webp"),
      img("KITCHEN_&_WADROBES", "Wadrobe_2.webp"),
      img("KITCHEN_&_WADROBES", "Wadrobe_3.webp"),
      img("KITCHEN_&_WADROBES", "Wadrobe_4.webp")
    ],
    kigo: [
      img("KIGO_LANDSCAPE", "Landscape_view.webp"),
      img("KIGO_LANDSCAPE", "Front_pool_view.webp"),
      img("KIGO_LANDSCAPE", "Back_pool_view.webp"),
      img("KIGO_LANDSCAPE", "Compound_view.webp"),
      img("KIGO_LANDSCAPE", "Flower_garden.webp"),
      img("KIGO_LANDSCAPE", "Grid_view.webp"),
      img("KIGO_LANDSCAPE", "Night_view.webp"),
      img("KIGO_LANDSCAPE", "Parking_view.webp"),
      img("KIGO_LANDSCAPE", "Side_view.webp")
    ],
    blueberries: [
      img("BLUE_BERRIES_HOTEL", "Logo.webp"),
      img("BLUE_BERRIES_HOTEL", "Dining_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Area_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Back_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Bedroom_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Class_hold_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Counter_front_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Counter_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Dinner.webp"),
      img("BLUE_BERRIES_HOTEL", "Dinner_2.webp"),
      img("BLUE_BERRIES_HOTEL", "Front_counter_view_with_lights.webp"),
      img("BLUE_BERRIES_HOTEL", "Hall_way.webp"),
      img("BLUE_BERRIES_HOTEL", "Interior_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Outside_view.webp"),
      img("BLUE_BERRIES_HOTEL", "TV_Unit_view.webp"),
      img("BLUE_BERRIES_HOTEL", "Wall_unit.webp")
    ],
    eye: [
      img("EYE_SANTE", "Company_logo_2.webp"),
      img("EYE_SANTE", "Interior_setup_1.webp"),
      img("EYE_SANTE", "Area_view_1.webp"),
      img("EYE_SANTE", "Area_view_2.webp"),
      img("EYE_SANTE", "Area_view_3.webp"),
      img("EYE_SANTE", "Company_Logo.webp"),
      img("EYE_SANTE", "Hall_way.webp"),
      img("EYE_SANTE", "Side_view_of_sitting_area.webp"),
      img("EYE_SANTE", "Sitting_area_1.webp"),
      img("EYE_SANTE", "Sitting_area_2.webp"),
      img("EYE_SANTE", "Waiting_area_1.webp"),
      img("EYE_SANTE", "Waiting_area_2.webp")
    ],
    namulanda: [
      img("NAMULANDA", "Kitchen_view.webp"),
      img("NAMULANDA", "Dining_view.webp"),
      img("NAMULANDA", "Kitchen_view_with_lights.webp"),
      img("NAMULANDA", "Kitchen_view_without_lights.webp")
    ],
    tali: [
      img("TALI_CAFE", "Counter.webp"),
      img("TALI_CAFE", "Dining_area_1.webp"),
      img("TALI_CAFE", "Dining_area_2.webp"),
      img("TALI_CAFE", "Dining_area_3.webp"),
      img("TALI_CAFE", "Dining_area_4.webp"),
      img("TALI_CAFE", "Dining_area_5.webp"),
      img("TALI_CAFE", "Dining_area_6.webp"),
      img("TALI_CAFE", "Handwashing_area_1.webp"),
      img("TALI_CAFE", "Handwashing_area_2.webp"),
      img("TALI_CAFE", "Inside_view.webp"),
      img("TALI_CAFE", "Outside_view.webp"),
      img("TALI_CAFE", "Sitting_area.webp"),
      img("TALI_CAFE", "View_of_the_dining_area.webp")
    ],
    sightsavers: [
      img("SITE_SAVERS", "Company_name_logo.webp"),
      img("SITE_SAVERS", "Interior_view.webp"),
      img("SITE_SAVERS", "Consultation_area.webp"),
      img("SITE_SAVERS", "Decor.webp"),
      img("SITE_SAVERS", "Inside_view.webp"),
      img("SITE_SAVERS", "Other_interior_view.webp"),
      img("SITE_SAVERS", "Waiting_area_1.webp"),
      img("SITE_SAVERS", "Waiting_area_2.webp")
    ],
    hospital: [
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Reception_display.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "A_view_of_sitting_area_&_Counter.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Sitting_area.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Private_ward.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Overview_of_private_ward.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Patient's_ward.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Patients'_beds.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Matenaty_ward.webp"),
      img("ST_JOSEPH_HOSPITAL_-_WAKISO", "Kitchen_area.webp")
    ],
    residential_more: [
      img("MORE_RESIDENTIAL_SPACES", "Dining_space.webp"),
      img("MORE_RESIDENTIAL_SPACES", "Dining_view.webp"),
      img("MORE_RESIDENTIAL_SPACES", "Kitchen_space.webp"),
      img("MORE_RESIDENTIAL_SPACES", "Kitchen_view.webp"),
      img("MORE_RESIDENTIAL_SPACES", "TV_Unit.webp"),
      img("MORE_RESIDENTIAL_SPACES", "TV_Unit_side_view.webp"),
      img("MORE_RESIDENTIAL_SPACES", "TV_Unit_view.webp"),
      img("RESIDENTIALS", "Cabinet_view.webp"),
      img("RESIDENTIALS", "interior_view.webp")
    ],
    renders: [
      img("RENDERS", "Whole_space_view.webp"),
      img("RENDERS", "Dining_view.webp"),
      img("RENDERS", "Kitchen_full_view.webp"),
      img("RENDERS", "Kitchen_side_view.webp")
    ],
    others: [
      img("MORE_RESIDENTIAL_SPACES", "Dining_space.webp"),
      img("MORE_RESIDENTIAL_SPACES", "TV_Unit_view.webp"),
      img("RESIDENTIALS", "Cabinet_view.webp"),
      img("RESIDENTIALS", "interior_view.webp")
    ]
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
