// bind with reference
var etFirstName = document.getElementById("first_name");
var etLastName = document.getElementById("last_name");
var etEmail = document.getElementById("user_email");
var rgGender = document.getElementsByName("gender");
var district = document.getElementById("dd_district");

var spFirstName = document.getElementById("span_first_name");
var spLastName = document.getElementById("span_last_name");
var spEmail = document.getElementById("span_email");
var spGender = document.getElementById("span_gender");
var spDistrict = document.getElementById("span_district");

  var emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validation(){
    if(etFirstName.value.length == 0){
        etFirstName.style.borderColor = "red";
        spFirstName.style.visibility = "visible";
    }
    else {
        etFirstName.style.border= "1px solid";
        spFirstName.style.visibility = "hidden";
    }
    if(etLastName.value.length == 0){
        etLastName.style.borderColor = "red";
        spLastName.style.visibility = "visible";
      
    }
    else {
         etLastName.style.border= "1px solid";
        spLastName.style.visibility = "hidden";
    }
    if(etEmail.value.length == 0){
        etEmail.style.borderColor = "red";
        spEmail.style.visibility = "visible";

    }
    else {
        if(emailFilter.test(etEmail.value)){ 
            etEmail.style.border= "1px solid";
            spEmail.style.visibility = "hidden";
        }
        else{
            etEmail.style.borderColor = "red";
            spEmail.style.visibility = "visible"; 
            spEmail.innerHTML = "*Please Provied a Valid Email";
        }
    }
    if(district.selectedIndex== 0){
        spDistrict.style.visibility = "visible";
    }
    else{
      spDistrict.style.visibility = "hidden";  
    }
    for(var i =0 ; i< rgGender.length;i++){
        if(rgGender[i].checked){
            break;
        }
    }
    if(rgGender.length == i){
        spGender.style.visibility = "visible";
        return false; 
    }else{
        spGender.style.visibility = "hidden";
    }
    
    if(etFirstName.value.length == 0 || etLastName.value.length == 0 || etEmail.value.length == 0 || emailFilter.test(etEmail.value) == false || district.selectedIndex == 0){
    return false;        
    }
}