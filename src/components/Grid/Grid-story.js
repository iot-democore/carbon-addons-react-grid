/* eslint-disable no-console */

import React /*, { Component } */ from 'react';
import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';

import { Tile } from 'carbon-components-react';

import { Grid, Row, Col } from '../Grid/Grid.js';

storiesOf('Grid', module)
  .addWithInfo(
    '2 column grid',
    `
      Grid, Row and Col provide a more declarative means for laying out applications
  `,
    () => (
      <Grid>
        <Row>
          <Col sm6>
            <Tile>
              <h3>First Section</h3>
              <br />
              <small>blah blah blah</small>
            </Tile>
          </Col>
          <Col sm6>
            <Tile>
              <h3>Second Section</h3>
              <br />
              <small>blah blah blah</small>
            </Tile>
          </Col>
        </Row>
      </Grid>
    )
  )

  .addWithInfo(
    '3 column grid auto sizing',
    `
      Grid, Row and Col provide a more declarative means for laying out applications
  `,
    () => (
      <Grid>
        <Row>
          <Col sm3>
            <Tile>
              <h3>First Section</h3>
              <br />
              <small>blah blah blah</small>
            </Tile>
          </Col>
          <Col sm3>
            <Tile>
              <h3>Second Section</h3>
              <br />
              <small>blah blah blah</small>
            </Tile>
          </Col>
          <Col smAuto>
            <Tile>
              <h3>Third Section (auto sizing)</h3>
              <br />
              <small>
                blah blah blah blah blah blah blah blah blah blah blah blah
              </small>
            </Tile>
          </Col>
        </Row>
      </Grid>
    )
  );
