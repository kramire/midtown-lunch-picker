import React from 'react';
import { shallow, mount, unmount } from 'enzyme';
import renderer from 'react-test-renderer';
import { StarRating } from '../Components';

describe('StarRating Component Testing', () => {
  it('Smoke Test --> should render without crashing, with default rating of 0', () => {
    // Arrange

    // Act
    const component = shallow(<StarRating />);

    // Assert
    expect(component.find(`[test-id="star-rating"]`)).toHaveLength(1);
    expect(component.find(`[test-id="star-icon"]`)).toHaveLength(0);
  });

  it('Shallow Render Test--> 4.5 rating --> should render 4 children', () => {
    // Arrange
    const rating = 4.5;

    // Act
    const component = shallow(<StarRating rating={rating} />);

    // Assert
    expect(component.find(`[test-id="star-icon"]`)).toHaveLength(4);
  });

  it('Full Render Test --> 4.5 rating --> should render 4 children', () => {
    // Arrange
    const rating = 4.5;

    // Act
    const component = mount(<StarRating rating={rating} />);

    // Assert
    expect(component.find(`[test-id="star-icon"]`)).toHaveLength(4);
    component.unmount();
  });

  it('Snapshot Test --> no rating --> should render no children', () => {
    // Arrange

    // Act
    const component = renderer
      .create(<StarRating />)
      .toJSON();

    // Assert
    expect(component).toMatchSnapshot();
  });

  it('Snapshot Test --> 4.5 rating --> should render 4 children', () => {
    // Arrange
    const rating = 4.5;

    // Act
    const component = renderer
      .create(<StarRating rating={rating} />)
      .toJSON();

    // Assert
    expect(component).toMatchSnapshot();
  });
});
