import { mapMenu } from './map_menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  const mapObj = pagesData.map((data) => {
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





