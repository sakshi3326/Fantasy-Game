// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { loadMatches } from '../actions/matchActions';
import { loadData, saveData } from '../dataService';

const HomeScreen = ({ navigation, matches, loadMatches }) => {
  useEffect(() => {
    const loadMatchesFromStorage = async () => {
      const storedMatches = await loadData();
      if (storedMatches) {
        loadMatches(storedMatches);
      }
    };

    loadMatchesFromStorage();
  }, [loadMatches]);

  useEffect(() => {
    saveData(matches);
  }, [matches]);

  return (
    <View>
      <Text>Match Schedule</Text>
      <Button
        title="Add Match"
        onPress={() => navigation.navigate('AddMatch')}
      />
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.day}</Text>
            <Text>{item.startTime} - {item.endTime}</Text>
            <Button
              title="Edit"
              onPress={() => navigation.navigate('EditMatch', { match: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  matches: state.matchReducer.matches,
});

export default connect(mapStateToProps, { loadMatches })(HomeScreen);
