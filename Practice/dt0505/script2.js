// let a = 10;
// let b = 20;

// $(document).ready(function () {
//   $("#cngbtn").click(function () {
//     $("p").text("This Changed");
//   });

//   $("#hide").click(function () {
//     $("p").hide();
//   });

//   $("#show").click(function () {
//     $("p").show();
//   });
// });

// let c = a + b;
// $("body").append(`<br\><br\> Sum of a and b is :: ${c} `);

// let arr = [27, "Pradip", "CSE"];
// $(`body`).append(`<br/><br/> Array :: ${arr}`);

// $(window).on("load", function () {
//   console.log(`Page loaded Fully`);
// });

// $(document).ready(function () {
//   function updatewidth() {
//     let w = $(window).width();
//     $("#width").text(w);
//     if (w < 500) {
//       $("#info").css("backgorund-color", "lightcorol");
//     } else if (w < 800) {
//       $("#info").css({ "backgorund-color": "lightyello" });
//     } else {
//       $("#info").css({ "backgorund-color": "lightblue" });
//     }
//   }
//   updatewidth();
//   $(window).resize(function () {
//     updatewidth();
//   });
// });

// $(document).ready(function () {
//   // Scroll event
//   $(window).scroll(function () {
//     var scrollTop = $(this).scrollTop(); // get scroll position
//     $("#scrollPos").text("Scroll Top: " + scrollTop + "px");
//     // Show "Go to Top" button if scrolled down 100px
//     if (scrollTop > 100) {
//       $("#topBtn").fadeIn();
//     } else {
//       $("#topBtn").fadeOut();
//     }
//   });
//   // Click button to scroll to top
//   $("#topBtn").click(function () {
//     $("html, body").animate({ scrollTop: 0 }, 600);
//   });
// });

// $(document).ready(function () {
//   $(window).on("unload", function () {
//     console.log("You are closing the window page!");
//     alert("Are you sure you want to leave this page?");
//   });
// });

$(document).ready(function () {
  $("#btnClick").click(function () {
    $("#msg").text("Clicked clicked");
  });
});
