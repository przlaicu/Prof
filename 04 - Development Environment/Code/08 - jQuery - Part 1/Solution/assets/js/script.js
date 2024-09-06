$(document).ready(function () {
  $(document).ready(function () {
    $.ajax({
      url: 'https://api.edu.skuflic.com/users',
      dataType: 'json',
      success: function (data) {
        const template = document.getElementById('template').innerHTML;
        const compiled_template = Handlebars.compile(template);
        const rendered = compiled_template({ user: data });
        document.getElementById('users').innerHTML = rendered;
        addStripes();
        afterRender();
      },
    });
  });

  function addStripes() {
    $('table tr').removeClass('striped');
    $('table tr:nth-child(even)').addClass('striped');
  }

  function afterRender() {
    $('[data-toggle="popover"]').popover();
    $('table th').css('color', 'darkBlue');
    addStripes();
  }
});
