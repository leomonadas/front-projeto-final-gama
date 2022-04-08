import { GlobalStyle } from '../../assets/styles/global';
// import { Buttons } from './components/Button';
import { Navbar } from '../../components/Navbar';
import { Banner } from '../../components/Banner';
import { Infobox } from '../../components/Infobox';
import { Regionsbox } from '../../components/Regionsbox';
import { Orangebox } from '../../components/Orangebox';
import { Footer } from '../../components/Footer';
import {Card} from '../../components/Cards';
// import Comment from '../../components/Comments';
import CommentBox from '../../components/CommentBox';

export default function Home() {
	return (
		<>
			<Navbar />
			<Banner />
			<GlobalStyle />
			<Infobox />
			<Regionsbox />
			<Card/>	
			<Orangebox />
			<CommentBox />
			{/* <Comment /> */}
			<Footer />
		</>
	);
}