function demoAlert(){
    alert("Internal Alert.");
}
function demoConfirm(){
    if(confirm("Are you sure..??")){
        alert("YESS");
    }
    else{
        alert("Nooo");
    }
}
function demoPrompt(){
    var fName=prompt("Enter Firstname Here");
    var lname=prompt("Enter Last Name");
    alert(fName+" "+lname);
}
