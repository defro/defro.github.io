
function moviesToHtml(movies) {
  var top = '';
  var heartbreak = '';
  $.each(movies, function(index, movie) {
      html = '<!-- Movie ' + index + ' -->';
      html += '<div class="movie' + (index % 5 || index == 0 ? '' : ' last') + '">';
      html += '<div class="movie-image">';
      html += '<a href="' + movie.url + '" target="_blank">';
      html += '<span class="play">';
      html += '<span class="name">' + movie.title + '</span>';
      html += '</span> <!-- .play -->';
      html += '<img src="' + movie.img + '" alt="movie" />';
      html += '</a>';
      html += '</div> <!-- .movie-image -->';
      html += '<div class="rating">';
      //html += '<p>RATING</p>';
      html += '<div class="stars">';
      rating = Math.round(movie.rating / 2);
      html += '<div class="stars-in stars-' + rating + '" title="' + movie.rating + '">';
      html += '</div> <!-- .stars-in -->';
      html += '</div> <!-- .stars -->';
      html += '<span class="year">' + movie.year + '</span>';
      html += '</div> <!-- .rating -->';
      html += '</div> <!-- .movie -->';
      html += '<!-- end Movie ' + index + ' -->';
      if (movie.heartbreak) {
        heartbreak += html;
      } else   {
        top += html;
      }
  });
  top += '<div class="cl">&nbsp;</div>';
  heartbreak += '<div class="cl">&nbsp;</div>';
  return {"top":top,"heartbreak":heartbreak};
}


$(document).ready(function(){

  var jqxhr = $.getJSON( "../movies.json", { time: 1 }, function(movies) {
    //console.log( "success" );
  })
    .done(function(movies) {
      html = moviesToHtml(movies);
      $('#js_topmovies').append(html.top);
      $('#js_heartbreak').append(html.heartbreak);
      //console.log( "second success" );
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    })
    .always(function() {
      //console.log( "complete" );
    });

    $("body").delegate(".movie-image", 'mouseenter', function () {
      $(this).find(".play").show();
    });
    $("body").delegate(".movie-image", 'mouseleave', function () {
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
