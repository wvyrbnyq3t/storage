$(() => {
  $(".spinnerBtn").click((e) => {
    const $this = $(e.currentTarget);
    const disabled = $this.attr("aria-disabled");

    if (disabled !== "true") {
      const $wrap = $this.parent(".spinnerBtnWrap");
      const field = $this.data("field");
      const type = $this.data("type");
      const $input = $wrap.find(`input[name="${field}"]`);

      if ($input.length === 1) {
        $wrap.find(".spinnerBtn").attr("aria-disabled", false);
        const value = parseInt($input.val());

        if (type === "minus") {
          $input.val(value - 1);
          const min = parseInt($input.attr("min"));

          if (value - 1 === min) {
            $this.attr("aria-disabled", "true");
          }
        } else if (type === "plus") {
          $input.val(value + 1);
          const max = parseInt($input.attr("max"));

          if (value + 1 === max) {
            $this.attr("aria-disabled", "true");
          }
        }
      }
    }
  });
});
