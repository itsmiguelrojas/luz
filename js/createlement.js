$(document).ready(function(){

  //#first

  $("#first").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span id="first" class="greenlight">' + 'petricor' + '</span>');

    $("#first").on("click", function(){
      $(this).each(function(){
        $(this).replaceWith('<a href="page2.html" class="bluelight" style="text-decoration: none">' + 'ventarrón' + '</a>');

        });
      });

    });
  });

  //#second

  $("#second").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span id="second" class="purplelight">' + 'nos da conciencia' + '</span>');

    $("#second").on("click", function(){
      $(this).each(function(){
        $(this).replaceWith('<span class="orangelight" style="cursor: default;">' + 'nos da firmeza' + '</span>');

        });
      });

    });
  });

  //#third

  $("#third").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span id="third" class="purplelight">' + 'resistir' + '</span>');

    $("#third").on("click", function(){
      $(this).each(function(){
        $(this).replaceWith('<span id="third" class="redlight">' + 'latir' + '</span>');

        $("#third").on("click", function(){
          $(this).each(function(){
            $(this).replaceWith('<span id="third" class="orangelight">' + 'descubrir' + '</span>');

            $("#third").on("click", function(){
              $(this).each(function(){
                $(this).replaceWith('<span id="third" class="greenlight">' + 'fluir' + '</span>');

                $("#third").on("click", function(){
                  $(this).each(function(){
                    $(this).replaceWith('<span id="third" class="pinklight">' + 'reír' + '</span>');

                    $("#third").on("click", function(){
                      $(this).each(function(){
                        $(this).replaceWith('<span class="bluelight" style="cursor: default;">' + 'sentir' + '</span>');

                        });
                      });

                    });
                  });

                });
              });

            });
          });

        });
      });

    });
  });

  //#fourth

  $("#fourth").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span class="redlight" style="cursor: default;">' + 'y volar como paraulata' + '</span>');
    });
  });

  //#fifth

  $("#fifth").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span id="fifth" class="bluelight">' + '"Permítete sentir"' + '</span>');

      $("#fifth").on("click", function(){
        $(this).each(function(){
          $(this).replaceWith('<span id="fifth" class="pinklight">' + '"Escríbete bonito"' + '</span>');

          $("#fifth").on("click", function(){
            $(this).each(function(){
              $(this).replaceWith('<span class="sunlight" style="cursor: default">' + '"Eres energía"' + '</span>');
            });
          });

        });
      });

    });
  });

  //#sixth

  $("#sixth").on("click", function(){
    $(this).each(function(){
      $(this).replaceWith('<span id="sixth" class="bluelight">' + 'el firmamento' + '</span>');

      $("#sixth").on("click", function(){
        $(this).each(function(){
          $(this).replaceWith('<span id="sixth" class="orangelight">' + 'la risa' + '</span>');

          $("#sixth").on("click", function(){
            $(this).each(function(){
              $(this).replaceWith('<span class="greenlight" style="cursor: default;">' + 'la vida' + '</span>');
            });
          });

        });
      });
    });
  });

});
