import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Future Of Banking</HeroH1>
				<HeroP>Sign Up And Start Living In The Future</HeroP>
				<HeroBtnWrapper>
					<Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started 
                        {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
