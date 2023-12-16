// src/screens/AddMatchScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addMatch } from '../actions/matchActions';

const AddMatchScreen = ({ navigation, addMatch }) => {
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleAddMatch = () => {
    const newMatch = {
      id: Date.now(),
      day,
      startTime,
      endTime,
    };

    addMatch(newMatch);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add Match</Text>
      <TextInput
        placeholder="Day"
        value={day}
        onChangeText={(text) => setDay(text)}
      />
      <TextInput
        placeholder="Start Time"
        value={startTime}
        onChangeText={(text) => setStartTime(text)}
      />
      <TextInput
        placeholder="End Time"
        value={endTime}
        onChangeText={(text) => setEndTime(text)}
      />
      <Button title="Add" onPress={handleAddMatch} />
    </View>
  );
};

export default connect(null, { addMatch })(AddMatchScreen);
