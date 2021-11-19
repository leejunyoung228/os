clickRecord.addEventListener("click", function(){
    $.ajax({
        type: 'GET',
        url: '/movemain1'
    })
})
// 메인 -> 표




clickRecord.addEventListener("click", function() {
            $.ajax({
                type: 'GET',
                url: '/selectdb',
                datatype:'json',
                success: function(data) {
                    var tabledata = ""
                    for(var i in data) {
                        obj = JSON.parse(data[i][1])
                        tabledata += "<tr>"
                        tabledata += "<th>"+data[i][0]+"</th>"
                        tabledata += "<th>"+obj.yeardate+"</th>"
                        tabledata += "<th>"+obj.time+"</th>"
                        tabledata += "</tr>"
                    }

                    document.getElementById("table").innerHTML = tabledata
                }
            });
});
//db값 불러온후 표로 출력하기 