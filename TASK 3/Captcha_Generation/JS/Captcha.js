let isFirstSubmit = true;
let generatedCaptcha = "";

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    try {

        if (isFirstSubmit) {
            generatedCaptcha = Math.floor(1000 + Math.random() * 9000);

            document.getElementById("captchaText").innerText =
                "Captcha: " + generatedCaptcha;
            document.getElementById("captchaSection").style.display = "block";
            isFirstSubmit = false;

        } else {

            let userCaptcha = document.getElementById("captchaInput").value;
            if (userCaptcha == generatedCaptcha) {
                alert("Submitted successfully");
                document.getElementById("myForm").reset();
                document.getElementById("captchaSection").style.display = "none";

                isFirstSubmit = true;
}
 else {
                alert("Invalid captcha");
            }
        }

    } catch (error) {
        console.log("Error occurred:", error);
    }
});
/*try{
    let a = 10;
    let b = 0;
    if(b==0){
        throw "can't divide by 0";
    }
    let result = a/b;
    console.log(result);
}
catch(error){
    console.log("error :", error);
}
*/