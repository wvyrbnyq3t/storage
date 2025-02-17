$(() => {
  $(".switchBtn button").click((e) => {
    const $this = $(e.currentTarget);

    if ($this.hasClass("is-current")) {
      return;
    }
    const switchName = $this.data("switch");
    const field = $this.data("field");
    const $switchWrap = $(`.switchContentWrap[data-switch="${switchName}"]`);
    const $switchContent = $switchWrap.find(
      `.switchContent[data-field="${field}"]`
    );

    if ($switchContent.length !== 0) {
      $switchWrap.find(".switchContent").removeClass("is-active");
      $switchContent.addClass("is-active");
      $this.parent().find("button").removeClass("is-current");
      $this.addClass("is-current");
    }
  });
});
