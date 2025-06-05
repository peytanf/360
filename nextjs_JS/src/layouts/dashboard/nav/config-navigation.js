// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/label';
import Iconify from '../../../components/iconify';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'General',
    items: [
      {
        title: 'Dashboard',
        path: PATH_DASHBOARD.studio360.root,
        icon: ICONS.dashboard,
        children: [
          { title: 'Analytics Overview', path: PATH_DASHBOARD.studio360.analytics },
          { title: 'Sales Insights', path: PATH_DASHBOARD.studio360.sales },
          { title: 'Bookkeeping', path: PATH_DASHBOARD.studio360.bookkeeping },
        ],
      },
    ],
  },

  // STUDIO MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: 'Studio Management',
    items: [
      // INVENTORY
      {
        title: 'Inventory',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'Product Catalog', path: PATH_DASHBOARD.eCommerce.list },
          { title: 'Add Product', path: PATH_DASHBOARD.eCommerce.new },
          { title: 'Stock Management', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'Low Stock Alerts', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },

      // CUSTOMER ORDERS
      {
        title: 'Customer Orders',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'Order List', path: PATH_DASHBOARD.invoice.list },
          { title: 'Create Invoice', path: PATH_DASHBOARD.invoice.new },
          { title: 'Order Details', path: PATH_DASHBOARD.invoice.demoView },
          { title: 'Custom Orders', path: PATH_DASHBOARD.invoice.demoEdit },
        ],
      },

      // USER MANAGEMENT
      {
        title: 'Users & Roles',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Admin Panel', path: PATH_DASHBOARD.user.profile },
          { title: 'Customer List', path: PATH_DASHBOARD.user.list },
          { title: 'Add User', path: PATH_DASHBOARD.user.new },
          { title: 'Account Settings', path: PATH_DASHBOARD.user.account },
        ],
      },

      {
        title: 'File Manager & OCR',
        path: PATH_DASHBOARD.fileManager,
        icon: ICONS.folder,
      },
    ],
  },

  // COMMUNICATION & PLANNING
  // ----------------------------------------------------------------------
  {
    subheader: 'Communication & Planning',
    items: [
      {
        title: 'Client Communications',
        path: PATH_DASHBOARD.mail.root,
        icon: ICONS.mail,
        info: <Label color="success">Active</Label>,
      },
      {
        title: 'Team Chat',
        path: PATH_DASHBOARD.chat.root,
        icon: ICONS.chat,
      },
      {
        title: 'Project Calendar',
        path: PATH_DASHBOARD.calendar,
        icon: ICONS.calendar,
      },
      {
        title: 'Task Board',
        path: PATH_DASHBOARD.kanban,
        icon: ICONS.kanban,
      },
    ],
  },

  // DEMO MENU STATES
  {
    subheader: 'Other cases',
    items: [
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: 'item_by_roles',
        path: PATH_DASHBOARD.permissionDenied,
        icon: ICONS.lock,
        roles: ['admin'],
        caption: 'only_admin_can_see_this_item',
      },
      {
        title: 'menu_level',
        path: '#/dashboard/menu_level',
        icon: ICONS.menuItem,
        children: [
          {
            title: 'menu_level_2a',
            path: '#/dashboard/menu_level/menu_level_2a',
          },
          {
            title: 'menu_level_2b',
            path: '#/dashboard/menu_level/menu_level_2b',
            children: [
              {
                title: 'menu_level_3a',
                path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
              },
              {
                title: 'menu_level_3b',
                path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
                children: [
                  {
                    title: 'menu_level_4a',
                    path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
                  },
                  {
                    title: 'menu_level_4b',
                    path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'item_disabled',
        path: '#disabled',
        icon: ICONS.disabled,
        disabled: true,
      },

      {
        title: 'item_label',
        path: '#label',
        icon: ICONS.label,
        info: (
          <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
            NEW
          </Label>
        ),
      },
      {
        title: 'item_caption',
        path: '#caption',
        icon: ICONS.menuItem,
        caption:
          'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      },
      {
        title: 'item_external_link',
        path: 'https://www.google.com/',
        icon: ICONS.external,
      },
      {
        title: 'blank',
        path: PATH_DASHBOARD.blank,
        icon: ICONS.blank,
      },
    ],
  },
];

export default navConfig;
