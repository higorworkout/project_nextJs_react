import { renderTheme } from '../../styles/render-theme';
import { expect, describe, it } from 'vitest';
import { Home } from '.';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });

  it('should do something', () => {
    expect(1).toBe(1);
  });
});
