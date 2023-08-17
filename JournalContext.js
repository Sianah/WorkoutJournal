import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [journalEntries, setJournalEntries] = useState([]);

  const addJournalEntry = (entry) => {
    setJournalEntries(prevEntries => [...prevEntries, { ...entry, id: Date.now() }]);
  };

  return (
    <JournalContext.Provider value={{ journalEntries, addJournalEntry }}>
      {children}
    </JournalContext.Provider>
  );
};


