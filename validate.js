/**
 * Created by Sharanjeet Kaur on 2017-01-18.
 */
window.onload=pageLoad;
function pageLoad() {


    var feedForm=document.getElementById("feedForm");
    feedForm.onsubmit=processForm;
    function processForm() {

        /* getting objects from html*/
        var fname = feedForm.fname;
        var lname = feedForm.lname;
        var email = feedForm.email;
        var fnameErr = document.querySelector("#fnameErr");
        var lnameErr = document.querySelector("#lnameErr");
        var emailErr = document.querySelector("#emailErr");
        var phoneErr = document.querySelector("#phoneErr");
        var genderErr = document.querySelector("#genderErr");
        var cnfrmErr = document.querySelector("#cnfrmErr");
        /*must enter value validations*/
       if(fname.value === "")
       {


           fnameErr.innerHTML="First name can not be empty";
           return false;
       }
       else
       {
           feedForm.fname.style.background="white";
           fnameErr.innerHTML="";
       }
        if(lname.value === "")
        {


            lnameErr.innerHTML="Last name can not be empty";
            return false;
        }
        else
        {
            feedForm.lname.style.background="white";
            lnameErr.innerHTML="";
        }


        /* email validation*/
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!filter.test(feedForm.email.value))
        {


            emailErr.innerHTML="Please Enter a valid Email";
            return false;

         }
         else
        {
            email.innerHTML="";
        }


        /* Phone Number Format validation*/
         var phnregex=/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;

        if(!phnregex.test(feedForm.phone.value))
        {

            phoneErr.innerHTML="Please Enter phone number in correct format like 123-456-7890";
            return false;
        }

        /* Radio button validation*/
        var r=document.getElementsByName("gender");
         var gen=-1;
         for (var i=0;i< r.length;i++)
         {
             if(r[i].checked)
             {
                 gen=i;
             }
         }
         if(gen === -1)
         {

             genderErr.innerHTML="Must select a value";
             return false;
         }
         else
         {
             genderErr.innerHTML="";
         }
            /* check box validation*/
         if(!feedForm.agree.checked)
         {

             cnfrmErr.innerHTML="Please Enter a valid Email";
             return false;
         }
         else
         {
             cnfrmErr.innerHTML="";
         }
         /* Form Validated then displaying the thank you message*/
         var result=document.getElementById("confirm");
         result.style.display="block";
         var disfname=document.querySelector("#disfname");
         disfname.innerHTML=fname.value;
         return false;


    }

}
