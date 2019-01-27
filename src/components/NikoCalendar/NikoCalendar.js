import React, { Component } from 'react';
import { Row, Col, Table } from 'antd';
import '../MoodTracker/MoodTracker.css';
import emojiHappy from '../../images/happy.png';
import emojiSad from '../../images/sad.png';
import emojiNeutral from '../../images/neutral.png';

import jsonData from '../../db.json'

class NikoCalendar extends Component {

  state = {
    groupData: [],
    groupDataConfiguration: [{
      title: 'Names',
      dataIndex: 'name',
      width: 50,
      key: 'name'
    },{
      title: 'Monday',
      dataIndex: 'mon',
      width: 50,
      key: 'mn',
      render: mon => this.renderImageSrc(mon)
    },{
      title: 'Tuesday',
      dataIndex: 'tues',
      width: 50,
      key: 'tues',
      render: tues => this.renderImageSrc(tues)
    }, {
      title: 'Wednesday',
      dataIndex: 'wed',
      width: 50,
      key: 'wed',
      render: wed => this.renderImageSrc(wed)
    }, {
      title: 'Thursday',
      dataIndex: 'thurs',
      width: 50,
      key: 'thurs',
      render: thurs => this.renderImageSrc(thurs)
    }, {
      title: 'Friday',
      dataIndex: 'fri',
      width: 50,
      key: 'fri',
      render: fri => this.renderImageSrc(fri)
    }],
  }

  componentDidMount() {
    var gData = jsonData.group;
    this.setState({ groupData : gData });
  }
  renderImageSrc = (param) => {
    return(
      (param === 10) ? <img  className="tableEmojiStyle" alt="today's mood" src={emojiHappy} /> : (param === 5) ? <img  className="tableEmojiStyle" alt="today's mood" src={emojiNeutral} /> : (param === 0) ? <img  className="tableEmojiStyle" alt="today's mood" src={emojiSad} /> : null
    )
  }

  

  render() {
    let state = this.state;

    return (
      <Row className="content">
        <Col>
          <Table
            bordered={ true }
            pagination={ false }
            columns={state.groupDataConfiguration}
            dataSource={state.groupData}
            rowKey="key"
            loading={state.loading}
            scroll={{ y: 500 }} />
        </Col>
      </Row>
    );
  }
}
export default NikoCalendar;