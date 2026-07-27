import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Features/Todoslice';
import { Plus, ListPlus, Moon, Sun } from 'lucide-react';
import { MainContext } from '../contexts/MainContext';

const Todoadd = () => {
  const [inpuText, setInputText] = useState('');
  const { TheamToggle, setTheamToggle, theme } = useContext(MainContext);
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (!inpuText.trim()) return;
    dispatch(addTodo(inpuText));
    setInputText('');
  };

  return (
    <>
      <button 
        onClick={() => setTheamToggle(!TheamToggle)}
        type="button"
        title="Toggle theme"
        className={`fixed top-5 right-5 p-2 rounded-lg border z-50 transition-colors flex items-center justify-center shadow-sm cursor-pointer ${theme.toggleBtn}`}
      >
        {TheamToggle ? (
          <Sun className="w-4 h-4 text-amber-500" />
        ) : (
          <Moon className="w-4 h-4 text-slate-700" />
        )}
      </button>

      <form onSubmit={onHandleSubmit} className="w-full p-0">
        <div className="w-full max-w-xl p-0 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className={`text-xl font-bold tracking-tight flex items-center gap-2 ${theme.textPrimary}`}>
              <ListPlus className="w-5 h-5 text-indigo-500" />
              <span>Add New Task</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <input 
                type="text"
                value={inpuText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="What needs to be done?"
                className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${theme.inputBg}`}
              />
            </div>
            <button 
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#DE4C3E] hover:bg-[#c93f32] text-white text-sm font-medium rounded-xl shrink-0 transition-colors shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Task</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Todoadd;