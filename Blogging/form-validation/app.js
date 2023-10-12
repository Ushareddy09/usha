function validate()

    {
        const a =document.getElementById("mail").value;
        const b =document.getElementById("paswrd").value.trim();
        var regx= /^(^vtu)([0-9]{5})+@veltech.edu.in$/i;
        if(a=="" && b=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter all fields")
            return false;
        }
        else if(a=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter email")
            return false;
        }
        else if(b=="")
        {
            document.getElementById("name").style.visibility="visible";
            alert("plz enter password")
            return false;
        }
        else
        {
            if(regx.test(a))
            {
                document.getElementById("name").innerHTML="Valid";
                document.getElementById("name").style.visibility="visible";
                document.getElementById("name").style.color="green";
                if(b.length<7)
                {
                    document.getElementById("psw").innerHTML="Invalid";
                    document.getElementById("psw").style.visibility="visible";
                    document.getElementById("psw").style.color="red";
                    alert("plz enter password with min of 7 lenght")
                    return false;
                }
                if(!/[a-z]/.test(b)&& !/[A-Z]/.test(b) && !/[0-9]/.test(b) && !/[@,#,$,&,*]/.test(b))
                {
                    document.getElementById("psw").innerHTML="Invalid";
                    document.getElementById("psw").style.visibility="visible";
                    document.getElementById("psw").style.color="red";
                    alert("password must contain atleast one lowercase,upercase,sepcial character and a number");
                    return false;
                }
                
                else
                {
                    document.getElementById("psw").innerHTML="Valid";
                    document.getElementById("psw").style.visibility="visible";
                    document.getElementById("psw").style.color="green";
                    return true;
                }
            }
            else
            {
                document.getElementById("name").innerHTML="Invalid";
                document.getElementById("name").style.visibility="visible";
                document.getElementById("name").style.color="red";
                return false;
            }
        }
    }



