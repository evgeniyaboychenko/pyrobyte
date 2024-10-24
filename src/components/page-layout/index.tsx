import { ReactNode } from "react";
import './style.scss';

interface Props {
	main?: ReactNode,
	header?: ReactNode,
	footer?: ReactNode,
}

function Page({ header, footer, main }: Props) {
  return (
    <div className='page'>
	  {header}
	  {main}
	  {footer}
    </div>
  );
}

export default Page;
