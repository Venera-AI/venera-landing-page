import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import type { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Grid2X2 } from 'lucide-react';

const mobileNavs = [
  {
    label: 'Homepage',
    href: '/',
  },
  {
    label: 'services',
    href: '/#services',
  },
  {
    label: 'features',
    href: '/#features',
  },
  {
    label: 'about us',
    href: '/#about-us',
  },
  {
    label: 'contact',
    href: '/#contact',
  },
];

export const MobileMenu = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          className='pr-0 focus-visible:ring-0 focus-visible:ring-offset-0 font-extrabold sm:hidden flex items-center gap-x-1'
          variant='ghost'
        >
          Menu
          <Grid2X2 size='16' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end'>
        {mobileNavs.map((item) => {
          return (
            <a href={item.href}>
              <DropdownMenuItem className='cursor-pointer capitalize'>
                {item.label}
              </DropdownMenuItem>
            </a>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
