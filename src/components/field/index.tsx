import { ReactNode } from "react";

interface Props {
	label?: ReactNode,
	children?: ReactNode,
	classInput?: string,
	value?:string;
}

function Field({ label, children, classInput, value }: Props) {
  const classInputHasValue = value && "has-value";
 
  return (
    <div className={`field ${classInputHasValue}`}>
		{label &&<label className={'field__label'}>{label}</label>}
		<div className={`field__input ${classInput}`}>{children}</div>
    </div>
  );
}

export default Field;
