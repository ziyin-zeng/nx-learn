import { render } from '@testing-library/react';

import LoadingText from './loading-text';

describe('LoadingText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingText />);
    expect(baseElement).toBeTruthy();
  });
});
