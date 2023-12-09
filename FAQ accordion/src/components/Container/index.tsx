import './styles.css'
import { Questions } from '../Questions/';
import iconStar from '../../assets/images/icon-star.svg';

export const Container = () => {
	return(
		<div className="container">
			<main className="main__container" >
				<header>
					<img src={iconStar} alt="icon-star" />
					<h1 className="dark-purple">FAQs</h1>
				</header>
				<section className="questions">
					<Questions  
						question="What is Frontend Mentor, and how will it help me?"
					    answer="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for  all levels and ideal for portfolio building."
					/>
					<Questions  
						question="Is Frontend Mentor free?"
					    answer="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
					/>
					<Questions  
						question="Can I use Frontend Mentor projects in my portfolio?"
					    answer="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
					/>
					<Questions  
						question="CHow can I get help if I'm stuck on a Frontend Mentor challenge?"
					    answer="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
					/>
				</section>
			</main>
		</div>
	);
};