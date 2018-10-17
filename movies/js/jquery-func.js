var movies = [
    {
        title: "Gladiator",
        img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt0172495/",
        rating: 8.5,
        comments: 2000
    },
    {
        title: "Fleur du désert",
        img: "https://m.media-amazon.com/images/M/MV5BMTcwODMwMzA0MV5BMl5BanBnXkFtZTcwMTc3ODc1NA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt1054580/",
        rating: 7.4,
        comments: 2009
    }
];

var html = '';
$.each(movies, function(index, movie) {
    html += '<!-- Movie ' + index + ' -->';
    html += '<div class="movie">';
    html += '<div class="movie-image">';
    html += '<a href="' + movie.link + '" target="_blank">';
    html += '<span class="play">';
    html += '<span class="name">' + movie.title + '</span>';
    html += '</span> <!-- .play -->';
    html += '<img src="' + movie.img + '" alt="movie"';
    html += '</a>';
    html += '</div> <!-- .movie-image -->';
    html += '<div class="rating">';
    html += '<p>RATING</p>';
    html += '<div class="stars">';
    html += '<div class="stars-in">';
    html += '</div> <!-- .stars-in -->';
    html += '</div> <!-- .stars -->';
    html += '<span class="comments">' + movie.comments + '</span>';
    html += '</div> <!-- .rating -->';
    html += '</div> <!-- .movie -->';
    html += '<!-- end Movie ' + index + ' -->';
});

$(document).ready(function(){

    $('#js_box').prepend(html);

    $(".movie-image").hover(function(){
        $(this).find(".play").show();
    }, function() {
        $(this).find(".play").hide();
    });

    $(".blink").focus(function() {
        if(this.title==this.value) {
            this.value = '';
        }
    }).blur(function(){
        if(this.value=='') {
            this.value = this.title;
        }
    });
});
