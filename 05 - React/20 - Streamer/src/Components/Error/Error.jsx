export default function Error(props) {
  return (
    <div className='error'>
      <h1>That's an error!</h1>
      <p>Details: {props.error}</p>
    </div>
  );
}
