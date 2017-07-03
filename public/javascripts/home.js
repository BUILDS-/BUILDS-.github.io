/**
 * Activate lightbox, which pops images into modals when clicked.
 */
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/**
 * A lightbox alternative that allows you to preview an image.
 * Clicking on an image pops the image up in a modal.
 *
 * How to use:
 * <a href="#" class="pop">
 * 	<img class="img-thumbnail" src="{{ "/public/images/builds_room_number.jpg" }}"/>
 * </a>
 */
 /*
$(function() {
    $('.pop').on('click', function() {
      $('.imagepreview').attr('src', $(this).find('img').attr('src'));
      $('#imagemodal').modal('show');   
    });
});
*/