/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/header/header';
import Container from './components/container/container';
import JobItem from './components/job-item/job-item';

import {getAllJobs} from './functions/jobsService';

const renderJobList = () => getAllJobs().map((o) => <JobItem {...o} />);

const App = () => {
  return (
    <>
      <Header title="Jobs" />
      <Container>
        {renderJobList()}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  centralize: {
    alignItems: 'center',
  },
});

export default App;
