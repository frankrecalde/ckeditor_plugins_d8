jQuery(document).ready(function () {
  jQuery("a.ckeditor_plugins_expand").on("click", function (e) {
    var parentDiv = jQuery(this).parent().parent();
    jQuery(parentDiv).nextUntil(".collapse-text-text").children(".collapsed div.collapse").collapse("show");

    e.preventDefault();
    jQuery([document.documentElement, document.body]).animate({ scrollTop: jQuery(this).offset().top });
  });

  jQuery("a.ckeditor_plugins_collapse").on("click", function (e) {
    var parentDiv = jQuery(this).parent().parent();
    jQuery(parentDiv).nextUntil(".collapse-text-text").children(".collapsible div.collapse.in").collapse("hide");

    e.preventDefault();
  });
});
