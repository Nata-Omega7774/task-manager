import React from 'react';

const FilterButtons = ({ currentFilter, onFilterChange }) => {
  const filters = [
    { key: 'all', label: 'Все', countKey: 'total' },
    { key: 'pending', label: 'Ожидание', countKey: 'pending' },
    { key: 'in_progress', label: 'В работе', countKey: 'inProgress' },
    { key: 'done', label: 'Выполнено', countKey: 'done' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map(filter => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-4 py-2 rounded-lg transition ${
            currentFilter === filter.key
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;