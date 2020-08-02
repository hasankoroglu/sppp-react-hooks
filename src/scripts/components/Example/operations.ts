import { sp } from '@pnp/sp';
import { IList } from './IExample';

export const getWebTitle = async () => {
  const webTitle = await sp.web.select('Title').get();
  return webTitle.Title;
};

export const getLists = async () => {
  const lists = await sp.web.lists.select('Id,Title').get();
  return lists;
}