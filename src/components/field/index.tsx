import { ReactNode } from "react";

interface Props {
	label?: ReactNode,
	children?: ReactNode,
	classInput?: string,
	value?:string,
	inputId?: string,
}

function Field({ label, children, classInput='', value , inputId}: Props) {
  const classInputHasValue = value && "has-value";
 
  return (
    <div className={`field ${classInputHasValue}`}>
		{label &&<label className={'field__label'} htmlFor={inputId}>{label}</label>}
		<div className={`field__input ${classInput}`}>{children}</div>
    </div>
  );
}

export default Field;
