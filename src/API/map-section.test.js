import { mapSectionContent, mapSectionTwoColumns, mapSections, mapTextGrid, mapImageGrid } from './map-sections.js';
import pagesFakeData from './dados.json';
import { describe, it, expect } from 'vitest';

describe('map-sections', () => {

  it('Should render predefined section if no data sent', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('Should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe("section.section-two-columns");
  });

  it('Should test sections with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      }
    ]);

    const WithNoComponent = mapSections([{}])
    expect(withNoTextOrImageGrid).toEqual([{ __component: 'section.section-grid'}])
    expect(WithNoComponent).toEqual([{}]);
  });
  it('Should test section.section-grid with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      }
    ]);

    const WithNoComponent = mapSections([{}])
    expect(withNoTextOrImageGrid).toEqual([{ __component: 'section.section-grid'}])
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should map section two columns if data is empty', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });
  it('should map section two columns', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.component).toBe('section.section-two-columns');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section content with no data', () => {
    const data =  mapSectionContent();

    expect(data.background).toBe(false);
    expect(data.component).toBe("");
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');


  });

  it('should map section content', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('pricing');
    expect(data.html).toBe('abc');
    expect(data.title).toBe('Pricing');

  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.grid[0].title).toBe('Teste 1')
    expect(data.grid[0].description).toBe('Coisa')

  });

  it('should map grid text without data', () => {
    const data = mapTextGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'abc',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('abc');
    expect(data.image_grid[0].srcImg).toBe('a.svg');
    expect(data.image_grid[0].altText).toBe('abc');
  });
})
