function smsSender(params)
{
    this.loginPhoneForm = document.querySelector(params.loginPhoneForm);
    this.loginCodeForm = document.querySelector(params.loginCodeForm);
    this.maskPhone = document.querySelector(params.maskPhone);
    this.maskCode = document.querySelector(params.maskCode);
    this.resultPhone = document.querySelector(params.resultPhone);
    this.smsResult = document.querySelector(params.smsResult);
    this.errorPhone = document.querySelector(params.errorPhone);
    this.errorCode = document.querySelector(params.errorCode);
    this.getCodeButton = document.querySelector(params.getCodeButton);
    this.sendCodeButton = document.querySelector(params.sendCodeButton);

    // let phoneIMask = new IMask(this.maskPhone, {mask: this.maskPhone.getAttribute('data-mask')});
    // phoneIMask.on("accept", () => this.getCodeButton.setAttribute('disabled', 'disabled'));
    // phoneIMask.on("complete", () => this.getCodeButton.removeAttribute('disabled'));
    //
    // let codeIMask = new IMask(this.maskCode, {mask: this.maskCode.getAttribute('data-mask')});
    // codeIMask.on("accept", () => this.sendCodeButton.setAttribute('disabled', 'disabled'));
    // codeIMask.on("complete", () => this.sendCodeButton.removeAttribute('disabled'));
}
smsSender.prototype.timer = function (){
    var count = 60;
    this.countdown = setInterval(()=>{
        count--;
        this.smsResult.querySelector('span').innerText = count;
        if(count == 0) {
            this.smsResult.innerText = this.smsResult.getAttribute('data-load-text');
            this.smsResult.removeAttribute('disabled');
            clearInterval(this.countdown);
        }
    },1000);
}

smsSender.prototype.codeSend = function() {

    this.errorPhone.style.display = 'none';
    this.errorCode.style.display = 'none';
    this.smsResult.style.display = 'none';
    let request = new XMLHttpRequest(),
        params = 'telephone=' + encodeURIComponent(this.maskPhone.value);

    request.open('POST', 'index.php?route=extension/module/sms/getCode', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.responseType = "json";
    request.send(params);
    request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
            const result = request.response;
            if (result.success) {

                this.loginPhoneForm.style.display = 'none';
                this.loginCodeForm.style.display = 'block';
                this.resultPhone.innerHTML = result.phone_text;
                this.smsResult.setAttribute('disabled', 'disabled');
                this.smsResult.style.display = 'block';
                this.smsResult.innerHTML = this.smsResult.getAttribute('data-text');
                this.timer();
            }
            if (result.error) {
                this.errorPhone.innerHTML = result.error;
                this.errorPhone.style.display = 'block';
            }
        }
    }
};

smsSender.prototype.login = function() {
    this.errorCode.style.display = 'none';
    let request = new XMLHttpRequest(),
        params = 'code=' + encodeURIComponent(this.maskCode.value);

    request.open('POST', 'index.php?route=extension/module/sms/sendCode', true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.responseType = "json";
    request.send(params);
    request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
            const result = request.response;
            if(result.redirect){
                // location.href = result.redirect;
                location.reload();
            }
            if (result.error) {
               this.errorCode.innerHTML = result.error;
               this.errorCode.style.display = 'block';
            }
        }
    }
}

smsSender.prototype.back = function() {
    this.loginPhoneForm.style.display = 'block';
    this.loginCodeForm.style.display = 'none';
    this.smsResult.innerHTML = '';
    this.maskCode.value = '';
    clearInterval(this.countdown);
}

