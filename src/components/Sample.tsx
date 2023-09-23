import { useState } from 'react';

const sampleFile = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});

function Sample() {
  const [loading, setLoading] = useState<'idle' | 'loading' | 'resolved'>(
    'idle'
  );

  const renderAnalysisContent = () => {
    if (loading === 'idle') {
      return (
        <div className='w-full h-full flex items-center justify-center text-gray-400 text-center'>
          A sample file has been selected just for your experience! Please click
          on the Submit button to retrieve the sample diagnosis
        </div>
      );
    }

    if (loading === 'loading') {
      return (
        <div className='animate-pulse space-x-4'>
          <div className='space-y-6 py-1'>
            <div className='h-2 bg-slate-500 rounded'></div>
            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-4'>
                <div className='h-2 bg-slate-500 rounded col-span-2'></div>
                <div className='h-2 bg-slate-500 rounded col-span-1'></div>
              </div>
              <div className='h-2 bg-slate-500 rounded'></div>
            </div>
            <div className='space-y-3'>
              <div className='grid grid-cols-3 gap-4'>
                <div className='h-2 bg-slate-500 rounded col-span-2'></div>
                <div className='h-2 bg-slate-500 rounded col-span-1'></div>
              </div>
              <div className='h-2 bg-slate-500 rounded'></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dicta
        nisi, repellat aliquam sint quasi? Veritatis eos incidunt repellendus,
        commodi animi repellat reiciendis hic minus voluptate enim excepturi.
        Incidunt, expedita. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Adipisci dicta nisi, repellat aliquam sint quasi? Veritatis eos
        incidunt repellendus, commodi animi repellat reiciendis hic minus
        voluptate enim excepturi. Incidunt, expedita. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Adipisci dicta nisi, repellat
        aliquam sint quasi? Veritatis eos incidunt repellendus, commodi animi
        repellat reiciendis hic minus voluptate enim excepturi. Incidunt,
        expedita. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci dicta nisi, repellat aliquam sint quasi? Veritatis eos incidunt
        repellendus, commodi animi repellat reiciendis hic minus voluptate enim
        excepturi. Incidunt, expedita. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Adipisci dicta nisi, repellat aliquam sint quasi?
        Veritatis eos incidunt repellendus, commodi animi repellat reiciendis
        hic minus voluptate enim excepturi. Incidunt, expedita.
      </p>
    );
  };

  return (
    <div className='grid grid-cols-2 lg:max-w-5xl mx-auto gap-8 md:max-w-3xl'>
      <div className='bg-white px-12 py-16 rounded-lg col-span-full lg:col-span-1'>
        <h6 className='text-primary font-medium text-xl mb-3'>
          Upload your CSV file
        </h6>
        <p className='text-gray-400 mb-8'>
          We’ll process the file and return the patient’s diagnosis
        </p>

        <div className='flex flex-col mb-8 gap-2 cursor-not-allowed'>
          <p className='font-medium'>CSV File</p>
          {/*<input
            value='C:\fakepath\sample.png'
            onChange={(e) => {
              console.log(e.target.value);
              console.log(typeof e.target.value);
            }}
            type='file'
            name='fileUpload'
            id='fileUpload'
            className='border-2 px-2 py-2 rounded-md file:bg-transparent file:font-medium file:mr-3 file:border-0 file:border-r-2 file:border-gray-300 file:pr-3 file:cursor-pointer file:border-solid file:ring-red-300 cursor-pointer'
            placeholder='ab'
          /> */}
          <div className='flex justify-start items-center border-2 rounded-md border-gray-300 px-3 py-2 gap-3'>
            <p className='font-medium'>Choose File</p>
            <div className='w-0.5 h-8 bg-gray-200'></div>
            <p>Minh Tran.csv</p>
          </div>
        </div>
        <button
          className='rounded-md bg-primary text-white w-full py-2 mb-2'
          onClick={() => {
            console.log('clicking');
            setLoading('loading');
            setTimeout(() => {
              setLoading('resolved');
            }, 3000);
          }}
        >
          Submit
        </button>
        <button
          className='rounded-md bg-gray-300 w-full py-2'
          onClick={() => {
            setLoading('idle');
          }}
        >
          Reset
        </button>
      </div>
      <div className='bg-white relative rounded-lg px-12 py-16 col-span-full lg:col-start-2'>
        <h6 className='text-primary font-medium text-xl mb-3'>Diagnosis</h6>
        {renderAnalysisContent()}
      </div>
    </div>
  );
}

export default Sample;
