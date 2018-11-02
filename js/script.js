
function loadPage() {

    $('.btn').click(function(){
        var text = $('.text-area').val();
        if (text !== "") {
            $('.task').append('<li class="to-do-task">' + text + ' <i class="fas fa-minus-circle   remove"></i>'+ ' <input type="checkbox" class="check-box">' + '</li>');
            $(".text-area").val("");
        }
        else{
            preventDefault();
        }
    
    
        $('.check-box').click(function(){
            if($(this).is(':checked')) {
                // console.log(this);
                // console.log("checked");
                $(this).parent().prependTo('.done');
                $(this).parent().css('text-decoration','line-through');
                $(this).remove();
                
            }
            else{
                // console.log("not checked");
                preventDefault();
            }
        } );
    
    
        $('.remove').click(function() {
            // console.log(this);
            // console.log("removed");
            $(this).parent().remove();
            
        });   

    });
    
    
    var text = $('.text-area');
    $(text).val("");


};













