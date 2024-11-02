most_popular_words_inView = false;
word_count_inView = false;
most_popular_words_melodrama_inView = false;
most_popular_words_pureHeroine_inView = false;
TFIDF_melodrama_inView = false;
TFIDF_pureHeroine_inView = false;
NRC_All_melodrama_inView = false;
NRC_All_pureHeroine_inView = false;
NRC_Pos_melodrama_inView = false;
NRC_Neg_melodrama_inView = false;
NRC_Pos_pureHeroine_inView = false;
NRC_Neg_pureHeroine_inView = false;

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

    if ($('#chart-most-popular-words-melodrama').isOnScreen() && most_popular_words_melodrama_inView == false) {
        most_popular_words_melodrama_inView = true;
        showMostPopularWords_Melodrama();
    }

    if ($('#chart-most-popular-words-pureHeroine').isOnScreen() && most_popular_words_pureHeroine_inView == false) {
        most_popular_words_pureHeroine_inView = true;
        showMostPopularWords_pureHeroine();
    }

    if ($('#chart-TFIDF-melodrama').isOnScreen() && TFIDF_melodrama_inView == false) {
        TFIDF_melodrama_inView = true;
        showTFIDF_Melodrama();
    }

    if ($('#chart-TFIDF-pureHeroine').isOnScreen() && TFIDF_pureHeroine_inView == false) {
        TFIDF_pureHeroine_inView = true;
        showTFIDF_pureHeroine();
    }

    if ($('#chart-NRC-All-melodrama').isOnScreen() && NRC_All_melodrama_inView == false) {
        NRC_All_melodrama_inView = true;
        showNRC_All_Melodrama();
    }

    if ($('#chart-NRC-All-pureHeroine').isOnScreen() && NRC_All_pureHeroine_inView == false) {
        NRC_All_pureHeroine_inView  = true;
        showNRC_All_pureHeroine();
    }

    if ($('#chart-NRC-Pos-melodrama').isOnScreen() && NRC_Pos_melodrama_inView == false) {
        NRC_Pos_melodrama_inView = true;
        showNRC_Pos_Melodrama();
    }

    if ($('#chart-NRC-Neg-melodrama').isOnScreen() && NRC_Neg_melodrama_inView == false) {
        NRC_Neg_melodrama_inView  = true;
        showNRC_Neg_Melodrama();
    }

    if ($('#chart-NRC-Pos-pureHeroine').isOnScreen() && NRC_Pos_pureHeroine_inView == false) {
        NRC_Pos_pureHeroine_inView = true;
        showNRC_Pos_pureHeroine();
    }

    if ($('#chart-NRC-Neg-pureHeroine').isOnScreen() && NRC_Neg_pureHeroine_inView == false) {
        NRC_Neg_pureHeroine_inView  = true;
        showNRC_Neg_pureHeroine();
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

function showMostPopularWords_Melodrama(){
    var ctx_most_popular_words_melodrama = document.getElementById("chart-most-popular-words-melodrama").getContext('2d');
    var dataValues_most_popular_words_melodrama = [29, 25, 24, 23, 20, 20, 19, 19, 16, 15];
    var dataLabels_most_popular_words_melodrama = ['know','none','angel','good','like','tell','gotta','something','away','your'];
    var most_popular_words_Chart_melodrama = new Chart(ctx_most_popular_words_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_melodrama,
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

function showMostPopularWords_pureHeroine(){
    var ctx_most_popular_words_pureHeroine = document.getElementById("chart-most-popular-words-pureHeroine").getContext('2d');
    var dataValues_most_popular_words_pureHeroine = [40, 40, 35, 30, 28, 28, 25, 24, 22, 20];
    var dataLabels_most_popular_words_pureHeroine = ['know','golden','going','ever','like','sugar','watermelon','high','what','thing'];
    var most_popular_words_Chart_pureHeroine = new Chart(ctx_most_popular_words_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_most_popular_words_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_most_popular_words_pureHeroine,
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

//-----------------

function showTFIDF_Melodrama(){
    var ctx_TFIDF_melodrama = document.getElementById("chart-TFIDF-melodrama").getContext('2d');
    var dataValues_TFIDF_melodrama = [0.95,0.9,0.85,0.8,0.75,0.7,0.69,0.65,0.62,0.6];
    var dataLabels_TFIDF_melodrama = ['woman','angel','good','gotta','know','none','tell','something','used','better'];
    var TFIDF_Chart_melodrama = new Chart(ctx_TFIDF_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_melodrama,
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

function showTFIDF_pureHeroine(){
    var ctx_TFIDF_pureHeroine = document.getElementById("chart-TFIDF-pureHeroine").getContext('2d');
    var dataValues_TFIDF_pureHeroine = [1.1,0.85,0.8,0.8,0.78,0.75,0.67,0.66,0.66,0.65];
    var dataLabels_TFIDF_pureHeroine = ['going','golden','call','know','what','again','sunflower','ever','fine','line'];
    var TFIDF_Chart_pureHeroine = new Chart(ctx_TFIDF_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_TFIDF_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_TFIDF_pureHeroine,
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

//-----------------

function showNRC_All_Melodrama(){
    var ctx_NRC_All_melodrama = document.getElementById("chart-NRC-All-melodrama").getContext('2d');
    var dataValues_NRC_All_melodrama = [18, 16, 16, 15, 14, 14, 10, 6];
    var dataLabels_NRC_All_melodrama = ['joy', 'anticipation', 'sadness', 'trust', 'anger', 'fear', 'surprise','disgust'];
    var NRC_All_Chart_melodrama = new Chart(ctx_NRC_All_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_All_melodrama,
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

function showNRC_All_pureHeroine(){
    var ctx_NRC_All_pureHeroine = document.getElementById("chart-NRC-All-pureHeroine").getContext('2d');
    var dataValues_NRC_All_pureHeroine = [20, 20, 17.5, 16, 15, 13, 11, 11];
    var dataLabels_NRC_All_pureHeroine = ['anticipation', 'trust', 'joy', 'sadness', 'anger', 'disgust', 'fear','surprise'];
    var NRC_All_Chart_pureHeroine = new Chart(ctx_NRC_All_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_All_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_All_pureHeroine,
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

//--------------

function showNRC_Pos_Melodrama(){
    var ctx_NRC_Pos_melodrama = document.getElementById("chart-NRC-Pos-melodrama").getContext('2d');
    var dataValues_NRC_Pos_melodrama = [30, 25, 16, 14, 7, 4, 4, 3, 2, 2];
    var dataLabels_NRC_Pos_melodrama = ['angel','good','baby','sweet','learn','hope','pretty','talk','white','young'];
    var NRC_Pos_Chart_melodrama = new Chart(ctx_NRC_Pos_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Pos_melodrama,
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

function showNRC_Neg_Melodrama(){
    var ctx_NRC_Neg_melodrama = document.getElementById("chart-NRC-Neg-melodrama").getContext('2d');
    var dataValues_NRC_Neg_melodrama = [14, 8, 5, 5, 3, 3, 2, 2, 1, 1];
    var dataLabels_NRC_Neg_melodrama = ['creature','crying','crazy','losing','argue','spoke','pretend','selfish','bribe','cheap'];
    var NRC_Neg_Chart_melodrama = new Chart(ctx_NRC_Neg_melodrama, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_melodrama,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Neg_melodrama,
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

function showNRC_Pos_pureHeroine(){
    var ctx_NRC_Pos_pureHeroine = document.getElementById("chart-NRC-Pos-pureHeroine").getContext('2d');
    var dataValues_NRC_Pos_pureHeroine = [28, 13, 12, 9, 9, 7, 6, 5, 5, 4];
    var dataLabels_NRC_Pos_pureHeroine = ['sugar','good','baby','adore','shine','honey','kindness','talk','treat','feeling'];
    var NRC_Pos_Chart_pureHeroine = new Chart(ctx_NRC_Pos_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Pos_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Pos_pureHeroine,
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

function showNRC_Neg_pureHeroine(){
    var ctx_NRC_Neg_pureHeroine = document.getElementById("chart-NRC-Neg-pureHeroine").getContext('2d');
    var dataValues_NRC_Neg_pureHeroine = [20, 13, 11, 6, 6, 4, 4, 4, 2, 2];
    var dataLabels_NRC_Neg_pureHeroine = ['harry','falling','lonely','broken','treat','blame','feeling','pretend','arrogant','bitch'];
    var NRC_Neg_Chart_pureHeroine = new Chart(ctx_NRC_Neg_pureHeroine, {
    type: 'horizontalBar',
    maintainAspectRatio: false,
        data: {
        labels: dataLabels_NRC_Neg_pureHeroine,
        datasets: [{
            label: 'Contagem',
            data: dataValues_NRC_Neg_pureHeroine,
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