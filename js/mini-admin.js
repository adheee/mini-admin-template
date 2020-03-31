// select
$(document).ready(function () {
  $('select').niceSelect();
});

// textarea
var tx = document.getElementsByTagName('textarea');
for (var i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) +
    'px;overflow-y:hidden; max-height: auto;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}

// navbar scroll
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 70) {
    $("#navbar-top").addClass("navbar-scroll").removeClass("navbar navbar-expand-lg navbar-orange bg-hitam");
  } else {
    $("#navbar-top").removeClass("navbar-scroll").addClass("navbar navbar-expand-lg navbar-orange bg-hitam");
  }
});
// end navbar scroll

var ctx = document.getElementById("mychart-doughnut").getContext('2d');
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

var ctx = document.getElementById("mychart-boundaries").getContext('2d');
var biru = '#3b9ef5';
var orange = 'rgb(255, 179, 0)';
var putih = 'rgb(248, 248, 248)';
var merah = '#f53b66';
var bgmerah = '#f53b667a';
var ungu = '#b73bf5';
var shadow = '#818181';
var hijau = '#28a745';
var myChart = new Chart(ctx, {

  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "Jule"],
    datasets: [{
      label: 'Customer',
      data: [12, 19, 23, 2, 3, 10, 1],
      borderColor: [
        merah
      ],
      backgroundColor: [
        bgmerah
      ],
      borderWidth: 4,
      pointBorderWidth: 5
    }]
  }
});