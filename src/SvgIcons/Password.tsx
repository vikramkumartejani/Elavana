import React from 'react'

interface PasswordIconProps {
    show?: boolean;
}

const Password: React.FC<PasswordIconProps> = ({ show }) => {
    if (show) {
        return (
            <svg className='sm:w-6 sm:h-6 w-5 h-5' fill="none" viewBox="0 0 24 24" stroke="#9A9EA6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        );
    }
    return (
        <svg className='sm:w-6 sm:h-6 w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5299 9.47L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C12.9899 8.42 13.8799 8.82 14.5299 9.47Z" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.8198 5.77C16.0698 4.45 14.0698 3.73 11.9998 3.73C8.46984 3.73 5.17984 5.81 2.88984 9.41C1.98984 10.82 1.98984 13.19 2.88984 14.6C3.67984 15.84 4.59984 16.91 5.59984 17.77" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.41992 19.53C9.55992 20.01 10.7699 20.27 11.9999 20.27C15.5299 20.27 18.8199 18.19 21.1099 14.59C22.0099 13.18 22.0099 10.81 21.1099 9.39999C20.7799 8.87999 20.4199 8.38999 20.0499 7.92999" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.47 14.53L2 22" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21.9998 2L14.5298 9.47" stroke="#9A9EA6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Password