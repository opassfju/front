/* 登入功能 */
function login(email, password) {
    if(!email || !password){ // 如果資料有誤，就回傳錯誤訊息
        alert("Invalid Data!!");
    } else {
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
}