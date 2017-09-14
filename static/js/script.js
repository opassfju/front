/* 調整左邊區塊的高度 */
function adjustLeftHeight(){
    if ($('#main-left').height() < $('#main-right').height()){
        $('#main-left').height($('#main-right').height());
        $('#main-left').height();
    }
}

/* 登入功能 */
function login() {
    var email = "gb0299@gmail.com";
    var password = "fuda1234";

    $.ajax({
        data: 
        {
            email: email,
            password: password
        },
        method: "post",
        url: "http://charliemurmur.info/login",
        //dataType: "jsonp", // 使用jsonp會出現錯誤，why??
        dataType: "json",
        success: function(json) {
            alert(json);
            console.log("Success!!");
            printObj(json); // 測試用
        },
        error: function(xhr, status, err) {
            alert(xhr + ", " + status);
            console.log("Error!!");
            printObj(xhr);
        }
    });
}

/* 註冊功能 */
function join() {
    let email = "gb0299@gmail.com";
    let password = "fuda1234";
    
    $.ajax({
        data: 
        {
            email: email,
            password: password
        },
        method: "post",
        url: "http://charliemurmur.info/join",
        //dataType: "jsonp", // 使用jsonp會出現錯誤，why??
        //corssDomain: true, // 配合此選項的話，上面jsonp就可以正常運行，why??
        dataType: "json",
        success: function(json) {
            alert(json);
            console.log("Success!!");
            printObj(json); // 測試用
        },
        error: function(xhr, status, err) {
            alert(xhr + ", " + status);
            console.log("Error!!");
            printObj(xhr);
        }
    });
}

function init() {
    $("select").material_select();
    adjustLetfHeight();

}

$(document).ready(init);