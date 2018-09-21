$(document).ready(function() {
  // insert navbar
  const header = new Promise ((resolve, reject) => {
    fetch('partials/header.html')
    .then((response) => {
      resolve(response.text());
    })
    .catch((error) => {
      reject(error);
    })
  })
  .then((response) => {
    $('body').prepend(response);
  });

  // insert footer
  const footer = new Promise((resolve, reject) => {
    fetch('partials/footer.html')
    .then((response) => {
      resolve(response.text());
    })
    .catch((error) => {
      reject(error);
    })
  })
  .then((response) => {
    $(response).insertBefore($('script')[0]);
  });
});