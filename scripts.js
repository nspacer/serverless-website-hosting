//add your api here below
var API_ENDPOINT = "Paste endpoint URL"
//AJAX GET REQUEST
document.getElementById("saveprofile").onclick = function(){
  var inputData = {
    "empId":$('#empid').val(),
        "empFirstName":$('#fname').val(),
        "empLastName":$('#lname').val(),
    "empAge":$('#empage').val()           
      };
  $.ajax({
        url: API_ENDPOINT,
        type: 'POST',
        data:  JSON.stringify(inputData)  ,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
          document.getElementById("profileSaved").innerHTML = "Profile Saved!";
        },
        error: function () {
            alert("error");
        }
    });
}
//AJAX GET REQUEST
document.getElementById("getprofile").onclick = function(){  
  $.ajax({
        url: API_ENDPOINT,
        type: 'GET',
         contentType: 'application/json; charset=utf-8',
        success: function (response) {
          $('#employeeProfile tr').slice(1).remove();
          jQuery.each(response, function(i,data) {          
            $("#employeeProfile").append("<tr> \
                <td>" + data['empId'] + "</td> \
                <td>" + data['empFirstName'] + "</td> \
                <td>" + data['empLastName'] + "</td> \
                <td>" + data['empAge'] + "</td> \
                </tr>");
          });
        },
        error: function () {
            alert("error");
        }
    });
}