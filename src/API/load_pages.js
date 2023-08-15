import { mapData } from './map_data';
import config from '../Config/index';
// `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}`

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? slug : '';
  const url = `${config.url}/pages/2/${slug}`;

  const raw = await fetch(url);
  const json = await raw.json();
  const  att = json.data.attributes
  const data = mapData([att])[0];

  return data;
}
