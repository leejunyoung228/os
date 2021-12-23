var oScript = document.createElement("script");
oScript.type = "text/javascript";
oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
document.getElementsByTagName("head")[0].appendChild(oScript);


function openphoto() {
	    alert("hello")
            $.ajax({
                type: 'GET',
                url: '/move',
                success: function(data) {
		    alert(data)
                    var tabledata = ""
                    for(var i in data) {

                        tabledata += "<tr>"
                        tabledata += "<th>"+i[1]+"</th>"
                        tabledata += "<th>"+"{{ url_for('static', filename="+i[1]+") }}"+"</th>"
                        tabledata += "</tr>"
                    }

                    document.getElementById("table").innerHTML = tabledata
                }
            });
});
//db값 불러온후 표로 출력하기 