import React from 'react';
import { shallow, mount } from 'enzyme';
import { Reviews } from '../Components';

describe('Reviews Component', () => {
  it('Smoke Test --> should render without crashing, with no ReviewItems', () => {
    // Arrange

    // Act
    const component = shallow(<Reviews />);

    // Assert
    expect(component.find(`[test-id="reviews"]`)).toBeDefined();
    expect(component.find(`ReviewItem`)).toHaveLength(0);
  });

  it('Shallow Render --> two reviews --> should render two ReviewItems', () => {
    // Arrange
    const reviews = [
      {
        id: '123',
        rating: 4.5,
        text: 'Good food',
        time_created: '2016-08-29 00:41:13'
      },
      {
        id: '456',
        rating: 1,
        text: 'Poor food',
        time_created: '2017-08-29 00:41:13'
      }
    ];

    // Act
    const component = shallow(<Reviews reviews={reviews} />);

    // Assert
    expect(component.find(`[test-id="reviews"]`)).toBeDefined();
    expect(component.find(`ReviewItem`)).toHaveLength(reviews.length);
  });

  it('Full Render --> two reviews --> should render two <li>s with data', () => {
    // Arrange
    const reviews = [
      {
        id: '123',
        rating: 4.5,
        text: 'Good food',
        time_created: '2016-08-29 00:41:13'
      },
      {
        id: '456',
        rating: 1,
        text: 'Poor food',
        time_created: '2017-08-29 00:41:13'
      }
    ];

    // Act
    const component = mount(<Reviews reviews={reviews} />);

    // Assert
    expect(component.find(`[test-id="review-item"]`)).toHaveLength(reviews.length);
    
    component.unmount();
  });
});