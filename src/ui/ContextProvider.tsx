"use client";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

const HeightContext = createContext<{
  navHeight: number;
  setNavHeight: Dispatch<SetStateAction<number>>;
}>({
  navHeight: 5,
  setNavHeight: () => {},
});

// Providerコンポーネントの作成
export function ContextProvider({ children }: { children: ReactNode }) {
  const [navHeight, setNavHeight] = useState(5);

  return <HeightContext.Provider value={{ navHeight, setNavHeight }}>{children}</HeightContext.Provider>;
}

// コンテキストを使用するためのカスタムフック
export const useNavHeight = () => useContext(HeightContext);
