import React, { Component } from 'react';
import { Row, Col, Tabs  } from 'antd';
import './MainPage.css';
import LineChart from '../LineChart/LineChart';
import MoodTracker from '../MoodTracker/MoodTracker';
import NikoCalendar from '../NikoCalendar/NikoCalendar';

const TabPane = Tabs.TabPane;

class MainPage extends Component {
  
  state = {
    loading: false
  };

  render() {    
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Mood Today" key="1">
            <Row className="content" type="flex" align="middle" justify="space-around">
              <Col className="column-element-padding" xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}>
                <MoodTracker />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Niko Niko Calendar" key="2">
            <Row className="content" type="flex" align="middle" justify="space-around">
              <Col className="column-element-padding" xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}>
                <NikoCalendar />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Mood Charts" key="3">
            <Row className="content" type="flex" align="middle" justify="space-around">
              <Col className="column-element-padding" xs={{span: 24, offset: 0}} sm={{span: 24, offset: 0}} md={{span: 24, offset: 0}}>
                <LineChart  />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default MainPage;