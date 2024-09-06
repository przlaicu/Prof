$(document).ready(function () {
  $.ajax({
    url: 'https://api.edu.skuflic.com/users',
    dataType: 'json',
    success: function (data) {
      const template = document.getElementById('template').innerHTML;
      const compiled_template = Handlebars.compile(template);
      const rendered = compiled_template({ user: data });
      document.getElementById('users').innerHTML = rendered;
      afterRender();
    },
  });

  function addStripes() {
    $('table tr:nth-child(even)').addClass('striped');
  }

  function afterRender() {
    $('[data-toggle="popover"]').popover();
    $('table th').css('color', 'darkBlue');

    $('table tr td').on('mouseenter', (event) => {
      $(event.currentTarget).css('backgroundColor', 'yellow');
    });

    $('table tr td').on('mouseleave', (event) => {
      $(event.currentTarget).removeAttr('style');
    });

    addStripes();
  }

  $(window).resize(() => {
    console.log($(window).width());
  });
});
