//William Armsworthy- 200340314
// WEBSITE NAME (https://phpmidterm-200340314.herokuapp.com/index.php)

// IIFE - Immediately Invoked Function Expression

(function(){
    $(".btn-danger").click(function(event){

        if(!confirm("Are You Sure?")) {
            event.preventDefault();
            window.location.assign("./index.php");
        }
    });
})();
