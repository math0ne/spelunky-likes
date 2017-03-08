var toggleSortScore = 0;
var toggleSortAlpha = 0;
var toggleSortAdded = 1;
var toggleSortPublished = 0;

var lastClick = 'added';

jQuery.fn.reverse = [].reverse;

function sortDivs(a,b){
    return $(a).data("score") > $(b).data("score") ? 1 : -1;
};

function sortDivsAlpha(a, b) {
    return $(a).data("name") > $(b).data("name") ? 1 : -1;
}

function sortDivsDate(a,b){
    return new Date($(a).data("published")) > new Date($(b).data("published")) ? 1 : -1;
};

function sortDivsDateAdded(a,b){
    return new Date($(a).data("added")) > new Date($(b).data("added")) ? 1 : -1;
};

$( document ).ready(function() {
  $( ".sort-score" ).click(function() {

    if(toggleSortScore == 0){
      unselect();
      toggleSortScore = 1;
      $( ".sort-score" ).removeClass( "selectedReverse" );
      $( ".sort-score" ).parent().removeClass( "reverse" );
      $( ".sort-score" ).addClass( "selected" );
      $(".post").sort(sortDivs).reverse().appendTo($(".posts"));
    } else {
      if(lastClick == 'score'){
        toggleSortScore = 0;
        $( ".sort-score" ).removeClass( "selected" );
        $( ".sort-score" ).addClass( "selectedReverse" );
        $( ".sort-score" ).parent().addClass( "reverse" );
      } else {
        unselect();
      }
      $(".post").sort(sortDivs).appendTo($(".posts"));
    }

    lastClick = 'score';

  });

  $( ".sort-alpha" ).click(function() {

    if(toggleSortAlpha == 0){
      unselect();
      toggleSortAlpha = 1;
      $( ".sort-alpha" ).removeClass( "selectedReverse" );
      $( ".sort-alpha" ).parent().removeClass( "reverse" );
      $( ".sort-alpha" ).addClass( "selected" );
      $(".post").sort(sortDivsAlpha).appendTo($(".posts"));
    } else {
      if(lastClick == 'alpha'){
        toggleSortAlpha = 0;
        $( ".sort-alpha" ).removeClass( "selected" );
        $( ".sort-alpha" ).addClass( "selectedReverse" );
        $( ".sort-alpha" ).parent().addClass( "reverse" );
      } else {
        unselect();
      }
      $(".post").sort(sortDivsAlpha).reverse().appendTo($(".posts"));
    }

    lastClick = 'alpha';

  });

  $( ".sort-published" ).click(function() {

    if(toggleSortPublished == 0){
      unselect();
      toggleSortPublished = 1;
      $( ".sort-published" ).removeClass( "selectedReverse" );
      $( ".sort-published" ).parent().removeClass( "reverse" );
      $( ".sort-published" ).addClass( "selected" );
      $(".post").sort(sortDivsDate).reverse().appendTo($(".posts"));
    } else {
      if(lastClick == 'published'){
        toggleSortPublished = 0;
        $( ".sort-published" ).removeClass( "selected" );
        $( ".sort-published" ).addClass( "selectedReverse" );
        $( ".sort-published" ).parent().addClass( "reverse" );
      } else {
        unselect();
      }
      $(".post").sort(sortDivsDate).appendTo($(".posts"));
    }

    lastClick = 'published';

  });

  $( ".sort-added" ).click(function() {

    if(toggleSortAdded == 0){
      unselect();
      toggleSortAdded = 1;
      $( ".sort-added" ).removeClass( "selectedReverse" );
      $( ".sort-added" ).parent().removeClass( "reverse" );
      $( ".sort-added" ).addClass( "selected" );
      $(".post").sort(sortDivsDateAdded).reverse().appendTo($(".posts"));
    } else {
      if(lastClick == 'added'){
        toggleSortAdded = 0;
        $( ".sort-added" ).removeClass( "selected" );
        $( ".sort-added" ).addClass( "selectedReverse" );
        $( ".sort-added" ).parent().addClass( "reverse" );
      } else {
        unselect();
      }

      $(".post").sort(sortDivsDateAdded).appendTo($(".posts"));
    }

    lastClick = 'added';

  });

  function unselect(){
    toggleSortScore = 0;
    toggleSortAlpha = 0;
    toggleSortAdded = 0;
    toggleSortPublished = 0;
    $( ".sort-added" ).removeClass( "selected" );
    $( ".sort-published" ).removeClass( "selected" );
    $( ".sort-score" ).removeClass( "selected" );
    $( ".sort-alpha" ).removeClass( "selected" );
    $( ".sort-added" ).removeClass( "selectedReverse" );
    $( ".sort-published" ).removeClass( "selectedReverse" );
    $( ".sort-score" ).removeClass( "selectedReverse" );
    $( ".sort-alpha" ).removeClass( "selectedReverse" );
  }



  var MainNav = $('.MainNav-Button');

  MainNav.on('mousedown', function(){
    var $this = $(this);
    $this.parent().find('.MainNav-Button').removeClass('MainNav-Button_LeftOfActive MainNav-Button_RightOfActive MainNav-Button_Active');
    $this.addClass('MainNav-Button_Active').prev().addClass('MainNav-Button_LeftOfActive');
    $this.next().addClass('MainNav-Button_RightOfActive');
  });

  MainNav.on('click', function(event){
    event.preventDefault();
  });




  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });



});
