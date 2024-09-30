export default function ProductList({ products }) {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div>
            <img src={product.imageUrl} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div>
              <span>${product.price.toFixed(2)}</span>
              <div>
                <span>{product.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
