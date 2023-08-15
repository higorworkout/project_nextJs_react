import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import { describe, it, expect } from 'vitest';

import mock from './mock';

describe('<GridTwoColum />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
