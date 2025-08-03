interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    onClick: () => void;
}

/**
 * Custom button component for blog actions.
 */
export const Button = ({ text, icon, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="flex cursor-pointer items-center rounded-full border border-black px-10 py-1.75 text-sm transition-all hover:text-blue-600 dark:border-gray-500 dark:hover:text-blue-400"
        >
            {icon}
            <span className="ml-3">{text}</span>
        </button>
    );
};
