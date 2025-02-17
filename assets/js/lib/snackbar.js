$(() => {
  $(".btn-closeSnackbar").click((e) => {
    const $this = $(e.currentTarget);

    $this.parents(".snackbarContent").removeClass("is-active");
  });
});
