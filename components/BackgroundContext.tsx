import React, { createContext, useState } from "react";

interface IBackgroundContext {
  setBackground: (bgColor: string, fontColor: string) => void;
}

export const BackgroundContext = createContext<IBackgroundContext>({
  setBackground: () => {},
});

interface IBackgroundContextProvider {
  children: React.ReactNode;
}

export default function BackgroundContextProvider({
  children,
}: IBackgroundContextProvider): JSX.Element {
  const [contextValue] = useState<IBackgroundContext>({
    setBackground: initSetBg(),
  });
  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
}

function initSetBg() {
  if (typeof document !== "undefined") {
    document.body.style.transition = "background 500ms ease";
  }
  return (background: string, color: string): void => {
    document.body.style.color = color;
    document.body.style.background = background;
  };
}
