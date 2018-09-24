$(document).ready(function() {
  var header_html, footer_html;

  if ($('body.no_partials').length != 1) {
    header_
    .then((response) => {
      header_html = response
      $('body').prepend(header_html);
    })

    footer_
    .then((response) => {
      footer_html = response
      $(footer_html).insertBefore($('script')[0]);
    }) 
  } 
});

const header_= new Promise ((resolve, reject) => {
  fetch('/partials/header.html')
  .then((response) => {
    resolve(response.text());
  })
  .catch((error) => {
    reject(error);
  })
});

const footer_ = new Promise((resolve, reject) => {
  fetch('/partials/footer.html')
  .then((response) => {
    resolve(response.text());
  })
  .catch((error) => {
    reject(error);
  })
});