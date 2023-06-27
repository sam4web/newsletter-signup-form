import { useState } from 'react';
import { IllustrationDesktop, IllustrationMobile, ListIcon } from '../assets';

const Newsletter = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState(null);

  const checkInput = (e) => {
    e.preventDefault();
    const errors = {};
    if (!email) errors.email = 'Email is required';
    else if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email))
      errors.email = 'Valid email is required';

    if (Object.keys(errors).length !== 0) {
      setErrors(errors);
      return;
    }

    handleSubmit(email);
  };

  const listItems = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!',
  ];

  return (
    <div className='w-full max-w-[980px] mx-auto'>
      <div className='bg-white flex lg:p-9 md:py-7 md:px-6 p-0 md:rounded-[35px] lg:gap-7 md:gap-5 gap-0 md:flex-row flex-col-reverse'>
        <div className='flex-1 flex flex-col justify-center lg:gap-6 md:gap-4 gap-5 md:p-0 pt-6 pb-16 px-4'>
          <h1 className='text-dark-slate-grey lg:text-6xl text-5xl font-bold'>
            Stay updated!
          </h1>
          <p className='text-dark-slate-grey font-normal text-lg'>
            Join 60,000+ product managers reveiving monthly updates on:
          </p>
          {/* /content */}

          <ul>
            {listItems.map((item, idx) => (
              <li
                key={idx}
                className='flex md:items-center items-start md:gap-4 gap-2 lg:mb-3 mb-2 text-dark-slate-grey font-normal text-lg'
              >
                <img src={ListIcon} alt='' />
                {item}
              </li>
            ))}
          </ul>
          {/* /list-items */}

          <form noValidate onSubmit={checkInput}>
            <div className='mb-6'>
              <div className='mb-2 flex justify-between'>
                <label
                  htmlFor='email'
                  className='text-dark-slate-grey font-bold text-sm'
                >
                  Email address
                </label>
                <p className='text-tomato font-bold text-sm'>{errors?.email}</p>
              </div>
              {/* label-container */}

              <input
                type='email'
                placeholder='email@company.com'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${errors ? 'error-input-field' : ''} input-field`}
              />
              {/* /input-box */}
            </div>
            {/* /input-container */}

            <button className='button'>Subscribe to monthly newsletter</button>
            {/* /button */}
          </form>
          {/* /email-form */}
        </div>
        {/* /content-container */}

        <div className='flex-1'>
          <picture>
            <source srcSet={IllustrationMobile} media='(max-width: 767px)' />
            <img src={IllustrationDesktop} alt='' className='w-full' />
          </picture>
        </div>
        {/* /image-container */}
      </div>{' '}
    </div>
  );
};

export default Newsletter;
