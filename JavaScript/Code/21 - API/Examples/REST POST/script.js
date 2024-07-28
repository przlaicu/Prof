const apiUrl = 'https://api.edu.skuflic.com/users';

const requestData = {
    name: 'Nino Skuflic',
    birthday: '01/03/1996',
    address: {
        street: 'Gradišćanska 24',
        city: 'Zagreb',
        zip: '10000',
        country: 'Hrvatska',
    },
    email: 'nino.skuflic@tratincica.hr',
    phone: '+385-1-1234-567',
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
};

document.querySelector('button').addEventListener('click', () => {
    fetch(apiUrl, requestOptions)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json();
        })
        .then((data) => console.log('Response data: ', data))
        .catch((error) => {
            console.error(error);
        });
});
