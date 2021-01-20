$(document).ready(function () {
    var countInputTel = $('.account-info-list__item_tel').find("input").length;
    $("#account-btn-add-tel").click(function () {
        countInputTel++;
        var $this = $(this);
        var listItem = $this.parents(".account-info-list__item");
        listItem.append($(
            `<div class="position-relative mb-2">
                <input class="form-control" placeholder="" type="tel" name="tel${countInputTel}" />
                <button class="btn btn-sm account-info-list__btn-input" id='account-btn-remove-input-tel${countInputTel}' type="button">
                    <i class="fas fa-times"></i>
                </button>
            </div>`
        ));
        $("#account-btn-remove-input-tel"+countInputTel).on("click", function() {
            $(this).parent().remove();
            countInputTel--;
        })
    });
    var countInputEmail = $('.account-info-list__item_email').find("input").length;
    $("#account-btn-add-email").click(function () {
        countInputEmail++;
        var $this = $(this);
        var listItem = $this.parents(".account-info-list__item");
        listItem.append($(
            `<div class="position-relative mb-2">
                <input class="form-control" placeholder="" type="email" name="email${countInputEmail}" />
                <button class="btn btn-sm account-info-list__btn-input" id='account-btn-remove-input-email${countInputEmail}' type="button">
                    <i class="fas fa-times"></i>
                </button>
            </div>`
        ));
        $("#account-btn-remove-input-email"+countInputEmail).on("click", function() {
            $(this).parent().remove();
            countInputEmail--;
        })
    });

    $("#account-btn-add-organization").on("click", function() {
        $("#account-organizations-popup").modal("show");
    })

    $("#account-btn-add-document").on("click", function() {
        $("#account-document-popup").modal("show");
    })
    
    $("#btn-show-cases-popup").on("click", function() {
        $("#account-cases-popup").modal("show");
    })


    //drag and drop
    // var dropzone = $(".dropzone-file");
    // dropzone.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //   })
    //   .on('dragover dragenter', function() {
    //     dropzone.addClass('is-dragover');
    //   })
    //   .on('dragleave dragend drop', function() {
    //     dropzone.removeClass('is-dragover');
    //   })
    //   .on('drop', function(e) {
    //     var dropzoneText = dropzone.find(".dropzone-file__label-title");
    //     var droppedFiles = e.originalEvent.dataTransfer.files;
    //     dropzoneText.text(droppedFiles[0].name);
    //   });
});