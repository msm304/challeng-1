// hamburger menu
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
  jQuery(".nav-icon").click(function (e) {
    e.preventDefault();
    let header = jQuery(".topnav");
    header.toggle();
  });

});

// slider
var j = $.noConflict();

// j(document).ready(function () {
//   let slideCount = j(".sliderside ul li").length;
//   let slideWidth = j(".sliderside ul li").width();
//   let slideHeight = j(".sliderside ul li").height();

//   let slideUlWidth = slideCount * slideWidth;

//   j(".sliderside").css({
//     "max-width": slideWidth,
//     height: slideHeight,
//   });
//   j(".sliderside ul").css({
//     width: slideUlWidth,
//     "margin-left": -slideWidth,
//   });
//   j(".sliderside ul li:last-child").prependTo(j(".sliderside ul"));

//   j(".next").on("click", function () {
//     moveRight();
//   });

//   j(".prev").on("click", function (e) {
//     moveLeft();
//   });

//   function moveRight() {
//     j(".sliderside ul")
//       .stop()
//       .animate(
//         {
//           left: -slideWidth,
//         },
//         700,
//         function () {
//           j(".sliderside ul li:first-child").appendTo(j(".sliderside ul"));
//           j(".sliderside ul").css("left", "");
//         }
//       );
//   }

//   function moveLeft() {
//     j(".sliderside ul")
//       .stop()
//       .animate(
//         {
//           left: +slideWidth,
//         },
//         700,
//         function () {
//           j(".sliderside ul li:last-child").prependTo(j(".sliderside ul"));
//           j(".sliderside ul").css("left", "");
//         }
//       );
//   }
// });

j(document).ready(function () {
  j("#sendmassage").submit(function (e) { 
    e.preventDefault();
    
    let name = j("#name").val();
    let phonenum = j("#phonenum").val();
    let email = j("#email").val();
    let massage = j("#massage").val();
    let sendbutton = j("#sendbutton");

      j.ajax({
        type: "POST",
        url: "sendmassage.php",
        data: {
          name: name,
          phonenum: phonenum,
          email: email,
          massage: massage
        },
          
        beforesend: function () {
          sendbutton.text('در حال ارسال ...');
        },
        
        success: function (response) {
          let data = JSON.parse(response)
          alert(data.msg);
        },

        error: function (error) {
          
        },

        complete: function () {
          sendbutton.text('ارسال پیام')
        }
        
      });


  });
})