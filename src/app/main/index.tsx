import Page from '../../components/page-layout';
import Footer from '../../components/footer';


function Main() {
  return (
		<Page
		header={<div>Header</div>}
		main={<div>main</div>}
		footer={<Footer/>}
		/>
  );
}

export default Main;
