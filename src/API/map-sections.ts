import { GridContentProps } from "../components/GridContent";
import { GridImageElementProps, GridImageProps } from "../components/GridImage";
import { GridTextProps } from "../components/GridText";
import { GridTwoColumnsProps } from "../components/GridTwoColumns";
import { SectionProps } from "../templates/Home";

export const mapSections = (sections = []): SectionProps[] => {

  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }


    return section;
  });
};


export const mapSectionTwoColumns = (section = {} as any): GridTwoColumnsProps  => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { data: {attributes: {url: srcImg = ''}} },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;


  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: [{ background = false, section_id: sectionId = '' }] = false,
  } = section;

  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};





export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    __component: component = '',
    title2: title = '',
    description2: description  = '',
    metada: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((text) => {
      const { title1: title = '', description1: description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};

export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    __component: component = '',
    title2: title = '',
    description2: description  = '',
    metada: { background = false, section_id: sectionId = '' } = false,
    image_grid,
  } = section;

  const { image1: {data: grid}} = image_grid[0]

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img: any): GridImageElementProps => {
      const {
        attributes: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;

      return {
        srcImg,
        altText,
      };
    }),
  };
};
