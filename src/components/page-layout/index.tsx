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
      {/* <header className='page__header header'>{header}</header>
      <main className='page__main main'>{main}</main> */}
	  {header}
	  {main}
	  {footer}
      {/* <footer className='page__footer footer'>{footer}</footer> */}
    </div>
  );
}

export default Page;
