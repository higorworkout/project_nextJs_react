import { mapMenu } from './map_menu';
import { mapSections } from './map-sections';
import { PageData } from '../templates/Home';

export const mapData = (pagesData = [{}] as any): PageData[] => {
  const mapObj = pagesData.map((data: any): PageData => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };

  });

  return mapObj
};





