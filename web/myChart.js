var startDate = new Date(2016, 6, 16); // 7/16 <- FUCK
var endDate = new Date(2016, 7, 31); // 8/31 <- FUCK
var nowDate = new Date();
var passedDays = Math.floor((nowDate - startDate) / 86400000) + 1;
var allDays = Math.floor((endDate - startDate) / 86400000) + 1;
var daysChart = new Chart(document.getElementById('days'), {
    type: 'doughnut',
    data: {
        labels: ['経過日数', '残り'],
        datasets: [{
            data: [
                passedDays, allDays - passedDays
            ],
            backgroundColor: [
                '#FF5722', 'rgba(158, 158, 158, 0.2)'
            ]
        }]
    },
    options: {
        animation: {
            animateRotate: false
        },
        cutoutPercentage: 60
    }
});

var myColor = {
    math: 'rgba(63, 81, 181, 0.5)', // #3F51B5
    english: 'rgba(255, 152, 0, 0.5)', // #FF9800
    japanese: 'rgba(244, 67, 54, 0.5)', // #F44336
    general: 'rgba(96, 126, 139, 0.5)' // #607D8B
};

var homeworkChart = new Chart(document.getElementById('homework'), {
    type: 'horizontalBar',
    data: {
        labels: ['チャート(数III)', '1対1(数II)', 'LINK UP', '英作文', '古典', '評論', 'レポート'],
        datasets: [{
            label: '進捗(%)',
            data: [
                100 * 5 / 52,
                100 * 0 / 48,
                100 * 1 / 12,
                100 * 0 / 20,
                100 * 0 / 30,
                100 * 0 / 4,
                100 * 0 / 1
            ],
            backgroundColor: [
                myColor.math, myColor.math,
                myColor.english, myColor.english,
                myColor.japanese, myColor.japanese,
                myColor.general
            ]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            }]
        }
    }
});
