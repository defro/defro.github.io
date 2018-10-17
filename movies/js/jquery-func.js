var movies = [
    {
        title: "Gladiator",
        img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt0172495/",
        rating: 8.5,
        comments: 2000
    },
    {
        title: "Exit Through the Gift Shop",
        img: "https://m.media-amazon.com/images/M/MV5BMjE2NTg1NDM4Ml5BMl5BanBnXkFtZTcwMzMxOTkyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt1587707/",
        rating: 8.0,
        comments: 2010
    },
    {
        title: "Fight Club",
        img: "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt0137523/",
        rating: 8.8,
        comments: 1999
    },
    {
        title: "Fleur du désert",
        img: "https://m.media-amazon.com/images/M/MV5BMTcwODMwMzA0MV5BMl5BanBnXkFtZTcwMTc3ODc1NA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt1054580/",
        rating: 7.4,
        comments: 2009
    },
    {
        title: "The Departed",
        img: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt0407887/",
        rating: 8.5,
        comments: 2006
    },
    {
        title: "Straight Outta Compton",
        img: "https://m.media-amazon.com/images/M/MV5BMTA5MzkyMzIxNjJeQTJeQWpwZ15BbWU4MDU0MDk0OTUx._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt1398426/",
        rating: 7.9,
        comments: 2015
    },
    {
        title: "Gainsbourg (Vie héroïque)",
        img: "https://m.media-amazon.com/images/M/MV5BMTM1NTYxNDk4Ml5BMl5BanBnXkFtZTcwNDUwMTM2Mw@@._V1_.jpg",
        link: "https://www.imdb.com/title/tt1329457",
        rating: 6.9,
        comments: 2010
    },
    {
        title: "La vita è bella",
        img: "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        link: "https://www.imdb.com/title/tt0118799",
        rating: 8.6,
        comments: 1997
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
    html += '<img src="' + movie.img + '" alt="movie" />';
    html += '</a>';
    html += '</div> <!-- .movie-image -->';
    html += '<div class="rating">';
    //html += '<p>RATING</p>';
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
