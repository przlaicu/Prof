## Zadatak 📝

1. U vježbi je potrebno napraviti dvije komponente u dvije odvojene datoteke - ProductCard.jsx i ProductList.jsx.
2. Datoteke je potrebno exportati putem index.js datoteke (custom file)
3. Unutar App.js potrebno je napraviti iskoristiti sljedeći objekt i array:

```
  const product = {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 199.99,
    rating: 4.5,
    imageUrl: 'https://placehold.co/300x200',
  };

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 199.99,
      rating: 4.5,
      imageUrl: 'https://placehold.co/300x200',
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model with advanced camera and long battery life.',
      price: 699.99,
      rating: 4.8,
      imageUrl: 'https://placehold.co/300x200',
    },
    {
      id: 3,
      name: 'Laptop',
      description: 'Powerful and lightweight laptop for professionals.',
      price: 1299.99,
      rating: 4.7,
      imageUrl: 'https://placehold.co/300x200',
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Fitness tracker with heart rate monitor and GPS.',
      price: 249.99,
      rating: 4.2,
      imageUrl: 'https://placehold.co/300x200',
    },
    {
      id: 5,
      name: 'Wireless Earbuds',
      description: 'Compact earbuds with great sound quality.',
      price: 129.99,
      rating: 4.0,
      imageUrl: 'https://placehold.co/300x200',
    },
  ];
```

4. Objekt product proslijedite komponenti ProductCard.jsx. Unutar ProductCard.jsx prikažite podatke kao na rješenju.
5. Array products proslijedite komponenti ProductList.jsx. Unutar ProductList.jsx prikažite podatke kao na rješenju. Pripazite na to da je data type ARRAY stoga će te trebati iterirati kroz array.
