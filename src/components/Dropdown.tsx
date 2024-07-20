import React from "react";

interface DropdownProps {
    name: string;
    label: string;
    options: { level: string; description?: string }[];
    onSelect: (value: string, description: string) => void;
    value: string;
}

const Dropdown: React.FC<DropdownProps> = ({ name, label, options, onSelect, value }) => {
    return (
        <div className="dropdown">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={(e) => {
                    const selectedOption = options.find(option => option.level === e.target.value);
                    onSelect(e.target.value, selectedOption ? selectedOption.description || "" : "");
                }}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option.level} value={option.level}>
                        {`level${option.level}`}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
