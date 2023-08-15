import { mapData } from './map_data.js'
import { describe, it, expect } from 'vitest';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pageData = mapData()[0];
    expect(pageData.footerHtml).toBe('');
    expect(pageData.slug).toBe('');
    expect(pageData.title).toBe('');
  });
  it('should map data if data is there are data', () => {
    const pageData = mapData([{
      footer_text: '<p>Heu</p>',
      slug: 'slug',
      title: 'title',

    }])[0];
    expect(pageData.footerHtml).toBe('<p>Heu</p>');
    expect(pageData.slug).toBe('slug');
    expect(pageData.title).toBe('title');
  });
});
