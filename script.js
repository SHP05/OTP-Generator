let ans = document.getElementById("ans");
    let sub = document.getElementById("sub");
    let ent = document.getElementById("enter");
    let p1 = document.getElementById("p1");
    let n;
    ent.focus();
    function otp()
    { ent.focus();
        n = Math.floor(Math.random()*1000000);
        // ans.innerHTML = n;
        alert(`Your OTP is ${n}`);
    }
    console.log("hello");
    function check()
    {   ent.focus();
        if(ent.value == n)
        p1.innerHTML = "Your OTP is true";
        else
        p1.innerHTML = "Your OTP is wrong , Please try again";
    }