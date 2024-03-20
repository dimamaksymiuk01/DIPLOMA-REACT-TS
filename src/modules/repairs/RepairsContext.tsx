import React, { createContext, useContext, useState } from 'react';

// Створіть контекст
const RepairsContext = createContext<any>(null);

// Створіть провайдер контексту
export function RepairsProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrend, setSelectedBrend] = useState<string | null>(null);

  return (
    <RepairsContext.Provider value={{ selectedBrend, setSelectedBrend }}>
      {children}
    </RepairsContext.Provider>
  );
}

// Створіть власний хук для користування контекстом
export function useRepairsContext() {
  const context = useContext(RepairsContext);
  if (!context) {
    throw new Error('useRepairsContext повинен використовуватися в межах RepairsProvider');
  }
  return context;
}
