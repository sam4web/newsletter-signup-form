import { SuccessIcon } from '../assets';

const SuccessMsg = ({ email, clearEmail }) => (
  <div className='w-full sm:max-w-xl sm:h-fit h-screen mx-auto'>
    <div className='bg-white h-full md:py-12 sm:p-11 pb-16 px-4 sm:rounded-[35px]'>
      <div className='flex max-w-md h-full mx-auto gap-7 flex-col sm:justify-normal justify-center'>
        <img
          src={SuccessIcon}
          alt='success-icon'
          className='w-[64px] h-[64px] sm:mt-0 mt-auto'
        />
        <h1 className='text-dark-slate-grey lg:text-6xl text-5xl font-bold'>
          Thanks for <br /> subscribing!{' '}
        </h1>

        <p className='text-dark-slate-grey font-normal text-lg'>
          A confirmation email has been sent to{' '}
          <span className='font-bold'>{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>

        <button className='button sm:mt-0 mt-auto' onClick={clearEmail}>
          Dismiss message
        </button>
      </div>
    </div>
  </div>
);

export default SuccessMsg;
