most_popular_words_inView = false;
word_count_inView = false;
most_popular_words_hs_inView = false;
most_popular_words_fl_inView = false;
most_popular_words_hh_inView = false;
TFIDF_hs_inView = false;
TFIDF_fl_inView = false;
TFIDF_hh_inView = false;
NRC_All_hs_inView = false;
NRC_All_fl_inView = false;
NRC_All_hh_inView = false;
NRC_Pos_hs_inView = false;
NRC_Neg_hs_inView = false;
NRC_Pos_fl_inView = false;
NRC_Neg_fl_inView = false;
NRC_Pos_hh_inView = false;
NRC_Neg_hh_inView = false;

$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

window.addEventListener("scroll", function(){
    if ($('#chart-word-count').isOnScreen() && word_count_inView == false) {
        word_count_inView = true;
        showWordCount();
    }

    if ($('#chart-most-popular-words').isOnScreen() && most_popular_words_inView == false) {
        most_popular_words_inView = true;
        showMostPopularWords();
    }

    if ($('#chart-most-popular-words-hs').isOnScreen() && most_popular_words_hs_inView == false) {
        most_popular_words_hs_inView = true;
        showMostPopularWords_hs();
    }

    if ($('#chart-most-popular-words-fl').isOnScreen() && most_popular_words_fl_inView == false) {
        most_popular_words_fl_inView = true;
        showMostPopularWords_fl();
    }

    if ($('#chart-most-popular-words-hh').isOnScreen() && most_popular_words_hh_inView == false) {
        most_popular_words_hh_inView = true;
        showMostPopularWords_hh();
    }

    if ($('#chart-TFIDF-hs').isOnScreen() && TFIDF_hs_inView == false) {
        TFIDF_hs_inView = true;
        showTFIDF_hs();
    }

    if ($('#chart-TFIDF-fl').isOnScreen() && TFIDF_fl_inView == false) {
        TFIDF_fl_inView = true;
        showTFIDF_fl();
    }

    if ($('#chart-TFIDF-hh').isOnScreen() && TFIDF_hh_inView == false) {
        TFIDF_hh_inView = true;
        showTFIDF_hh();
    }

    if ($('#chart-NRC-All-hs').isOnScreen() && NRC_All_hs_inView == false) {
        NRC_All_hs_inView = true;
        showNRC_All_hs();
    }

    if ($('#chart-NRC-All-fl').isOnScreen() && NRC_All_fl_inView == false) {
        NRC_All_fl_inView  = true;
        showNRC_All_fl();
    }

    if ($('#chart-NRC-All-hh').isOnScreen() && NRC_All_hh_inView == false) {
        NRC_All_hh_inView  = true;
        showNRC_All_hh();
    }

    if ($('#chart-NRC-Pos-hs').isOnScreen() && NRC_Pos_hs_inView == false) {
        NRC_Pos_hs_inView = true;
        showNRC_Pos_hs();
    }

    if ($('#chart-NRC-Neg-hs').isOnScreen() && NRC_Neg_hs_inView == false) {
        NRC_Neg_hs_inView  = true;
        showNRC_Neg_hs();
    }

    if ($('#chart-NRC-Pos-fl').isOnScreen() && NRC_Pos_fl_inView == false) {
        NRC_Pos_fl_inView = true;
        showNRC_Pos_fl();
    }

    if ($('#chart-NRC-Neg-fl').isOnScreen() && NRC_Neg_fl_inView == false) {
        NRC_Neg_fl_inView  = true;
        showNRC_Neg_fl();
    }

    if ($('#chart-NRC-Pos-hh').isOnScreen() && NRC_Pos_hh_inView == false) {
        NRC_Pos_hh_inView = true;
        showNRC_Pos_hh();
    }

    if ($('#chart-NRC-Neg-hh').isOnScreen() && NRC_Neg_hh_inView == false) {
        NRC_Neg_hh_inView  = true;
        showNRC_Neg_hh();
    }
})

function showWordCount(){
    var ctx = document.getElementById("chart-word-count").getContext('2d');
    var dataValues = [6, 13, 9, 3, 2, 2];
    var dataLabels = [80,  100, 120, 140, 160, 180];
    var myChart = new Chart(ctx, {
    type: 'bar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels,
        datasets: [{
            label: 'Barras',
            data: dataValues,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Histograma de Palavras por Música",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: false,
                    barPercentage: 1.3,
                    ticks: {
                        max: 3,
                    }
                },
                {
                    display: true,
                    ticks: {
                        autoSkip: false,
                        max: 4,
                        fontColor: 'white'
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras Contadas',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Quantidade de Músicas',
                        fontColor: 'white'
                    },
                    ticks: {
                    beginAtZero:true,
                    fontColor: 'white'
                    }
                }]
            }
        }
    });
}

//---------------------

