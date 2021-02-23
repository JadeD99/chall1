//detail aampassingen aan de gehele js stijl
Chart.defaults.global.defaultFontFamily = "PassionSansPDac-Light";
Chart.defaults.global.defaultFontColor = "Black";
Chart.defaults.global.defaultFontSize = 14; 


// js voor de afteller

var countDownDate = new Date("June 17, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("afteller").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("afteller").innerHTML = "EXPIRED";
  }
}, 1000);

// js voor de charts
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Januari', 'Februari', 'Maart', 'Mei', 'Juni', 'Juli'],
        datasets: [{
            label: '# Hoeveelheid water voorraad',
            data: [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700],
            backgroundColor: [
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF',
                '#828FEF'
            ],
            
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});



var ctx = document.getElementById('myChart3');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Boerenkool', 'Zoete aardappel', 'Knoflook', 'Uien'],

        datasets: [{
            label: '# Hoeveelheid voedsel soorten dat je op Mars kan laten groeien',
            data: [30, 30, 15, 25,],
            backgroundColor: [
                '#C7CFF7',
                '#6977DE',
                '#828FEF',
                '#AFBCFF',
               
            ],
            
            borderWidth: 0
        }]
    },
    options: {
        
    }

});


var ctx = document.getElementById('myChart2');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [1,2,3,4,5,6],
        label: 'Tijd (maanden)',
        
        datasets: [{
            label: '# Afstand afgelegd in KM',
            data: [5, 15, 25, 35, 45, 55, 65,],
            backgroundColor: [
                '#828FEF',
            ],
            defaultFontSize:[ 20],
            borderWidth: 0
        }]
    },
    options: {

        
    }

});

// js voor de proces bar

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
 }
  document.getElementById("button").onclick = function (){
  move();
 };
