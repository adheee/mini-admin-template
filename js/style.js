// navbar scroll
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("#navbar-top").addClass("navbar-scroll").removeClass("navbar navbar-expand-lg navbar-orange bg-hitam");
  } else {
    $("#navbar-top").removeClass("navbar-scroll").addClass("navbar navbar-expand-lg navbar-orange bg-hitam");
  }
});
// end navbar scroll

var ctx = document.getElementById("mychart").getContext('2d');
var biru = '#3b9ef5';
var orange = 'rgb(255, 179, 0)';
var putih = 'rgb(248, 248, 248)';
var merah = '#f53b66';
var ungu = '#b73bf5';
var shadow = '#818181';
var hijau = '#28a745';
var myChart = new Chart(ctx, {

  type: 'doughnut',
  data: {
    labels: ["Red", "Blue", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 23, 2, 3],
      backgroundColor: [
        merah,
        biru,
        hijau,
        ungu,
        orange
      ],
      borderColor: [
        putih,
        putih,
        putih,
        putih,
        putih
      ],
      borderWidth: 5
    }]
  }
});