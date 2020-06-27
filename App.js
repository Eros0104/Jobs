/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Header, Container, JobItem, Modal, Footer} from './components';

import {getAllJobs, subscribeToJob} from './functions';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);

  const openModal = (job) => {
    setModalContent(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const renderJobList = () =>
    getAllJobs().map((o) => (
      <JobItem
        {...o}
        onOpen={() => openModal(o)}
        onSubscribe={subscribeToJob}
      />
    ));
  return (
    <>
      <Header title="Jobs" />
      <Container>{renderJobList()}</Container>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        job={modalContent}
        onSubscribe={subscribeToJob}
      />
    </>
  );
};

export default App;
