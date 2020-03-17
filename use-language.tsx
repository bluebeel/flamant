import * as React from "react";

export enum LanguageSupported {
  EN = "EN",
  FR = "FR",
  NL = "NL"
}

type Action = { type: "setLanguage"; payload: LanguageSupported };

type Dispatch = (action: Action) => void;

type State = { language: LanguageSupported };

type LanguageProviderProps = { children: React.ReactNode };

const LanguageStateContext = React.createContext<State | undefined>(undefined);

const LanguageDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function languageReducer(state: State, action: Action) {
  switch (action.type) {
    case "setLanguage": {
      return { language: action.payload };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [state, dispatch] = React.useReducer(languageReducer, {
    language: LanguageSupported.NL
  });

  return (
    <LanguageStateContext.Provider value={state}>
      <LanguageDispatchContext.Provider value={dispatch}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageStateContext.Provider>
  );
}

function useLanguageState() {
  const context = React.useContext(LanguageStateContext);

  if (context === undefined) {
    throw new Error("useLanguageState must be used within a LanguageProvider");
  }

  return context;
}

function useSetLanguage() {
  const context = React.useContext(LanguageDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useSetLanguage must be used within a LanguageProvider"
    );
  }

  return (language: LanguageSupported) => {
    context({ type: "setLanguage", payload: language });
  };
}

export { LanguageProvider, useLanguageState, useSetLanguage };
