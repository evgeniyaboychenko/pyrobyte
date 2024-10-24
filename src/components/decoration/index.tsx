import { ReactNode } from "react";
interface Props {
	children?: ReactNode,
}

function Decoration({children} :Props) {
  return (
	<div className="decoration">
		{children}
	</div>
  );
}

export default Decoration;
