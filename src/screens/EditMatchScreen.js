// src/screens/EditMatchScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editMatch } from '../actions/matchActions';

const EditMatchScreen = ({ navigation, route, editMatch }) => {
  const { match } = route.params;
  const [day, setDay] = useState(match.day);
  const [startTime, setStartTime] = useState(match.startTime);
  const [endTime, setEndTime] = useState(match.endTime);

  const handleEditMatch = () => {
    const editedMatch = {
      ...match,
      day,
      startTime,
      endTime,
    };

    editMatch(editedMatch);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Edit Match</Text>
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
      <Button title="Edit" onPress={handleEditMatch} />
    </View>
  );
};

export default connect(null, { editMatch })(EditMatchScreen);
