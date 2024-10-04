import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState, type ReactNode } from 'react';

interface TeamMemberModalProps {
  name: string;
  title: string;
  image: ImageMetadata;
  desc: string;
}

export const TeamMemberModal = ({
  image,
  name,
  title,
  desc,
}: TeamMemberModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <img
          src={image.src}
          alt={name}
          className='rounded-xl object-cover aspect-[1/1.4] w-full cursor-pointer'
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>
            Team Member Profile
          </DialogTitle>
          <DialogDescription>
            View details about our team member
          </DialogDescription>
        </DialogHeader>
        <div className='flex flex-col items-center space-y-4'>
          <img src={image.src} alt={name} />
          <div className='text-center'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-muted-foreground'>{title}</p>
          </div>
          <p className='text-sm text-center'>{desc}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
