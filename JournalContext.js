import React, { createContext, useState, useContext } from 'react';

const JournalContext = createContext();

const JournalProvider = ({ children }) => {
  const [journals, setJournals] = useState([]);

  const addJournal = (day, journalDetail) => {
    // Create a new journal entry with a unique ID and add it to the journals state
    const newJournal = { id: Date.now(), day, detail: journalDetail };
    setJournals(prevJournals => [...prevJournals, newJournal]);
  };

  return (
    <JournalContext.Provider value={{ journals, addJournal }}>
      {children}
    </JournalContext.Provider>
  );
};

export { JournalContext, JournalProvider };



