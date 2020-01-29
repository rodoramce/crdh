/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
	
*/
var menuElement = document.getElementsByTagName("li")
var menuWrapper = document.getElementById("menuWrapper")
menuElement.onclick = function () {
menuWrapper.style.display = "none"
}

/* Init the mobile menu */
$("#hamburger").click(function(event) {
  event.preventDefault();
  $("#nav").addClass("showNav");
  $("#nav").addClass("animated");
  $("#nav").addClass("fadeIn");
  var winHeight = $(window).outerHeight();
  // Set the window height of the mobile menu when engaged!
  $("#menuWrapper").css("height", winHeight + "px");
});

$("#close").click(function(event) {
  event.preventDefault();
  $("#nav").removeClass("showNav");
  $("#nav").removeClass("animated");
  $("#nav").removeClass("fadeIn");
  // Set the window height of the mobile menu when not engaged!
  $("#menuWrapper").css("height", "auto");
});

/* On hover apply a class to the dropdown '.hov' */
$("#menuWrapper ul li").hover(function() {
  var el = $(this).children("ul");
  // check if it has a class of .hov
  if (el.hasClass("hov")) {
    $(el).removeClass("hov");
  } else {
    $(el).addClass("hov");
  }
});

var carousel = $("#carousel"),
  threshold = 150,
  slideWidth = 500,
  dragStart,
  dragEnd;

$("#next").click(function() {
  shiftSlide(-1);
});
$("#prev").click(function() {
  shiftSlide(1);
});

carousel.on("mousedown", function() {
  if (carousel.hasClass("transition")) return;
  dragStart = event.pageX;
  $(this).on("mousemove", function() {
    dragEnd = event.pageX;
    $(this).css("transform", "translateX(" + dragPos() + "px)");
  });
  $(document).on("mouseup", function() {
    if (dragPos() > threshold) {
      return shiftSlide(1);
    }
    if (dragPos() < -threshold) {
      return shiftSlide(-1);
    }
    shiftSlide(0);
  });
});

function dragPos() {
  return dragEnd - dragStart;
}

function shiftSlide(direction) {
  if (carousel.hasClass("transition")) return;
  dragEnd = dragStart;
  $(document).off("mouseup");
  carousel
    .off("mousemove")
    .addClass("transition")
    .css("transform", "translateX(" + direction * slideWidth + "px)");
  setTimeout(function() {
    if (direction === 1) {
      $(".slide:first").before($(".slide:last"));
    } else if (direction === -1) {
      $(".slide:last").after($(".slide:first"));
    }
    carousel.removeClass("transition");
    carousel.css("transform", "translateX(0px)");
  }, 700);
}

/*FUNCIONES PARA ANIMAR ENTRADA Y SALIDA DE LAS 4 SECCIONES: addSlideInUpX y removeSlideInUp[x]*/
function addSlideInUp() {
  subtitulo = document.getElementsByClassName("sub-art");
  subtitulo[0].classList.remove("fadeOutDown", "slower");
  subtitulo[0].style.display = "block";
  subtitulo[0].classList.add("fadeInUp", "slower");
}

function addSlideInUp2() {
  subtitulo2 = document.getElementsByClassName("sub-art2");
  subtitulo2[0].classList.remove("fadeOutDown", "slower");
  subtitulo2[0].style.display = "block";
  subtitulo2[0].classList.add("fadeInUp", "slower");
}

function addSlideInUp3() {
  title = document.getElementsByTagName("h4");
  subtitulo3 = document.getElementsByClassName("sub-art3");
  subtitulo3[0].classList.remove("fadeOutDown", "slower");
  subtitulo3[0].style.display = "block";
  subtitulo3[0].classList.add("fadeInUp", "slower");
}
function addSlideInUp4() {
  subtitulo4 = document.getElementsByClassName("sub-art4");
  subtitulo4[0].classList.remove("fadeOutDown", "slower");
  subtitulo4[0].style.display = "block";
  subtitulo4[0].classList.add("fadeInUp", "slower");
}

function removeSlideInUp() {
  subtitulo = document.getElementsByClassName("sub-art");
  subtitulo[0].classList.remove("fadeInUp", "slower");
  subtitulo[0].classList.add("fadeOutDown", "slower");
  setTimeout(function() {
    subtitulo[0].style.display = "none";
  }, 600);
}

function removeSlideInUp2() {
  subtitulo2 = document.getElementsByClassName("sub-art2");
  subtitulo2[0].classList.remove("fadeInUp", "slower");
  subtitulo2[0].classList.add("fadeOutDown", "slower");
  setTimeout(function() {
    subtitulo2[0].style.display = "none";
  }, 600);
}

function removeSlideInUp3() {
  subtitulo3 = document.getElementsByClassName("sub-art3");
  subtitulo3[0].classList.remove("fadeInUp", "slower");
  subtitulo3[0].classList.add("fadeOutDown", "slower");
  setTimeout(function() {
    subtitulo3[0].style.display = "none";
  }, 600);
}
function removeSlideInUp4() {
  subtitulo4 = document.getElementsByClassName("sub-art4");
  subtitulo4[0].classList.remove("slideInUp");
  subtitulo4[0].classList.add("fadeOutDown", "slower");
  setTimeout(function() {
    subtitulo4[0].style.display = "none";
  }, 600);
}



