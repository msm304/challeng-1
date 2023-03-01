// // hamburger menu
// /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  // function myFunction() {
  //   var x = document.getElementById("myLinks");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }

// sliderside
// below code for preventing interference with wordpress


// jQuery(document).ready(function () {
//   let header = jQuery('header');
// },
jQuery(document).ready(function () {
  

  jQuery(".menu-btn.ads-btn").click(function (e) { 
    e.preventDefault();
    alert('این یک صفحه ی آزمایشی است');
  });

  jQuery(".menu-btn").click(function (e) {
    e.preventDefault();
    alert("قابلیت عضویت غیرفعال است");
  });

  jQuery(".container.filter form").submit(function (e) {
    e.preventDefault();
    alert("جستجو در فیلتر غیرفعال است");
  });
  // jQuery("").click(function (e) {
  //   e.preventDefault();
  //   let header = jQuery(".myLinks");
  //   header.hide();
  // });





});

var j = $.noConflict();

j(document).ready(function () {
  let slideCount = j(".sliderside ul li").length;
  let slideWidth = j(".sliderside ul li").width();
  let slideHeight = j(".sliderside ul li").height();

  let slideUlWidth = slideCount * slideWidth;

  j(".sliderside").css({
    "max-width": slideWidth,
    height: slideHeight,
  });
  j(".sliderside ul").css({
    width: slideUlWidth,
    "margin-left": -slideWidth,
  });
  j(".sliderside ul li:last-child").prependTo(j(".sliderside ul"));

  j(".next").on("click", function () {
    moveRight();
  });

  j(".prev").on("click", function (e) {
    moveLeft();
  });

  function moveRight() {
    j(".sliderside ul")
      .stop()
      .animate(
        {
          left: -slideWidth,
        },
        700,
        function () {
          j(".sliderside ul li:first-child").appendTo(j(".sliderside ul"));
          j(".sliderside ul").css("left", "");
        }
      );
  }

  function moveLeft() {
    j(".sliderside ul")
      .stop()
      .animate(
        {
          left: +slideWidth,
        },
        700,
        function () {
          j(".sliderside ul li:last-child").prependTo(j(".sliderside ul"));
          j(".sliderside ul").css("left", "");
        }
      );
  }
});

