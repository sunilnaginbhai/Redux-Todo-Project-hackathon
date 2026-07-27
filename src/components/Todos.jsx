import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo, removeTodo } from '../Redux/Features/Todoslice';
import { Pencil, Trash2, Check, X, ListTodo, Sparkles } from 'lucide-react';
import { MainContext } from '../contexts/MainContext';

const Todos = () => {
  const { theme } = useContext(MainContext);
  const todos = useSelector(state => state.todo.todos) || [];
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveUpdate = (e, id) => {
    e.preventDefault();
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, text: editText.trim() }));
    }
    setEditingId(null);
  };

  return (
    <div className={`w-full p-4 rounded-xl border transition-colors ${theme.cardBg}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100/20">
        <div className="flex items-center gap-2">
          <ListTodo className="w-5 h-5 text-indigo-500" />
          <h3 className={`text-lg font-bold tracking-tight ${theme.textPrimary}`}>Your Tasks</h3>
        </div>
        <span className={`px-2.5 py-1 text-xs font-semibold rounded-md ${theme.badgeBg}`}>
          {todos.length} {todos.length === 1 ? 'Task' : 'Tasks'}
        </span>
      </div>

      {todos.length === 0 ? (
        <div className="text-center py-12 px-4 mt-3 rounded-xl border border-dashed border-slate-300/40 flex flex-col items-center justify-center gap-2">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme.badgeBg}`}>
            <Sparkles className="w-5 h-5" />
          </div>
          <p className={`text-sm font-semibold mt-1 ${theme.textPrimary}`}>All clear for today!</p>
          <p className={`text-xs ${theme.textMuted}`}>Add a task above to get started.</p>
        </div>
      ) : (
        <ul className="max-h-96 overflow-y-auto space-y-2 mt-3 pr-1 list-none p-0 m-0">
          {todos.map((todo, i) => (
            <li 
              key={todo.id} 
              className={`flex items-center justify-between gap-3 p-3 rounded-xl transition-colors border ${theme.itemBg}`}
            >
              {editingId === todo.id ? (
                <form onSubmit={(e) => handleSaveUpdate(e, todo.id)} className="flex items-center gap-2 w-full">
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold shrink-0 ${theme.badgeBg}`}>
                    {i + 1}
                  </span>
                  <input 
                    type="text" 
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className={`flex-1 px-3 py-1.5 border rounded-lg text-sm focus:outline-none ${theme.inputBg}`}
                    autoFocus
                  />
                  <button type="submit" className="p-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shrink-0 flex items-center justify-center cursor-pointer">
                    <Check className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={() => setEditingId(null)} className={`p-1.5 rounded-lg shrink-0 flex items-center justify-center cursor-pointer ${theme.cancelBtn}`}>
                    <X className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <>
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold shrink-0 ${theme.badgeBg}`}>
                      {i + 1}
                    </span>
                    <span className={`text-sm font-medium break-all ${theme.textPrimary}`}>
                      {todo.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => handleEditClick(todo)} className={`p-1.5 rounded-lg shrink-0 cursor-pointer ${theme.iconBtn}`}>
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => dispatch(removeTodo(todo.id))} className="p-1.5 hover:bg-rose-500/10 text-slate-400 hover:text-rose-500 rounded-lg shrink-0 cursor-pointer">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;