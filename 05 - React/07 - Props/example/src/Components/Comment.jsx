import PropTypes from 'prop-types';

export default function Comment(props) {
  return (
    <div className='comment'>
      <Author author={props.author} />
      <p>{props.text}</p>
      <p>Author: {props.author.name}</p>
      <small>{formatDate(props.date)}</small>
    </div>
  );
}

// Author Component
function Author(props) {
  return <img id='avatar' src={props.author.url} alt={props.author.name} />;
}

// Function to format Date
function formatDate(date) {
  return date?.toLocaleDateString('en-US');
}

// Validation of Properties
Comment.propTypes = {
  text: PropTypes.string,
  date: PropTypes.any,
  author: PropTypes.object,
};

// Default Props
Comment.defaultProps = {
  text: 'Unknown',
  date: new Date(),
  author: {
    name: 'Unknown Author',
    url: 'https://placehold.co/100x100',
  },
};
