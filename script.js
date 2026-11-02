$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("letter-spacing", "2px");
  $(".intro").css({ "max-width": "600px", margin: "0 auto 15px" });

  $("#btn-dark").click(function () {
    $("body").css({ background: "#1e1e1e", color: "#eee" });
    $(".card").css({ background: "#2d2d2d", color: "#eee" });
    $(".accordion-head").css({ background: "#444", color: "#fff" });
    $(".bar-bg").css("background", "#555");
    $("footer").css("color", "#bbb");
  });
  $("#btn-light").click(function () {
    $("body").css({ background: "#f4f6f8", color: "#222" });
    $(".card").css({ background: "#fff", color: "#222" });
    $(".accordion-head").css({ background: "#ecf0f1", color: "#222" });
    $(".bar-bg").css("background", "#ddd");
    $("footer").css("color", "#777");
  });

  var headlineChanged = false;
  $("#btn-headline").click(function () {
    if (!headlineChanged) {
      $("#headline").html("Askar Bavgashev — <em>Front-End Developer in Progress</em>");
      $("#welcome-title").text("Welcome to My jQuery Portfolio!");
    } else {
      $("#headline").text("Askar Bavgashev — Aspiring Software Engineer");
      $("#welcome-title").text("Welcome to My Portfolio");
    }
    headlineChanged = !headlineChanged;
  });

  $("#btn-hide").click(function () { $("#status, #fun-facts").hide(); });
  $("#btn-show").click(function () { $("#status, #fun-facts").show(); });
  $("#btn-toggle").click(function () { $("#status, #fun-facts").toggle(); });

  $("#btn-fadein").click(function () { $(".gallery-img").fadeIn(800); });
  $("#btn-fadeout").click(function () { $(".gallery-img").fadeOut(800); });
  $("#btn-fadetoggle").click(function () { $(".gallery-img").fadeToggle(800); });

  $(".accordion-head").click(function () {
    $(this).next(".panel").slideToggle(400);
  });
  $("#btn-slideup").click(function () { $(".panel").slideUp(400); });
  $("#btn-slidedown").click(function () { $(".panel").slideDown(400); });

  function getSkill() {
    var skill = $.trim($("#skill-input").val());
    if (skill === "") {
      $("#skill-msg").text("Please enter a skill first!");
      return null;
    }
    $("#skill-msg").text("");
    return skill;
  }
  $("#btn-add").click(function () {
    var s = getSkill();
    if (s) { $("#skills-list").append("<li>" + $("<div>").text(s).html() + "</li>"); $("#skill-input").val(""); }
  });
  $("#btn-prepend").click(function () {
    var s = getSkill();
    if (s) { $("#skills-list").prepend("<li>" + $("<div>").text(s).html() + "</li>"); $("#skill-input").val(""); }
  });
  $("#btn-remove").click(function () {
    if ($("#skills-list li").length === 0) {
      $("#skill-msg").text("No skills left to remove.");
      return;
    }
    $("#skill-msg").text("");
    $("#skills-list li:last").remove();
  });

  var toLinkedIn = true;
  $("#btn-link").click(function () {
    if (toLinkedIn) {
      $("#social-link").attr("href", "https://www.linkedin.com/in/askar-bavgashev-295847331").text("My LinkedIn");
      $("#link-url").text("https://www.linkedin.com/in/askar-bavgashev-295847331/");
      $(this).text("Change Link to GitHub");
    } else {
      $("#social-link").attr("href", "https://github.com/ZuckerbergWannabe").text("My GitHub");
      $("#link-url").text("https://github.com/ZuckerbergWannabe");
      $(this).text("Change Link to LinkedIn");
    }
    toLinkedIn = !toLinkedIn;
  });

  $("#name-input").on("input", function () { $("#live-name").text($(this).val()); });
  $("#email-input").on("input", function () { $("#live-email").text($(this).val()); });

  var barsFilled = false;
  $("#btn-animate").click(function () {
    $(".bar").each(function () {
      var target = barsFilled ? 0 : $(this).data("level");
      $(this).animate({ width: target + "%" }, 1200);
    });
    barsFilled = !barsFilled;
    $(this).text(barsFilled ? "Reset Skills" : "Animate My Skills");
  });
});
