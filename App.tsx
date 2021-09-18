import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {CalorieCard} from './src/components/CalorieCard';
import {Header} from './src/components/Header';
import {LevelCard} from './src/components/LevelCard';
import {SleepCard} from './src/components/SleepCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header />
        <LevelCard />
        <View style={styles.cardWrapper}>
          <SleepCard />
          <CalorieCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    color: '#ffffff',
    borderWidth: 1,
    borderColor: 'white',
  },
  cardWrapper: {
    flexDirection: 'row',
    height: 300,
    justifyContent: 'space-between',
  },
});

export default App;
