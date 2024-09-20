export default function Component() {
  const user = {
    firstName: 'Lisa',
    lastName: 'Simpson',
    job: 'Saxophone Player',
    age: 8,
    enrolled: true,
    parents: {
      father: 'Homer Simpson',
      mother: 'Marge Simpson',
    },
    hobbies: ['Reading', 'Playing saxophone', 'Environmental activism'],
  };

  function checkSchoolGrade(user) {
    if (user.age >= 11) {
      return `${user.firstName} is in middle school or higher.`;
    } else {
      return `${user.firstName} is still in elementary school.`;
    }
  }

  return (
    <div className='max-w-2xl mx-auto mt-10 p-6 bg-yellow-100 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold mb-4 text-blue-600'>
        {user.firstName} {user.lastName}
      </h1>
      <h2 className='text-xl mb-3'>
        {`Hello! ${user.firstName} ${user.lastName}`} is {user.age} year(s) old,
        her passion is {user.job} and she is currently{' '}
        {user.enrolled
          ? 'enrolled in school. Great!'
          : 'not enrolled in school. Oh no!'}
      </h2>
      <h3 className='text-lg mb-3'>
        Our user has {user.hobbies.length} hobby/hobbies. They are:{' '}
        {user.hobbies.join(', ')}.
      </h3>
      <h4 className='text-lg mb-3'>{checkSchoolGrade(user)}</h4>
      <h5 className='text-lg mb-3'>
        Parents: {user.parents.father} and {user.parents.mother}
      </h5>
      <p className='text-sm text-gray-600'>
        &copy; {new Date().getFullYear()} Springfield Elementary
      </p>
    </div>
  );
}
