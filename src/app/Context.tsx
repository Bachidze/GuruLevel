'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image:string
}

type ContextType = {
  cart: CartItem[]; 
  setCart: Dispatch<SetStateAction<CartItem[]>>; 
}

export const Globalcontext = createContext<ContextType | null>(null);

export default function GlobalcontextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]); 

  return (
    <Globalcontext.Provider value={{ cart, setCart }}>
      {children}
    </Globalcontext.Provider>
  );
}

