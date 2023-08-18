import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    const loadJournals = async () => {
      try {
        const storedJournals = await AsyncStorage.getItem('journals');
        if (storedJournals !== null) {
          setJournals(JSON.parse(storedJournals));
        }
      } catch (error) {
        console.error('Failed to load the journals.', error);
      }
    };

    loadJournals();
  }, []);

  const updateJournals = async (updatedJournals) => {
    try {
      await AsyncStorage.setItem('journals', JSON.stringify(updatedJournals));
    } catch (error) {
      console.error('Failed to save the journals.', error);
    }
  };
  const addJournal = async (day, detail) => {
    const newJournal = { id: Date.now(), day, detail };
    const updatedJournals = [...journals, newJournal];
    setJournals(updatedJournals);
    updateJournals(updatedJournals);
  };

  const deleteJournal = async (id) => {
    const updatedJournals = journals.filter(journal => journal.id !== id);
    setJournals(updatedJournals);

    try {
      await AsyncStorage.setItem('journals', JSON.stringify(updatedJournals));
    } catch (error) {
      console.error('Failed to delete the journal.', error);
    }
  };

  return (
    <JournalContext.Provider value={{ journals, addJournal, setJournals, updateJournals }}>
      {children}
    </JournalContext.Provider>
  );
};






