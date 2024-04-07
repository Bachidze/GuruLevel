'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
 
}

type ContextType = {
  giorgi: number;
  setGiorgi: Dispatch<SetStateAction<number>>;
  chasetva: string[];
  setChasetva: Dispatch<SetStateAction<string[]>>;
  cart: CartItem[]; 
  setCart: Dispatch<SetStateAction<CartItem[]>>; 
}

export const Globalcontext = createContext<ContextType | null>(null);

export default function GlobalcontextProvider({ children }: { children: ReactNode }) {
  const [giorgi, setGiorgi] = useState(0);
  const [cart, setCart] = useState<CartItem[]>([]); 
  const [chasetva, setChasetva] = useState(['']);

  return (
    <Globalcontext.Provider value={{ giorgi, setGiorgi, chasetva, setChasetva, cart, setCart }}>
      {children}
    </Globalcontext.Provider>
  );
}

