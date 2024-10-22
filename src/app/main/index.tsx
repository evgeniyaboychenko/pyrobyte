import Page from '../../components/page-layout';
import Footer from '../../components/footer';
import Header from '../../components/header';

interface Props {
	handleClose: (value: boolean) => void
}

function Main({...props}: Props) {

  const {handleClose} = props;
  return (
		<Page
		header={<Header handleClose={handleClose}/>}
		main={<div>main</div>}
		footer={<Footer/>}
		/>
  );
}

export default Main;
