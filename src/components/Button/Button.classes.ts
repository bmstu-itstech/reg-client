export const baseStyles: string = 'px-4 py-2 font-headline-small rounded';
export const filledStyles: string = 'bg-color-red text-white w-full max-w-lg h-14 p-4 rounded-2xl gap-4';
export const borderedStyles: string = 'font-title-large text-white border-color-grey rounded-2xl w-44 h-16 p-4 gap-16 border-2';

export const getClassName = (variant: 'filled' | 'bordered', disabled:boolean) => {
const buttonStyles = variant === 'filled' ? filledStyles : borderedStyles;
return `${baseStyles} ${buttonStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
}