function showMostPopularWords(){
    var ctx_most_popular_words = document.getElementById("chart-most-popular-words").getContext('2d');
    var dataValues_most_popular_words = [110, 65, 45, 40, 40, 40, 39, 38, 36, 35];
    var dataLabels_most_popular_words = ['know','like','na','ever','going','golden','wan','baby','good','might'];
    var most_popular_words_Chart = new Chart(ctx_most_popular_words, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
            responsive: true,
            aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais Populares",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

//--------------------

function showMostPopularWords_hs(){
    var ctx_most_popular_words_hs = document.getElementById("chart-most-popular-words-hs").getContext('2d');
    var dataValues_most_popular_words_hs = [29, 25, 24, 23, 20, 20, 19, 19, 16, 15];
    var dataLabels_most_popular_words_hs = ['know','none','angel','good','like','tell','gotta','something','away','your'];
    var most_popular_words_Chart_hs = new Chart(ctx_most_popular_words_hs, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_hs,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_hs,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais Usadas em Harry Styles",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showMostPopularWords_fl(){
    var ctx_most_popular_words_fl = document.getElementById("chart-most-popular-words-fl").getContext('2d');
    var dataValues_most_popular_words_fl = [40, 40, 35, 30, 28, 28, 25, 24, 22, 20];
    var dataLabels_most_popular_words_fl = ['know','golden','going','ever','like','sugar','watermelon','high','what','thing'];
    var most_popular_words_Chart_fl = new Chart(ctx_most_popular_words_fl, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_fl,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_fl,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais Usadas em Fine Line",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showMostPopularWords_hh(){
    var ctx_most_popular_words_hh = document.getElementById("chart-most-popular-words-hh").getContext('2d');
    var dataValues_most_popular_words_hh = [40, 31, 30, 20, 19, 15, 14, 12, 12, 12];
    var dataLabels_most_popular_words_hh = ['know','love','cinema','like','give','there','daylight','might','also','baby'];
    var most_popular_words_Chart_hh = new Chart(ctx_most_popular_words_hh, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_hh,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_hh,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Palavras mais Usadas em Harry's House",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Ocorrências',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

//-----------------

function showTFIDF_hs(){
    var ctx_TFIDF_hs = document.getElementById("chart-TFIDF-hs").getContext('2d');
    var dataValues_TFIDF_hs = [0.95,0.9,0.85,0.8,0.75,0.7,0.69,0.65,0.62,0.6];
    var dataLabels_TFIDF_hs = ['woman','angel','good','gotta','know','none','tell','something','used','better'];
    var TFIDF_Chart_hs = new Chart(ctx_TFIDF_hs, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_hs,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_hs,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Importância Lírica em Harry Styles",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'TF-IDF Score',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showTFIDF_fl(){
    var ctx_TFIDF_fl = document.getElementById("chart-TFIDF-fl").getContext('2d');
    var dataValues_TFIDF_fl = [1.1,0.85,0.8,0.8,0.78,0.75,0.67,0.66,0.66,0.65];
    var dataLabels_TFIDF_fl = ['going','golden','call','know','what','again','sunflower','ever','fine','line'];
    var TFIDF_Chart_fl = new Chart(ctx_TFIDF_fl, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_fl,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_fl,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Importância Lírica em Fine Line",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'TF-IDF Score',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showTFIDF_hh(){
    var ctx_TFIDF_hh = document.getElementById("chart-TFIDF-hh").getContext('2d');
    var dataValues_TFIDF_hh = [1.5,1,0.85,0.8,0.8,0.65,0.6,0.6,0.55,0.55];
    var dataLabels_TFIDF_hh = ['know','love','cinema','daylight','thinking','give','there','mind','baby','wanna'];
    var TFIDF_Chart_hh = new Chart(ctx_TFIDF_hh, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_hh,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_hh,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Importância Lírica em Harry's House",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'TF-IDF Score',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

//-----------------

function showNRC_All_hs(){
    var ctx_NRC_All_hs = document.getElementById("chart-NRC-All-hs").getContext('2d');
    var dataValues_NRC_All_hs = [18, 16, 16, 15, 14, 14, 10, 6];
    var dataLabels_NRC_All_hs = ['joy', 'anticipation', 'sadness', 'trust', 'anger', 'fear', 'surprise','disgust'];
    var NRC_All_Chart_hs = new Chart(ctx_NRC_All_hs, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_hs,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_All_hs,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Principais Sentimentos em Harry Styles",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sentimentos',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_All_fl(){
    var ctx_NRC_All_fl = document.getElementById("chart-NRC-All-fl").getContext('2d');
    var dataValues_NRC_All_fl = [20, 20, 17.5, 16, 15, 13, 11, 11];
    var dataLabels_NRC_All_fl = ['anticipation', 'trust', 'joy', 'sadness', 'anger', 'disgust', 'fear','surprise'];
    var NRC_All_Chart_fl = new Chart(ctx_NRC_All_fl, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_fl,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_All_fl,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Principais Sentimentos em Fine Line",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sentimentos',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_All_hh(){
    var ctx_NRC_All_hh = document.getElementById("chart-NRC-All-hh").getContext('2d');
    var dataValues_NRC_All_hh = [28, 25, 22, 22, 17, 17, 15, 8];
    var dataLabels_NRC_All_hh = ['joy', 'anticipation', 'sadness', 'trust', 'fear', 'surprise', 'anger','disgust'];
    var NRC_All_Chart_hh = new Chart(ctx_NRC_All_hh, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_hh,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_All_hh,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Principais Sentimentos em Harry's House",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavras',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Sentimentos',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

//--------------

function showNRC_Pos_hs(){
    var ctx_NRC_Pos_hs = document.getElementById("chart-NRC-Pos-hs").getContext('2d');
    var dataValues_NRC_Pos_hs = [30, 25, 16, 14, 7, 4, 4, 3, 2, 2];
    var dataLabels_NRC_Pos_hs = ['angel','good','baby','sweet','learn','hope','pretty','talk','white','young'];
    var NRC_Pos_Chart_hs = new Chart(ctx_NRC_Pos_hs, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_hs,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Pos_hs,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Positivos em Harry Styles",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Neg_hs(){
    var ctx_NRC_Neg_hs = document.getElementById("chart-NRC-Neg-hs").getContext('2d');
    var dataValues_NRC_Neg_hs = [14, 8, 5, 5, 3, 3, 2, 2, 1, 1];
    var dataLabels_NRC_Neg_hs = ['creature','crying','crazy','losing','argue','spoke','pretend','selfish','bribe','cheap'];
    var NRC_Neg_Chart_hs = new Chart(ctx_NRC_Neg_hs, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_hs,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Neg_hs,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Negativos em Harry Styles",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Pos_fl(){
    var ctx_NRC_Pos_fl = document.getElementById("chart-NRC-Pos-fl").getContext('2d');
    var dataValues_NRC_Pos_fl = [28, 13, 12, 9, 9, 7, 6, 5, 5, 4];
    var dataLabels_NRC_Pos_fl = ['sugar','good','baby','adore','shine','honey','kindness','talk','treat','feeling'];
    var NRC_Pos_Chart_fl = new Chart(ctx_NRC_Pos_fl, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_fl,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Pos_fl,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Positivos em Fine Line",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Neg_fl(){
    var ctx_NRC_Neg_fl = document.getElementById("chart-NRC-Neg-fl").getContext('2d');
    var dataValues_NRC_Neg_fl = [20, 13, 11, 6, 6, 4, 4, 4, 2, 2];
    var dataLabels_NRC_Neg_fl = ['harry','falling','lonely','broken','treat','blame','feeling','pretend','arrogant','bitch'];
    var NRC_Neg_Chart_fl = new Chart(ctx_NRC_Neg_fl, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_fl,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Neg_fl,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Negativos em Fine Line",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Pos_hh(){
    var ctx_NRC_Pos_hh = document.getElementById("chart-NRC-Pos-hh").getContext('2d');
    var dataValues_NRC_Pos_hh = [30, 13, 10, 7, 6, 5, 5, 4, 3, 3];
    var dataLabels_NRC_Pos_hh = ['love','baby','cool','pull','talk','full','intimate','music','kind','green'];
    var NRC_Pos_Chart_hh = new Chart(ctx_NRC_Pos_hh, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_hh,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Pos_hh,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Positivos em Harry's House",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}

function showNRC_Neg_hh(){
    var ctx_NRC_Neg_hh = document.getElementById("chart-NRC-Neg-hh").getContext('2d');
    var dataValues_NRC_Neg_hh = [8, 7, 5, 4, 4, 4, 3, 2, 2, 2];
    var dataLabels_NRC_Neg_hh = ['late','lonely','lost','leave','bout','cursing','worried','harry','haze','feeling'];
    var NRC_Neg_Chart_hh = new Chart(ctx_NRC_Neg_hh, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_hh,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Neg_hh,
            backgroundColor: 'rgba(255, 255, 255, 1)',
        }]
        },
        options: {
          aspectRatio: 1,
            title: {
                display: true,
                text: "Contribuições de Palavras para os Sentimentos Negativos em Harry's House",
                fontColor: 'white'
            },
            legend: {
                labels: {
                fontColor: 'white'
                }
            },
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        fontColor: 'white',
                        beginAtZero: true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Contagem',
                        fontColor: 'white'
                    },
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Palavra',
                        fontColor: 'white'
                    },
                    ticks: {
                        fontColor: 'white'
                    }
                }]
            }
        }
    });
}