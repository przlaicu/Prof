import './App.css';
import { Comment, Student, University } from './Components';

export default function App() {
  // Define data
  const comment = {
    date: new Date(),
    text: 'I love learning React',
    author: {
      name: 'John Doe',
      url: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
    },
  };

  return (
    <div>
      <Comment
        date={comment.date}
        author={comment.author}
        text={comment.text}
      />

      <Student firstName='Ivana' lastName='Horvat' age={40} uid='12345' />

      <University name='Algebra' location='Zagreb' rank={3} />
    </div>
  );
}
