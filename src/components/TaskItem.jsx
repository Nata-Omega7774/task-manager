import React from 'react';

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  const statusConfig = {
    pending: { label: 'Ожидание', color: 'bg-yellow-100 text-yellow-800' },
    in_progress: { label: 'В работе', color: 'bg-purple-100 text-purple-800' },
    done: { label: 'Выполнено', color: 'bg-green-100 text-green-800' }
  };

  const { label, color } = statusConfig[task.status];

  return (
    <div className="task-item animate-fadeIn bg-gray-50 hover:bg-gray-100 rounded-xl p-5 mb-4 transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <button
              onClick={() => onToggleStatus(task.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium ${color} transition hover:opacity-80`}
            >
              {label}
            </button>
            <span className="text-xs text-gray-500">
              {new Date(task.createdAt).toLocaleDateString('ru-RU')}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {task.title}
          </h3>
          
          {task.description && (
            <p className="text-gray-600 text-sm mb-4">
              {task.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleStatus(task.id)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition flex items-center gap-2"
            title="Сменить статус"
          >
            <span className="text-sm">Далее</span>
            <span>→</span>
          </button>
          
          <button
            onClick={() => onDeleteTask(task.id)}
            className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition"
            title="Удалить задачу"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;