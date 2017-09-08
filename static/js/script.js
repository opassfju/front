function init() {
    $("select").material_select();
    adjustLetfHeight();

}

$(document).ready(init);


function adjustLetfHeight(){
    if ($('#main-left').height() < $('#main-right').height()){
        $('#main-left').height($('#main-right').height());
        $('#main-left').height();
    }
}