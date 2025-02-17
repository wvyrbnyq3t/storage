$(() => {
  // 開く
  $(".btn-openModal").click((e) => {
    const $this = $(e.currentTarget);
    const field = $this.data("modal");
    const disabled = $this.attr("aria-disabled");
    const $modal = $("#modal");
    const $modalContent = $modal.find(`.modalContent[data-modal="${field}"]`);

    if (disabled !== "true" && $modalContent.length === 1) {
      $("body").addClass("is-modal");
      $modal.addClass("is-open");
      $modalContent.addClass("is-active");
    }
  });

  // 閉じる
  $(".btn-closeModal, .overlay").click(() => {
    $("body").removeClass("is-modal");
    $("#modal").removeClass("is-open");
    $("#modal .modalContent").removeClass("is-active");
  });
});
