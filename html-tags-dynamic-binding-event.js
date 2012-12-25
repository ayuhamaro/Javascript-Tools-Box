var linkCount = $('a').length;
if(linkCount > 0){
    for(i = 0; i < linkCount; i++){
        var objName = 'a_obj_id_' + i;    //Combination of the id attribute
        $('a')[i].id = objName;
        (function(name){    //Anonymous Function
            $('#' + name).bind('click', function(){  //Tag id attribute event binding
                alert(name);
                return false;
            });
        })(objName);   //Executive function and passing the tag id attribute
        $('a')[i].href = '#';    //Cover tag href attribute
    }
}