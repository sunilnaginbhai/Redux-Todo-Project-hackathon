import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { MainContext } from '../contexts/MainContext';

const SearchTask = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isSearchOpen, setIsSearchOpen, TheamToggle } = useContext(MainContext);
  
  const todos = useSelector((state) => state.todo.todos) || [];

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-start justify-center pt-20 z-50 p-4 transition-all duration-200"
      onClick={() => setIsSearchOpen(false)}
    >
      <div 
        className={`w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border font-sans transition-colors ${
          TheamToggle 
            ? "bg-zinc-900 border-zinc-800 text-zinc-100" 
            : "bg-white border-slate-200/80 text-slate-800"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className={`flex items-center px-4 py-3.5 border-b ${
          TheamToggle ? "border-zinc-800" : "border-slate-100"
        }`}>
          <svg className="w-5 h-5 text-indigo-500 shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks or type a command..."
            className={`w-full text-sm bg-transparent placeholder-slate-400 focus:outline-none font-medium ${
              TheamToggle ? "text-zinc-100" : "text-slate-900"
            }`}
            autoFocus
          />

          <div className="flex items-center gap-1 shrink-0 ml-2">
            <kbd className={`px-2 py-0.5 text-[10px] font-bold border rounded-md shadow-xs ${
              TheamToggle ? "bg-zinc-800 border-zinc-700 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-500"
            }`}>Ctrl</kbd>
            <kbd className={`px-2 py-0.5 text-[10px] font-bold border rounded-md shadow-xs ${
              TheamToggle ? "bg-zinc-800 border-zinc-700 text-zinc-400" : "bg-slate-100 border-slate-200 text-slate-500"
            }`}>K</kbd>
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto py-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full">
          
          {searchQuery.trim() !== '' ? (
            <div>
              <div className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-zinc-500">
                Matching Tasks ({filteredTodos.length})
              </div>

              {filteredTodos.length > 0 ? (
                filteredTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm font-medium transition-colors ${
                      TheamToggle 
                        ? "text-zinc-100 hover:bg-zinc-800/80" 
                        : "text-slate-800 hover:bg-slate-50"
                    }`}
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="2" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>{todo.text}</span>
                  </div>
                ))
              ) : (
                <div className="px-4 py-6 text-sm text-slate-400 dark:text-zinc-500 text-center">
                  No tasks found matching "<span className="font-semibold text-slate-700 dark:text-zinc-300">{searchQuery}</span>"
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-slate-400 dark:text-zinc-500">
                Recently viewed
              </div>
              
              <div className={`relative flex items-center gap-3 px-4 py-2.5 cursor-pointer font-medium text-sm transition-colors ${
                TheamToggle 
                  ? "text-zinc-200 hover:bg-zinc-800/80" 
                  : "text-slate-800 hover:bg-slate-50"
              }`}>
             
              </div>

              <div className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm font-medium transition-colors ${
                TheamToggle 
                  ? "text-zinc-200 hover:bg-zinc-800/80" 
                  : "text-slate-800 hover:bg-slate-50"
              }`}>
                
              </div>

              <div className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm font-medium transition-colors ${
                TheamToggle 
                  ? "text-zinc-200 hover:bg-zinc-800/80" 
                  : "text-slate-800 hover:bg-slate-50"
              }`}>
                
              </div>

              <div className={`mt-2 border-t pt-2 ${
                TheamToggle ? "border-zinc-800" : "border-slate-100"
              }`}>
              
                <div className={`flex items-center gap-3 px-4 py-2.5 cursor-pointer text-sm font-medium transition-colors ${
                  TheamToggle 
                    ? "text-zinc-200 hover:bg-zinc-800/80" 
                    : "text-slate-800 hover:bg-slate-50"
                }`}>
                
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default SearchTask;