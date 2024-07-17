import LogOutIcon from './LogOutIcon';
import MyProductsIcon from './MyProductsIcon';
import ExploreIcon from './ExploreIcon';

export const profileList: IProfileListItem[] = [
  {
    component: MyProductsIcon,
    name: 'My-Products',
    path: 'my-products',
  },
  {
    component: ExploreIcon,
    name: 'Explore',
    path: 'Explore',
  },
  {
    component: LogOutIcon,
    name: 'LogOut',
    path: '',
  },
];
export interface IProfileListItem {
  component: React.ComponentType<any>;
  name: string;
  path: string;
}
