// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring

fetch('https://api.edu.skuflic.com/billing')
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((error) => errorFunction(error));

function showData(data) {
  document.getElementById('loading').style.display = 'none';
  let tab = `<thead>
                <tr>
                <th>Cardholder Name</th>
                <th>Cardholder Address</th>
                <th>Card Number</th>
                <th>Expiration</th>
                <th>CVV</th>
                <th>Card</th>
                <th>Status</th>
            </tr>
        </thead>`;

  for (let i of data) {
    let expirationDate = new Date(i.expiration_year, i.expiration_month, 1);
    let date = new Date();

    tab =
      tab +
      `
            <tr ${expirationDate < date ? `class='expired'` : `class='valid'`}> 
            <td>${i.cardholder_name.split(' ').join(', ')}</td>
                        
            <td>${i.billing_address},
                <br>${i.billing_postal_code} ${i.billing_city},
                <br>${i.billing_country}
            </td>

            <td>${i.card_number.substring(
              0,
              4
            )} **** **** **** ${i.card_number.substr(-4)}</td>     
            <td>${i.expiration_month}/${i.expiration_year}</td>
            <td>${i.cvv}</td>
            <td><img src='./assets/images/logo/${
              i.card_type
            }.svg' alt='${i.card_type.split('-').join(' ')}'></td>
            <td>${
              expirationDate < date
                ? `<span class='material-symbols-outlined'>cancel</span><small>Card Expired</small>`
                : `<span class='material-symbols-outlined'> check_circle </span>`
            }</td>
            </tr>`;
  }

  document.getElementById('data').innerHTML = tab;
}

function errorFunction() {
  document.getElementById('error').style.display = 'flex';
}
