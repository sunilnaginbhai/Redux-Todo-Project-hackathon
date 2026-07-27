import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [TheamToggle, setTheamToggle] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  //  Provide some theam
  const theme = {
    pageBg: TheamToggle ? "bg-zinc-950 text-zinc-100" : "bg-slate-50 text-slate-900",
    cardBg: TheamToggle ? "bg-zinc-900 border-zinc-800" : "bg-white border-slate-100",
    inputBg: TheamToggle ? "bg-zinc-800 border-zinc-700 text-zinc-100 placeholder-zinc-500 focus:bg-zinc-900 focus:border-indigo-400" : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-500",
    itemBg: TheamToggle ? "bg-zinc-800/60 hover:bg-zinc-800 border-zinc-700/50" : "bg-slate-50/80 hover:bg-slate-100/80 border-transparent",
    
    textPrimary: TheamToggle ? "text-zinc-100" : "text-slate-900",
    textSecondary: TheamToggle ? "text-zinc-400" : "text-slate-600",
    textMuted: TheamToggle ? "text-zinc-500" : "text-slate-400",
    
    toggleBtn: TheamToggle ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700/80" : "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200/80",
    badgeBg: TheamToggle ? "bg-indigo-950/60 text-indigo-400" : "bg-indigo-50 text-indigo-600",
    iconBtn: TheamToggle ? "hover:bg-zinc-700 text-zinc-400" : "hover:bg-slate-200 text-slate-500",
    cancelBtn: TheamToggle ? "bg-zinc-700 text-zinc-200 hover:bg-zinc-600" : "bg-slate-200 text-slate-700 hover:bg-slate-300",
  };
  
  return (
    <MainContext.Provider value={{ TheamToggle, setTheamToggle, theme,isSearchOpen,setIsSearchOpen }}>
      {children}
    </MainContext.Provider>
  );
};