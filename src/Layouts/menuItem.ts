import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  // my menu

  {
    title: 'Dashboard',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Customers',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Drivers',
    icon: { name: 'car' },
    children: [
      {
        title: 'Add Driver',
        link: { href: '/dashboard' },
      },
      {
        title: 'Approved Drivers',
        link: { href: '/dashboard' },
      },
      {
        title: 'Un-Approved Drivers',
        link: { href: '/dashboard' },
      },
      {
        title: 'Blocked Drivers',
        link: { href: '/dashboard' },
      },
      {
        title: 'Reject Drivers',
        link: { href: '/dashboard' },
      },
    ],
  },
  {
    title: 'Manual Ride Booking',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Ride List',
    icon: { name: 'car' },
    children: [
      {
        title: 'All Rides',
        link: { href: '/dashboard' },
      },
      {
        title: 'Scheduled Rides',
        link: { href: '/dashboard' },
      },
      {
        title: 'Cancelled Rides',
        link: { href: '/dashboard' },
      },
    ],
  },
  {
    title: 'Vehicle Type',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Required Documents',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Earning Reports',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Reviews',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Gods Eye',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Add User',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },

  {
    title: 'Live Chat',
    icon: { name: 'car' },
    children: [
      {
        title: 'Customer Live Chat',
        link: { href: '/dashboard' },
      },
      {
        title: 'Driver Live Chat',
        link: { href: '/dashboard' },
      },
    ],
  },
  {
    title: 'Billing',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },

  // end of my menu

  // {
  //   title: 'Home Page',
  //   icon: { name: 'home' },
  //   link: { href: '/dashboard' },
  // },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'Extra Components',
  //   icon: { name: 'star-outline' },
  //   children: [
  //     {
  //       title: 'Accordion',
  //       link: { href: '/extra-components/accordion' },
  //     },
  //     {
  //       title: 'Actions',
  //       link: { href: '/extra-components/actions' },
  //     },
  //     {
  //       title: 'Alert',
  //       link: { href: '/extra-components/alert' },
  //     },
  //     {
  //       title: 'List',
  //       link: { href: '/extra-components/list' },
  //     },
  //     {
  //       title: 'Spinner',
  //       link: { href: '/extra-components/spinner' },
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: { href: '/extra-components/progress' },
  //     },
  //     {
  //       title: 'Tabs',
  //       link: { href: '/extra-components/tabs' },
  //     },
  //     {
  //       title: 'Chat',
  //       link: { href: '/extra-components/chat' },
  //     },
  //     {
  //       title: 'Cards',
  //       link: { href: '/extra-components/cards' },
  //     },
  //     {
  //       title: 'Flip Card',
  //       link: { href: '/extra-components/flip-card' },
  //     },
  //     {
  //       title: 'Reveal Card',
  //       link: { href: '/extra-components/reveal-card' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: { name: 'edit-2-outline' },
  //   children: [
  //     {
  //       title: 'Inputs',
  //       link: { href: '/forms/inputs' },
  //     },
  //     {
  //       title: 'Layout',
  //       link: { href: '/forms/form-layout' },
  //     },
  //     {
  //       title: 'Buttons',
  //       link: { href: '/forms/buttons' },
  //     },
  //     {
  //       title: 'Select',
  //       link: { href: '/forms/select' },
  //     },
  //   ],
  // },
  // {
  //   title: 'UI Features',
  //   icon: { name: 'keypad-outline' },
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: { href: '/ui-features/grid' },
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: { href: '/ui-features/search' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: { name: 'browser-outline' },
  //   children: [
  //     {
  //       title: 'Popover',
  //       link: { href: '/modal-overlays/popover' },
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: { href: '/modal-overlays/tooltip' },
  //     },
  //     {
  //       title: 'Toastr',
  //       link: { href: '/modal-overlays/toastr' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: { name: 'text-outline' },
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: { href: '/editors/tinymce' },
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: { href: '/editors/ckeditor' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: { name: 'shuffle-2-outline' },
  //   children: [
  //     {
  //       title: '404',
  //       link: { href: '/miscellaneous/404' },
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: { name: 'lock-outline' },
  //   children: [
  //     {
  //       title: 'Login',
  //       link: { href: '/auth/login' },
  //     },
  //     {
  //       title: 'Register',
  //       link: { href: '/auth/register' },
  //     },
  //     {
  //       title: 'Request Password',
  //       link: { href: '/auth/request-password' },
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: { href: '/auth/reset-password' },
  //     },
  //   ],
  // },
];

export default items;