(function($) {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#wrapper"),
    $header = $("#header"),
    $banner = $("#banner");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["361px", "480px"],
    xxsmall: [null, "360px"]
  });

  /**
   * Applies parallax scrolling to an element's background image.
   * @return {jQuery} jQuery object.
   */
  $.fn._parallax =
    browser.name == "ie" || browser.name == "edge" || browser.mobile
      ? function() {
          return $(this);
        }
      : function(intensity) {
          var $window = $(window),
            $this = $(this);

          if (this.length == 0 || intensity === 0) return $this;

          if (this.length > 1) {
            for (var i = 0; i < this.length; i++)
              $(this[i])._parallax(intensity);

            return $this;
          }

          if (!intensity) intensity = 0.25;

          $this.each(function() {
            var $t = $(this),
              on,
              off;

            on = function() {
              $t.css(
                "background-position",
                "center 100%, center 100%, center 0px"
              );

              $window.on("scroll._parallax", function() {
                var pos =
                  parseInt($window.scrollTop()) - parseInt($t.position().top);

                $t.css(
                  "background-position",
                  "center " + pos * (-1 * intensity) + "px"
                );
              });
            };

            off = function() {
              $t.css("background-position", "");

              $window.off("scroll._parallax");
            };

            breakpoints.on("<=medium", off);
            breakpoints.on(">medium", on);
          });

          $window
            .off("load._parallax resize._parallax")
            .on("load._parallax resize._parallax", function() {
              $window.trigger("scroll");
            });

          return $(this);
        };

  // Play initial animations on page load.
  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Clear transitioning state on unload/hide.
  $window.on("unload pagehide", function() {
    window.setTimeout(function() {
      $(".is-transitioning").removeClass("is-transitioning");
    }, 250);
  });

  // Fix: Enable IE-only tweaks.
  if (browser.name == "ie" || browser.name == "edge") $body.addClass("is-ie");

  // Scrolly.
  $(".scrolly").scrolly({
    offset: function() {
      return $header.height() - 2;
    }
  });

  // Tiles.
  var $tiles = $(".tiles > article");

  $tiles.each(function() {
    var $this = $(this),
      $image = $this.find(".image"),
      $img = $image.find("img"),
      $link = $this.find(".link"),
      x;

    // Image.

    // Set image.
    $this.css("background-image", "url(" + $img.attr("src") + ")");

    // Set position.
    if ((x = $img.data("position"))) $image.css("background-position", x);

    // Hide original.
    $image.hide();

    // Link.
    if ($link.length > 0) {
      $x = $link
        .clone()
        .text("")
        .addClass("primary")
        .appendTo($this);

      $link = $link.add($x);

      $link.on("click", function(event) {
        var href = $link.attr("href");

        // Prevent default.
        event.stopPropagation();
        event.preventDefault();

        // Target blank?
        if ($link.attr("target") == "_blank") {
          // Open in new tab.
          window.open(href);
        }

        // Otherwise ...
        else {
          // Start transitioning.
          $this.addClass("is-transitioning");
          $wrapper.addClass("is-transitioning");

          // Redirect.
          window.setTimeout(function() {
            location.href = href;
          }, 500);
        }
      });
    }
  });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function() {
      $window.trigger("scroll");
    });

    $window.on("load", function() {
      $banner.scrollex({
        bottom: $header.height() + 10,
        terminate: function() {
          $header.removeClass("alt");
        },
        enter: function() {
          $header.addClass("alt");
        },
        leave: function() {
          $header.removeClass("alt");
          $header.addClass("reveal");
        }
      });

      window.setTimeout(function() {
        $window.triggerHandler("scroll");
      }, 100);
    });
  }

  // Banner.
  $banner.each(function() {
    var $this = $(this),
      $image = $this.find(".image"),
      $img = $image.find("img");

    // Parallax.
    $this._parallax(0.275);

    // Image.
    if ($image.length > 0) {
      // Set image.
      $this.css("background-image", "url(" + $img.attr("src") + ")");

      // Hide original.
      $image.hide();
    }
  });

  // Menu.
  var $menu = $("#menu"),
    $menuInner;

  $menu.wrapInner('<div class="inner"></div>');
  $menuInner = $menu.children(".inner");
  $menu._locked = false;

  $menu._lock = function() {
    if ($menu._locked) return false;

    $menu._locked = true;

    window.setTimeout(function() {
      $menu._locked = false;
    }, 350);

    return true;
  };

  $menu._show = function() {
    if ($menu._lock()) $body.addClass("is-menu-visible");
  };

  $menu._hide = function() {
    if ($menu._lock()) $body.removeClass("is-menu-visible");
  };

  $menu._toggle = function() {
    if ($menu._lock()) $body.toggleClass("is-menu-visible");
  };

  $menuInner
    .on("click", function(event) {
      event.stopPropagation();
    })
    .on("click", "a", function(event) {
      var href = $(this).attr("href");

      event.preventDefault();
      event.stopPropagation();

      // Hide.
      $menu._hide();

      // Redirect.
      window.setTimeout(function() {
        window.location.href = href;
      }, 250);
    });

  $menu
    .appendTo($body)
    .on("click", function(event) {
      event.stopPropagation();
      event.preventDefault();

      $body.removeClass("is-menu-visible");
    })
    .append('<a class="close" href="#menu">Close</a>');

  $body
    .on("click", 'a[href="#menu"]', function(event) {
      event.stopPropagation();
      event.preventDefault();

      // Toggle.
      $menu._toggle();
    })
    .on("click", function(event) {
      // Hide.
      $menu._hide();
    })
    .on("keydown", function(event) {
      // Hide on escape.
      if (event.keyCode == 27) $menu._hide();
    });
})(jQuery);

$(window).load(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});

