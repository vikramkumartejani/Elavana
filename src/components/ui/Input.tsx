import React from 'react';

interface LabeledInputProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    required?: boolean;
    rows?: number;
    className?: string;
}

const Input: React.FC<LabeledInputProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    required = false,
    rows = 4,
    className = ''
}) => {
    const inputClasses =
        'w-full px-4 py-3 border border-[#E8ECF4] rounded-xl outline-none focus:border focus:border-[#3A96AF] transition-colors placeholder:text-[#486284CC] text-[16px] leading-[20px] font-normal' +
        className;

    return (
        <div>
            <label htmlFor={id} className='block mb-2 sm:mb-3 text-[16px] leading-[20px] font-medium text-[#252525]'>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={inputClasses + ' resize-none'}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={inputClasses}
                    required={required}
                />
            )}
        </div>
    );
};

export default Input;
