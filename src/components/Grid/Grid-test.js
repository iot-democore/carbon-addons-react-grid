import React from 'react';
import { shallow /*, mount */ } from 'enzyme';

import { Grid, Row, Col } from '../Grid';

describe('Grid', () => {
  describe('Grid Renders as expected', () => {
    const wrapper = shallow(
      <Grid className="extra-class">
        <div className="child">Test</div>
      </Grid>
    );
    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the correct class', () => {
      expect(wrapper.find('.extra-class.bx--grid').length).toBe(1);
    });
  });

  describe('Row Renders as expected', () => {
    const wrapper = shallow(
      <Row className="extra-class">
        <div className="child">Test</div>
      </Row>
    );
    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the correct class', () => {
      expect(wrapper.find('.extra-class.bx--row').length).toBe(1);
    });
  });

  describe('Col Renders as expected', () => {
    const wrapper = shallow(
      <Col xs12 className="extra-class">
        <div className="child">Test</div>
      </Col>
    );
    it('renders children as expected', () => {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the correct class', () => {
      expect(wrapper.find('.extra-class.bx--col-xs-12').length).toBe(1);
    });
  });
});
