function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm-password');
    const checkbox = document.getElementById('company');
    const companyNumber = document.getElementById('companyNumber');
    const submitButton = document.getElementById('submit');
    const companyInfo = document.getElementById('companyInfo');
    const validSection = document.getElementById('valid');

    submitButton.addEventListener('click', onClick);
    checkbox.addEventListener('change', function (e) {
        if (e.target.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    // regex for inputs
    let usernameRegex = /^[A-Za-z\d]{3,20}$/g;
    let emailRegex = /.*@.*\..*/g;
    let passwordRegex = /^[\w_]{5,15}$/g;
    let confirmRegex = /^[\w_]{5,15}$/g;

    function edit(regex, element1, flag) {
        if (!(regex.test(element1.value))) {
            element1.style.borderColor = 'red';
            flag = false;
        } else {
            element1.style.border = 'none';
            flag = true;
        }
    }

    function onClick(e) {
        let isOkay = false;
        e.preventDefault();

        edit(usernameRegex, username, isOkay);
        edit(emailRegex, email, isOkay);

        if ((passwordRegex.test(password.value) && confirmRegex.test(confirm.value) && password.value === confirm.value)) {
            confirm.style.border = 'none';
            password.style.border = 'none';
            isOkay = true;
        } else {
            password.style.borderColor = 'red';
            confirm.style.borderColor = 'red';
            isOkay = false;
        }

        // checkbox
        if (checkbox.checked) {
            if ((Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999)) {
                companyNumber.style.border = 'none';
                isOkay = true;
            } else {
                companyNumber.style.borderColor = 'red';
                isOkay = false;
            }
        }

        if (isOkay) {
            validSection.style.display = 'block';
        } else {
            validSection.style.display = 'none';
        }
    }
}