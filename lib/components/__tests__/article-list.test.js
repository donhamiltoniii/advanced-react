import React from 'react';
import ArticleList from '../article-list';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    actions: {
      lookupAuthor: jest.fn(() => ({}))
    },
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

    expect(tree.children.length).toEqual(2);
    expect(tree).toMatchSnapshot();
  });
});
