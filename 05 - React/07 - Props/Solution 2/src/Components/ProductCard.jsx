export default function ProductCard({
  name,
  description,
  price,
  rating,
  imageUrl,
}) {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <span>${price.toFixed(2)}</span>
        <div>
          <span>{rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}
