

export default interface IFormInput{
  labelText: string;
  name: string;
  type: string;
  placeholder: string;
  className?: string;
  error: string |undefined;
  touched: boolean | undefined;
  textArea?: boolean;
}
