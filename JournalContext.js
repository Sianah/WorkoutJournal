import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  // Load stored journals from AsyncStorage when the component is mounted.
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

  const addJournal = async (day, detail) => {
    const newJournal = { id: Date.now(), day, detail };
    const updatedJournals = [...journals, newJournal];
    setJournals(updatedJournals);

    // Save the updated journals to AsyncStorage.
    try {
      await AsyncStorage.setItem('journals', JSON.stringify(updatedJournals));
    } catch (error) {
      console.error('Failed to save the journals.', error);
    }
  };

  return (
    <JournalContext.Provider value={{ journals, addJournal }}>
      {children}
    </JournalContext.Provider>
  );
};



