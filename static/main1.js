var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);


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
                        tabledata += "<th>"+obj.yeardatetime+"</th>"
                        tabledata += "<th><img src="+obj.image+"></th>"
                        tabledata += "</tr>"
                    }

                    document.getElementById("table").innerHTML = tabledata
                }
            });
});
//db값 불러온후 표로 출력하기 