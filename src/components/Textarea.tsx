import React from 'react';
// CSS class for the full-width textarea


interface TextareaProps {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number; // Optional rows prop
    cols?: number; // Optional cols prop
    className?: string; // Optional className prop for additional styling
}

const Textarea: React.FC<TextareaProps> = ({ name, label, value, onChange, rows = 4, cols = 50, className = '' }) => {
    return (
        <div className={`textarea-full-width ${className}`}>
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                rows={rows}
                cols={cols}
                className="textarea-full-width" // Applying the CSS class for full width
            />
        </div>
    );
};

export default Textarea;
