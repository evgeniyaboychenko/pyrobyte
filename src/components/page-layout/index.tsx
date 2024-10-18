import { ReactNode } from "react";
import './style.scss';

interface Props {
	children?: ReactNode,
	header?: string,
	footer?: boolean,
}

function PageLayout({ header, footer, children }: Props) {
  return (
    <div className='PageLayout'>
      <div className='PageLayout-Header'>{header}</div>
      <div className='PageLayout-Main'>{children}</div>
      <div className='PageLayout-Footer'>{footer}</div>
    </div>
  );
}

export default PageLayout;
