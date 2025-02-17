$(() => {
  // 開く
  $(".btn-openSlider").click((e) => {
    const $this = $(e.currentTarget);
    const field = $this.data("sliderfield");
    const disabled = $this.attr("aria-disabled");
    const $slider = $("#slider");
    const $sliderContent = $slider.find(`.sliderContent[data-sliderfield="${field}"]`);

    console.log($sliderContent);

    if (disabled !== "true" && $sliderContent.length === 1) {
      $slider.addClass("is-open");
      $sliderContent.addClass("is-active");
    }
  });

  // 閉じる
  $(".btn-closeSlider").click(() => {
    $("#slider").removeClass("is-open");
    $(".sliderContent").removeClass("is-active");
  })
});
