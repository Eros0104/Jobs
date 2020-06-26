/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Header, Container, JobItem, Modal} from './components';

import {getAllJobs} from './functions/jobsService';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderJobList = () =>
    getAllJobs().map((o) => <JobItem {...o} onOpen={openModal} />);
  return (
    <>
      <Header title="Jobs" />
      <Container>{renderJobList()}</Container>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

const styles = StyleSheet.create({
  centralize: {
    alignItems: 'center',
  },
});

export default App;
