import React from 'react';
import { Button } from 'react-scroll';
import {
	Column2,
	ImgWrap,
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	Img
} from './InfoElements';

const InfoSection = () => {
	return (
        <>
		<InfoContainer>
			<InfoWrapper>
				<InfoRow>
					<Column1>
						<TextWrapper>
							<TopLine>Top line</TopLine>
							<Heading>heafding</Heading>
							<Subtitle>subtitle</Subtitle>
							<BtnWrap>
								<Button to="home" />
							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>
						<ImgWrap>
							<Img />
						</ImgWrap>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
        </>
	);
};

export default InfoSection;
