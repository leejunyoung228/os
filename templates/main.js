var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);

var clickRecord = document.querySelector("#record");


$().ready(function () {
    $("#record").click(function () {
        Swal.fire({
            title: '정말로 기록 볼거냐?',
            text: "후회하는 짓은 하지말자고",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '예',
            cancelButtonText: '아니오'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    location.href = "main1.html"
                )
            }
        })
    });
});//메인에서 버튼 클릭했을때 뜨는 알림

