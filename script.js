var input = document.getElementById('name')
    ,value = input.value;

input.addEventListener('input', onInput);

function onInput(e){
    var newValue = e.target.value;
    if( newValue.match(/[^а-яА-Я]/g)) {
    input.value = value;
    return;
    }
    value = newValue;
}






    var re = /(?:([\d]{1,}?))??(?:([\d]{1,3}?))??(?:([\d]{1,3}?))??(?:([\d]{2}))??([\d]{2})$/;
    function handler( elem ) {
        elem.value = elem.value.replace( /[^0-9]/g, '' ).replace( re, function( all, a, b, c, d, e ){
            return ( a ? "+ " + a + " " : "" ) + ( b ? b + " " : "" ) + ( c ? c + "-" : "" ) + ( d ? d + "-" : "" ) + e;
        });
    }
