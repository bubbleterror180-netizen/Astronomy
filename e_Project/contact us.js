    document.addEventListener('DOMContentLoaded', function () {
        let contactForm = document.getElementById('contactForm');
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let messageInput = document.getElementById('message');
        let nameError = document.getElementById('nameError');
        let emailError = document.getElementById('emailError');
        let messageError = document.getElementById('messageError');
        let successMessage = document.getElementById('successMessage');

        function validateName() {
            if (nameInput.validity.valid) {
                nameInput.classList.remove('input-error');
                nameInput.classList.add('input-success');
                nameError.style.display = 'none';
                return true;
            } else {
                nameInput.classList.remove('input-success');
                nameInput.classList.add('input-error');
                nameError.style.display = 'block';
                return false;
            }
        }

        function validateEmail() {
            if (emailInput.validity.valid) {
                emailInput.classList.remove('input-error');
                emailInput.classList.add('input-success');
                emailError.style.display = 'none';
                return true;
            } else {
                emailInput.classList.remove('input-success');
                emailInput.classList.add('input-error');
                emailError.style.display = 'block';
                return false;
            }
        }

        function validateMessage() {
            if (messageInput.validity.valid) {
                messageInput.classList.remove('input-error');
                messageInput.classList.add('input-success');
                messageError.style.display = 'none';
                return true;
            } else {
                messageInput.classList.remove('input-success');
                messageInput.classList.add('input-error');
                messageError.style.display = 'block';
                return false;
            }
        }

        nameInput.addEventListener('input', validateName);
        emailInput.addEventListener('input', validateEmail);
        messageInput.addEventListener('input', validateMessage);

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isNameValid = validateName();
            let isEmailValid = validateEmail();
            let isMessageValid = validateMessage();

            if (isNameValid && isEmailValid && isMessageValid) {
                successMessage.style.display = 'block';
                contactForm.reset();

                nameInput.classList.remove('input-success');
                emailInput.classList.remove('input-success');
                messageInput.classList.remove('input-success');

                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    });
    let btn = document.getElementById('bt1')
    console.log(bt1);
    btn.addEventListener('click', () => {
        let icu = document.getElementById('icon')
        let locate = document.getElementById('map')
        locate.style.display = 'block'
        icu.style.display = 'none'
        btn.style.display = 'none'
        console.log('Click');
        let geoLocation = navigator.geolocation
        console.log(geoLocation);
        if (geoLocation) {
            geoLocation.getCurrentPosition(function (position) {
                let latitude = position.coords.latitude;
                let longitude = position.coords.longitude;
                let map = L.map('map').setView([latitude, longitude], 13);
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
                let marker = L.marker([latitude, longitude]).addTo(map);
                let circle = L.circle([latitude, longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 100
                }).addTo(map);
            })
        }
    })