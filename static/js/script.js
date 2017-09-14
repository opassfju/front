function adjustLeftHeight(){
    if ($('#main-left').height() < $('#main-right').height()){
        $('#main-left').height($('#main-right').height());
        $('#main-left').height();
    }
}

function init() {
    $("select").material_select();
    adjustLetfHeight();

}

$(document).ready(init);