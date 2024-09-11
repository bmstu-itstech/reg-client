export default interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    label:string;
    disabled?:boolean;
    variant?: 'filled' | 'bordered';
}