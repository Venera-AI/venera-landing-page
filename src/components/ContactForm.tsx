import { useState, type ReactNode } from 'react';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { createClient } from '@supabase/supabase-js';
import { AlertTriangle, Loader2 } from 'lucide-react';

const supabase = createClient(
  'https://pzrnjmztpjzvnvewunnl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cm5qbXp0cGp6dm52ZXd1bm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NjQxOTYsImV4cCI6MjA0MDE0MDE5Nn0.ydhbC8T1ua6wYgCvYVgb5ukvBZMzI96Ca3heKd-hook'
);

export const ContactForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <form
      className='grid grid-cols-2 gap-x-8 gap-y-6'
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const fullName = formData.get('fullName');
        const jobPosition = formData.get('jobPosition');
        const phoneNumber = formData.get('phoneNumber');
        const email = formData.get('email');
        const message = formData.get('message');

        const { error } = await supabase.from('contacts').insert({
          full_name: fullName,
          job_position: jobPosition,
          email,
          phone_number: phoneNumber,
          message,
        });

        if (error) {
          setError(error.message);
        } else {
          e.target?.reset();
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false);
          }, 3000);
        }
        setLoading(false);
      }}
    >
      <FieldsContainer extraClasses='sm:col-span-1 col-span-full'>
        <label htmlFor='fullName'>Full Name</label>
        <Input
          placeholder='Akari Mizunashi'
          id='fullName'
          name='fullName'
          required
        />
      </FieldsContainer>

      <FieldsContainer extraClasses='sm:col-span-1 col-span-full'>
        <label htmlFor='jobPosition'>Job Position</label>
        <Input
          placeholder='Enter your job position...'
          id='jobPosition'
          name='jobPosition'
          required
        />
      </FieldsContainer>

      <FieldsContainer extraClasses='sm:col-span-1 col-span-full'>
        <label htmlFor='email'>Email Address</label>
        <Input
          placeholder='Enter your email address...'
          id='email'
          name='email'
          required
          type='email'
        />
      </FieldsContainer>

      <FieldsContainer extraClasses='sm:col-span-1 col-span-full'>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <Input
          placeholder='Enter your phone number...'
          id='phoneNumber'
          name='phoneNumber'
          required
        />
      </FieldsContainer>

      <FieldsContainer extraClasses='col-span-full'>
        <label htmlFor='message'>Message</label>
        <Textarea
          placeholder='Please enter your detailed description here, and be as clear as possible!'
          id='message'
          name='message'
          maxLength={300}
          required
        />
      </FieldsContainer>
      {error && (
        <div className='bg-red-100 rounded-lg border border-red-600 p-3 col-span-full'>
          <div className='flex items-center gap-x-2'>
            <AlertTriangle className='text-red-600' />
            <p className='font-bold'>ERROR</p>
          </div>
          <ul className='list-disc pl-12'>
            <li>{error}</li>
          </ul>
        </div>
      )}
      {successMessage && (
        <div className='bg-green-100 rounded-lg border border-green-600 p-3 col-span-full'>
          <p>Your info has been submitte successfully!</p>
        </div>
      )}
      <div className='flex justify-end col-span-full'>
        <Button disabled={loading} type='submit'>
          {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Submit Form
        </Button>
      </div>
    </form>
  );
};

const FieldsContainer = ({
  children,
  extraClasses,
}: {
  children: ReactNode;
  extraClasses?: string;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-y-3 [&_label]:font-extrabold',
        extraClasses
      )}
    >
      {children}
    </div>
  );
};
