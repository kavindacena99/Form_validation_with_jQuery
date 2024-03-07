$(document).ready(function(){
    $("form[name='registration']").validate({
        rules:{
            name:"required",
            mail:{
                required:true,
                email:true
            },
            pswd:{
                required:true,
                minlength:5
            },
            cpswd:{
                required:true,
                minlength:5,
                equalTo:"#pswd"
            }
        },
        messages:{
            name:"Enter your name",
            mail:{
                required:"Enter your Email",
                email:"Enter your valid email"
            },
            pswd:{
                required:"Enter a password",
                minlength:"more than 7 elements"
            },
            cpswd:{
                required:"confirm",
                minlength:"more than 7 elements",
                equalTo:"Not same"
            }
        }
    });
});