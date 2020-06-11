"use strict";

$(document).ready(function () {
    var url = "https://ghibliapi.herokuapp.com/films/";
    //sending request to server
    $.ajax(url, {
        type: "GET"
    }).done(function (data, index) {

        renderMovies();

        // render html//
        function renderMovies() {
            for (let i = 0; i < data.length; i++) {
                let movieTitleHTML = `
                                  <div class="col-sm-4">
                                      <div class="card mt-3">
                                           <div class="card-body pt-2">
                                              <h5 class="card-title text-center">${data[i].title}</h5>
                                              <hr>
                                               <p class="card-text">${data[i].description}</p>
                                               <p class="card-text">Date released: ${data[i].release_date}</p>
                                               <p class="card-text">Director: ${data[i].director}</p>
                                               <p class="card-text">Rotten Tomatoes Score: ${data[i].rt_score}</p>
                                            </div>
                                       </div>
                                  </div>`;
                $('.row').append(movieTitleHTML);
            }
        }


        function filterMovies() {
            let searchTerm = $('#search-term').val();
            // console.log(searchTerm);
            for (let i = 0; i < data.length; i++) {
                if (searchTerm === data[i].title) {
                    $('.row').hide();
                    let filterMovieTitleHTML =
                        `<div class="col-sm-1">
                                      <div class="card" >
                                           <div class="card-body">
                                                <div>
                                                    <h5 class="card-title">${data[i].title}</h5>
                                                 </div>
                                               <p class="card-text">${data[i].description}</p>
                                               <p class="card-text">Date released: ${data[i].release_date}</p>
                                               <p class="card-text">Director: ${data[i].director}</p>
                                               <p class="card-text">Rotten Tomatoes Score: ${data[i].rt_score}</p>
                                            </div>
                                       </div>
                                  </div>`;
                    $('.row1').append(filterMovieTitleHTML);
                }
            }
        }

        $('#do-search').click(function (e) {
            e.preventDefault();
            filterMovies();
        });
    }).fail(function (error) {
        console.error(error);
    }).always(function () {
        console.log('you always run once you get a response')
    });
});


