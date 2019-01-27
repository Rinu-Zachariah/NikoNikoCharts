import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './MoodTracker.css';
import '../ModalForm/GroupModal.css';
import GroupModal from '../ModalForm/GroupModal';
import emojiHappy from '../../images/happy.png';
import emojiSad from '../../images/sad.png';
import emojiNeutral from '../../images/neutral.png';

import jsonData from '../../db.json';
var groupData = jsonData.groups;

class MoodTracker extends Component {
  constructor() {
    super();
    this.recordEmotion = this.recordEmotion.bind(this);
    this.getCallback = this.getCallback.bind(this);
    this.showDesiredOutPut = this.showDesiredOutPut.bind(this);
  }

  state = {
    loading: false,
    showFeelingsBar: false,
    selectedEmoji: '',
    vData: [],
    selectedEmojiMood: '',
    showNewGroup: false,
    activeGroup: [],
    activeUserName: '',
    errorField: false,
    groupData: groupData
  };

  showDesiredOutPut = (user) => {
    this.setState({ activeUserName: user.userName, showFeelingsBar: false, selectedEmojiMood: "" });
  }

  recordEmotion = (param) => {
    let state = this.state;
    var currentDate = new Date().toISOString();
    let groupCopy = JSON.parse(JSON.stringify(state.groupData));
    this.setState({ errorField: false});
    groupCopy.forEach(function(obj, arrIndex){
      if(obj.groupName === state.activeGroup.groupName){
        obj.users.forEach(function(user, index){
          if(user.userName === state.activeUserName){
            if((user.MoodRegistered[user.MoodRegistered.length-1].updated_at.split("T")[0] !== currentDate.split("T")[0]) || (user.MoodRegistered[user.MoodRegistered.length-1].moodValue === "")){
              user.MoodRegistered[user.MoodRegistered.length-1].updated_at = currentDate;
              user.MoodRegistered[user.MoodRegistered.length-1].moodValue = param;
            }
            else{
              state.errorField= true;
            }
          }
        })
      }
    })
    state.groupData = groupCopy;
    console.log(state.groupData)
    if(param === 10){
    // selectedEmoji was used to show same emoji for the second area, but it was not that good so not adding the code, but have added the code to show the selected images
    // <img className="registeredEmojiStyle" src={state.selectedEmoji} alt="selected Emoji"/> : this html tag should be added in render for the same
      this.setState({ selectedEmoji : emojiHappy, showFeelingsBar: true, selectedEmojiMood: "happy"});
    }
    else if(param === 5){
      this.setState({ selectedEmoji : emojiNeutral, showFeelingsBar: true, selectedEmojiMood: "neutral" });
    }
    else
      this.setState({ selectedEmoji : emojiSad, showFeelingsBar: true, selectedEmojiMood: "sad" });
  }
  getCallback = (vData) => {
    if(this.state.vData === []){
      this.setState({ vData: vData, showNewGroup: true, activeGroup: vData });
    }
    else{
      this.state.vData.push(vData);
      this.setState({showNewGroup: true, activeGroup: vData });
    }
  }

  render() {
    let state = this.state;

    return (
      <div>
        <Row className="content" type="flex" align="middle" justify="space-around">
          <Col className="column-element-padding responseArea" xs={{span: 2, offset: 0}} sm={{span: 2, offset: 0}} md={{span: 2, offset: 0}}>
            <GroupModal getCallToBeInitialized={this.getCallback}/>
            {state.showNewGroup && state.vData.map((vData, key) => (<div className="setMarginDiv"><div className="addGroup vDataGrpName">{vData.groupName}</div></div>))}
          </Col>
          <Col className="column-element-padding responseArea" xs={{span: 22, offset: 0}} sm={{span: 22, offset: 0}} md={{span: 22, offset: 0}}>
            {state.showNewGroup && state.activeGroup.users.map((user) => (<div className="boxEffect" onClick={()=> this.showDesiredOutPut(user)}>{user.userName}</div>)) }
            {state.activeUserName === "" && <h3 className="questionStyles">How are you feeling today?</h3>}
            {state.activeUserName && <h3 className="questionStyles">Hi <span className="spanNameCapitalize">{state.activeUserName}.</span> How are you feeling today?</h3>}
            <div>
              <Row className="content" type="flex" align="middle" justify="space-around">
                <Col className="column-element-padding responseArea" xs={{span: 7, offset: 1}} sm={{span: 7, offset: 1}} md={{span: 7, offset: 1}}>
                  <img className="emojiSetWidth" src={emojiHappy}  alt="happy" onClick={()=> this.recordEmotion(10)} />
                </Col>
                <Col className="column-element-padding responseArea" xs={{span: 7, offset: 1}} sm={{span: 7, offset: 1}} md={{span: 7, offset: 1}}>
                  <img className="emojiSetWidth" src={emojiNeutral} alt="neutral" onClick={()=> this.recordEmotion(5)} />
                </Col>
                <Col className="column-element-padding responseArea" xs={{span: 7, offset: 1}} sm={{span: 7, offset: 1}} md={{span: 7, offset: 1}}>
                  <img className="emojiSetWidth" src={emojiSad} alt="sad" onClick={()=> this.recordEmotion(0)} />
                </Col>
              </Row>
            </div>
            {state.showFeelingsBar && <div>
              {state.activeUserName === "" && <p className="questionStyles">You are {state.selectedEmojiMood} today!! </p>}
              {state.activeUserName && !state.errorField && <p className="questionStyles">{state.activeUserName} is {state.selectedEmojiMood} today!! </p>}
              {state.errorField && state.activeUserName &&  <p className="questionStyles">{state.activeUserName}'s mood has been registered for today!! </p>}
            </div>}
          </Col>
        </Row>
      </div>
    );
  }
}

export default MoodTracker;