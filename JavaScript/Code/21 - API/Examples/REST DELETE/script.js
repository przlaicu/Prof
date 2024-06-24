document.querySelector('button').addEventListener('click', () => {
    const userID = prompt('Which user do you want to delete?');
    const apiUrl = `https://api.edu.skuflic.com/users/${userID}`;

    const requestOptions = {
        method: 'DELETE',
        headers: {
            // Include any required headers such as authentification tokens, etc.
        },
    };

    fetch(apiUrl, requestOptions)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not OK. Aborting.');
            }
            alert(`User with ID ${userID} was deleted successfully.`);
        })
        .catch((error) => {
            console.error('Error', error);
        });
});
