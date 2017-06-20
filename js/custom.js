/**************************************************************************************/
/** CUSTOM JS**/
/**************************************************************************************/


$(document).ready(function(){
   $('#portfolio-sorting li a').click(function(){
      //remove the current active class
      $('#portfolio-sorting li a.active').removeClass('active');
      //add active class to the clicked button
      $(this).addClass('active');
      //Get the button text (filter value)
      var filterValue = 'cat-' + $(this).text().toLowerCase().replace(' ', '-');

      //if we clicked "ALL" we show all items
      if (filterValue === 'cat-all') {
         $('.portolio-entry').removeClass('hidden');
      }else{
      	//else, if we find the portfolio entry that match the clicked button
      	// and then  add the class of .hidden
      	$('.portolio-entry').each(function(){
            if(!$(this).hasClass(filterValue)) {
            	$(this).addClass('hidden');
            }else{
            	$(this).removeClass('hidden');
            }
      	});
      }
      return false; 

   });
});