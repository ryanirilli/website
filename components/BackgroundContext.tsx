import React, { createContext, useState, useEffect, useMemo } from "react";

type TColor = {
  color: string;
  bg: string;
};
interface IBackgroundContext {
  setBackground: (bgColor: string, fontColor: string) => void;
  colors: TColor;
}

export const BackgroundContext = createContext<IBackgroundContext>({
  setBackground: () => {},
  colors: {
    color: "",
    bg: "",
  },
});

interface IBackgroundContextProvider {
  children: React.ReactNode;
}

export default function BackgroundContextProvider({
  children,
}: IBackgroundContextProvider): JSX.Element {
  const [colors, setColors] = useState<TColor>({
    color: "",
    bg: "",
  });

  const contextValue = useMemo<IBackgroundContext>(
    () => ({
      setBackground(background: string, color: string) {
        document.body.style.color = color;
        document.body.style.background = background;
        setColors({
          color,
          bg: background,
        });
      },
      colors,
    }),
    [colors]
  );

  useEffect(() => {
    document.body.style.transition = "background 1s ease";
  }, []);

  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  );
}
