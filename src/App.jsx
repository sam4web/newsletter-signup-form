import { useState } from 'react';
import { Newsletter, SuccessMsg, Attribution } from './components';

const App = () => {
  const [email, setEmail] = useState('');

  return (
    <div
      id='page-wrapper'
      className='w-full h-screen md:py-8 flex items-center bg-charcoal-grey'
    >
      <section className='w-full md:px-6 '>
        {!email ? (
          <Newsletter handleSubmit={(value) => setEmail(value)} />
        ) : (
          <SuccessMsg email={email} clearEmail={() => setEmail(null)} />
        )}
      </section>
      <Attribution />
    </div>
  );
};

export default App;
