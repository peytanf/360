import _mock from '../_mock';
import { randomNumberRange, randomInArray } from '../utils';

// ----------------------------------------------------------------------

export const _appRelated = [
  'Keyword Research', 
  'SEO Analytics', 
  'Backlink Monitor', 
  'Content Optimizer', 
  'Rank Tracker'
].map((name, index) => ({
    id: _mock.id(index),
    name,
    system: (index === 2 && 'Active') || (index === 4 && 'Pending') || 'Live',
    price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
    rating: _mock.number.rating(index),
    review: randomNumberRange(999, 99999),
    shortcut:
      (name === 'Keyword Research' && '/assets/icons/apps/ic_chrome.svg') ||
      (name === 'SEO Analytics' && '/assets/icons/apps/ic_drive.svg') ||
      (name === 'Backlink Monitor' && '/assets/icons/apps/ic_dropbox.svg') ||
      (name === 'Content Optimizer' && '/assets/icons/apps/ic_evernote.svg') ||
      '/assets/icons/apps/ic_github.svg',
  })
);

// ----------------------------------------------------------------------

export const _appInstalled = ['de', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
  id: _mock.id(index),
  name: ['Germany', 'England', 'France', 'Korean', 'USA'][index],
  android: randomNumberRange(999, 99999),
  windows: randomNumberRange(999, 99999),
  apple: randomNumberRange(999, 99999),
  flag: `/assets/icons/flags/ic_flag_${country}.svg`,
}));

// ----------------------------------------------------------------------

export const _appAuthors = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.name.fullName(index),
  avatar: _mock.image.avatar(index),
  favourite: randomNumberRange(9999, 19999),
}));

// ----------------------------------------------------------------------

export const _appInvoices = [...Array(5)].map((_, index) => ({
  id: `${Date.now() + index}`,
  price: _mock.number.price(index),
  category: randomInArray(['Android', 'Mac', 'Windows']),
  status: randomInArray(['paid', 'out_of_date', 'in_progress']),
}));

// ----------------------------------------------------------------------

export const _appFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: [
    'Internal Sales Pattern Analysis',
    'Shop Inventory Insights',
    'Customer Purchase Trends',
  ][index],
  description: [
    'Your top 3 products show 18% sales increase this month. Classic Leather Loafers leading',
    'Based on shop data: 23 items below minimum stock. Auto-reorder suggestions generated',
    'Repeat customers increased 12%. Average order value up ₱340 from last month',
  ][index],
  image: _mock.image.cover(index),
}));
