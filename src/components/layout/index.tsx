import { ReactNode } from "react";

interface Props {
	children?: ReactNode,
  className?: string,
}

function Layout({className='layout', children }: Props) {
  return (
    <div className={className}>
  	  {children}
    </div>
  );
}

export default Layout;
