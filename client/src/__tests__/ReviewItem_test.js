import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import { ReviewItem } from '../Components';
import renderer from 'react-test-renderer';

// Revisit rendering component with default properties.

describe('ReviewItem Component', () => {
  it('Smoke Test --> renders without crashing with default message', () => {
    // Arrange
    
    // Act
    const component = shallow(<ReviewItem />);
    console.log(component.debug());

    // Assert
    expect(component.find(`[test-id='review-item']`)).toBeDefined();
    expect(component.find(`[test-id='review-item']`)).toHaveLength(1);
    expect(component.find(`StarRating`)).toHaveLength(1);
    expect(component.containsMatchingElement(<p>Error loading review</p>)).toEqual(true);
  });

  it('Shallow Render --> should render review data from props', () => {
    // Arrange
    const review = [
      {
        id: '123',
        rating: 4.5,
        text: 'Good food',
        time_created: '2016-08-29 00:41:13'
      }];

    // Act
    const component = shallow(<ReviewItem review={review} />);

    // Assert
    expect(component.find(`[test-id="review-item"]`)).toHaveLength(1);
    expect(component.find(`StarRating`)).toHaveLength(1);
  });

  // it('Snapshot Test --> should render review data correctly given passed props', () => {
  //   // Arrange
  //   const reviewData = {
  //     rating: 4.5,
  //     text: 'Food was great',
  //     time_created: '2016-08-29 00:41:13'
  //   };
  //   jest.mock('../Components/StarRating', () => () => ('starRating'));

  //   // Act
  //   const component = renderer
  //     .create(<ReviewItem review={reviewData} />)
  //     .toJSON();

  //   // Assert
  //   expect(component).toMatchSnapshot();
  // });
});