import { QuestionsProps } from './types.ts';
import { useState } from 'react';
import  iconMinus from '../../assets/images/icon-minus.svg';
import  iconPlus from '../../assets/images/icon-plus.svg';
import './styles.css';

export const Questions = ({ question, answer }: QuestionsProps) => {

	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = (): void => {
		setIsOpen(preValue => !preValue);
	};

	return(
		<div className="questions-container">
			<p>{question}</p>
			{isOpen ?
				(
					<>
						<img 
							src={iconMinus}
							alt="icon-minus"
							onClick={handleClick}
							/>	
						<p>{answer}</p>
					</>
				)
				: 
				(
					<>			
						<img 
							src={iconPlus}
							alt="icon-plus"
							onClick={handleClick}
						/>
					</>
				)
			}
		</div>
	);
}