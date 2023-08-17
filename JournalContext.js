import React, { createContext, useState, useContext } from 'react';

const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  return (
    <JournalContext.Provider value={{ journalEntries, setJournalEntries }}>
      {children}
    </JournalContext.Provider>
  );
};

export const useJournal = () => {
  return useContext(JournalContext);
};
