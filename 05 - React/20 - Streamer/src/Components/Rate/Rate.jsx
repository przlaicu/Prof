import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { options } from '../../Helpers/utils';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';

export default function Rate(props) {
  // State Management
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [rated, setRated] = useState(false);

  // Path Parameters
  const params = useParams();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/authentication/guest_session/new`,
          options
        );
        const result = await response.json();
        setSession(result.guest_session_id);
      } catch (error) {
        setError(error);
      }
    };
    fetchSession();
  }, []);

  const handleRating = (rate) => {
    const ratingValue = { value: `${rate * 2}` };

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ratingValue),
    };

    const submitRating = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_API_VERSION}/${props.type}/${params.ID}/rating?guest_session_id=${session}`,
          options
        );
        const result = await response.json();
        if (result.success) {
          setRated(true);
        }
      } catch (error) {
        setError(error);
      }
    };
    submitRating();
  };

  return (
    <div className='rate'>
      <h1>Thank you for rating this {props.title}.</h1>
      {error && <Error error={error?.message} />}
      {!rated && (
        <div className='stars'>
          <Rating allowFraction onClick={handleRating} size='50px' transition />
        </div>
      )}
    </div>
  );
}
