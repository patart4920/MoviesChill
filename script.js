/*global $*/
$(document).ready(function(){





console.log("hello");

function conversion(x) { 
    return (x) ; }
    
$("#B1").click(function(){
 var input = $("input").val();
 $("#movies").html(conversion(input));
    
$.ajax({
    url:"https://www.omdbapi.com/?apikey=8e9ded79&s=" + input,
    method:"GET",
    success: function(response){
        
        var result = response.Search[0].Title;
        var picture = response.Search[0].Poster;
    
        
        console.log(result);
        
$("body").append(result);


$("body").append(picture);
    console.log(picture);
     $("#img").html("<img src = " + picture + ">");
    },
    
    
});

    
});
   
   
      $("#B2").click(function(){
      location.reload(); 
        }); 
});

