import React from 'react';

export default function Header({filters, filter, onFilterChange}) {
    return (
        <header>
            <ul>
                {filters.map((val, id) => (
                    <li key={id}>
                        <button onClick={() => onFilterChange(val)}>{val}</button>
                    </li>
                ))}
            </ul>
        </header>
    );
}
