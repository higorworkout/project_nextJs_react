import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from 'vitest';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
