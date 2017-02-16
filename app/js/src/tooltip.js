 (function() {
    $( "#show-option" ).tooltip({
      show: {
        effect: "slideDown",
        delay: 250
      }
    });
    $( "#hide-option" ).tooltip({
      hide: {
        effect: "explode",
        delay: 250
      }
    });
    $( "#open-event" ).tooltip({
      show: null,
      position: {
        my: "center top-200",
        at: "center bottom"
      },
      open: function( event, ui ) {
        ui.tooltip.animate({ top: ui.tooltip.position().top + 50 }, "fast" );
      }
    });
  });
