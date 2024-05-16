const Contact = () => {
  return (
    <form>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-12'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='firstName' className='font-medium'>
            First Name
          </label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            placeholder='Enter your First Name'
            className='px-3 py-3 border-gray-200 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='lastName' className='font-medium'>
            Last Name
          </label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Enter your Last Name'
            className='px-3 py-3 border-gray-200 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='phoneNumber' className='font-medium'>
            Phone Number
          </label>
          <input
            id='phoneNumber'
            name='phoneNumber'
            type='text'
            placeholder='Enter your Phone Number'
            className='px-3 py-3 border-gray-200 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor='email' className='font-medium'>
            Email
          </label>
          <input
            id='email'
            name='email'
            type='text'
            placeholder='Enter your Email'
            className='px-3 py-3 border-gray-200 border-2 rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-y-2 col-span-full'>
          <label htmlFor='message' className='font-medium'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            placeholder='Enter your Message'
            className='px-3 py-3 border-gray-200 border-2 rounded-lg'
            rows={6}
          />
        </div>
      </div>
      <button
        className='rounded-md bg-primary text-white  py-2 px-8 mt-8 hover:bg-blue-700 transition-all disabled:cursor-not-allowed disabled:bg-gray-300 disabled:hover:bg-gray-300'
        disabled
      >
        Send message!
      </button>
    </form>
  );
};

export default Contact;
