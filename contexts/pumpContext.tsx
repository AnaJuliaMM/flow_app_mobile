import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Body {
  litros_totais: number;
  preco_por_litro: number;
}

interface PumpContextProps {
  pumpData: Body;
  setPumpData: React.Dispatch<React.SetStateAction<Body>>;
}

const PumpContext = createContext<PumpContextProps | undefined>(undefined);

interface PumpProviderProps {
  children: ReactNode;
}

export const PumpProvider: React.FC<PumpProviderProps> = ({ children }) => {
  const [pumpData, setPumpData] = useState<Body>({
    litros_totais: 0.0,
    preco_por_litro: 0.0,
  });

  return (
    <PumpContext.Provider value={{ pumpData, setPumpData }}>
      {children}
    </PumpContext.Provider>
  );
};

export const usePumpContext = () => {
  const context = useContext(PumpContext);
  if (!context) {
    throw new Error('usePumpContext must be used within a PumpProvider');
  }
  return context;
};
