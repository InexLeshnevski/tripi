import React, {useRef} from 'react'
import {useIntersectionObserver} from '../hooks/useIntersectionObserver'

import Layout from '../components/layout'
import SEO from '../components/seo'
import MapIllustration from '../components/MapIllustration'
import Feature from '../components/Feature'
import Image from '../components/Image'

import TouristsOnMap from '../images/tourists-on-map.png'

const IndexPage = () => {
	const target = useRef()
	
	const isIntersecting = useIntersectionObserver(target)

	return (
		<Layout>
			<SEO title='Home'/>
			<img 
				className='map-image'
				src={TouristsOnMap} 
				alt='Tourists in a map'
			/>
			<section className='content-section header-section'>
				<div className='section-block'>
					<h1 ref={target}>
						Audio Guiding Application
						<br/>
						<span className='secondary-text'>for a Travel Company</span>
					</h1>
					<div className='section-content-wrapper align-left'>
						<p className='section-paragraph'>
							The app provides a complete 360 ecosystem, easy to use tools for tour guides, tour members, and a tours control room.
						</p>
					</div>
				</div>
			</section>
			<section className='content-section'>
				<div className='section-block two-col'>
					<Image
						className='eiffel-tower-image'
						relativePath='eiffel-tower.jpg'
					/>
					<div className='section-content-wrapper align-right'>
						<h2 className='section-heading'>
							Client
						</h2>
						<p className='section-paragraph'>
							Our client is one of the leading Israeli travel companies organizing tours both domestically and worldwide. The company is positioning itself as a one-stop-shop for tourists of all kinds. Providing various products and services, the travel agency is recognized by thousands of loyal clients, yet striving to win an even larger share of the market.
						</p>
					</div>
				</div>
			</section>
			<section className='content-section'>
				<div className='section-block'>
					<div className='section-content-wrapper align-center'>
						<h2 className='section-heading'>
							Challenge
						</h2>
						<p className='section-paragraph'>
							As a part of the company’s acquisition strategy, it was decided to develop an audio guiding mobile app. It should have become a key differentiator and upgrade customers’ experience. The main idea was to offer tourists comfortable and easy tour guides for both online and offline usage.
						</p>
						<p className='section-paragraph'>
							During guided tours, it typically gets hard to manage the whole group and provide an equally meaningful and interesting experience to everyone. Thus, the travel agency decided to develop a fully customized mobile app with useful tools for both tour guides and company clients.
						</p>
						<p>
							They trusted Newsoft to build this solution thanks to our expertise in the travel industry and mobile development. From the very beginning, we dived deeply into the project and demonstrated a truly proactive approach.
						</p>
					</div>
				</div>
			</section>
			<section className='content-section development-section'>
				<div className='section-block two-col'>
					<MapIllustration 
						userName='Jane'
						distance='183'
						mapSrc='map1.png'
					/>
					<div className='section-content-wrapper align-right'>
						<h2 className='section-heading'>
							Development
						</h2>
						<p className='section-paragraph'>
							Our team designed and developed a complete audio guiding solution. It eases communication between tour guides and tourist group members. Users can download the app before the tour begins, look for the route and key destination points. 
						</p>
						<p className='section-paragraph'>
							User registration is simple and gives credentials for selected tours. Once logged in, users (both tour guides and tourists) get access to instant messaging with their travel group, including different types of attachments. Besides, they might download the route description in PDF format to their phones and access it further offline.
						</p>
						<p className='section-paragraph'>
							The main feature and advantage of the app is wireless real-time audio guiding. Tour guides can communicate with whole tourist groups and lead excursions via the app. In the meantime, tourists can either listen to the stories or turn the sound off.
						</p>
						<p className='section-paragraph'> 
							For better tour control, guides can see real-time location of each tour member on the map or run the group re-count. The latter is implemented through a map pop-up. There, members’ location has to be confirmed during the following three minutes by pressing the button. Moreover, unless a whole tour group is within the map reach, an alerting system starts running. It notifies the rest members regarding the last known location of lost tourists.
						</p>
					</div>
				</div>
				<div className='section-block two-col'>
					<div className='section-content-wrapper align-left'>
						<p className='section-paragraph'>
							Newsoft’s biggest challenge was to develop instant smooth access to all app features offline. Since Bluetooth reach distance is limited to 100 meters, we implemented mesh communication via BLE (Bluetooth Low Energy). Besides, we developed C++ algorithms for coding and decoding audio messages because BLE’s data rate is rather small. Audio recording and playing are built with C++ as well. Moreover, our developmental solutions guaranteed the following: 
						</p>
						<ul>
							<li className='emphasized'>
								Two-second audio buffer for stable audio play in case of low-quality connection.
							</li>
							<li className='emphasized'>
								Minimal BLE traffic usage for better data exchange (implemented via a special numerical system for data packages).
							</li>
							<li className='emphasized'>
								Generating optimal data buffers to be sent via BLE without interruption.
							</li>
						</ul>
						<p className='section-paragraph'>
							Last but not least, we carried out synchronization of all BLE-sent data with servers. Once completed, data is removed from local devices. 
						</p>
					</div>
					<MapIllustration 
						userName='Matthew'
						distance='97'
						mapSrc='map2.png'
					/>
				</div>
			</section>
			<section className='content-section details-section'>
				<div className='section-block'>
					<MapIllustration 
						userName='Harry'
						isGuide={true}
						mapSrc='map3.png'
					/>
					<div className='section-content-wrapper align-right'>
						<h2 className='section-heading'>
							Details
						</h2>
						<table className='details-table'>
							<tbody>
								<tr>
									<th>Location</th>
									<td>Israel</td>
								</tr>
								<tr>
									<th>Industry</th>
									<td>Travel</td>
								</tr>
								<tr>
									<th>Services</th>
									<td>
										UI/UX Design, 
										<br/>
										Mobile Development, QA
									</td>
								</tr>
								<tr>
									<th>Team size</th>
									<td>3 people</td>
								</tr>
								<tr>
									<th>Year completed</th>
									<td>2018</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			<section className='content-section tools-section'>
				<div className='section-block'>
					<div className='section-content-wrapper align-center'>
						<h2 className='section-heading'>
							Tools & Technologies
						</h2>
						<ul className='tools-list no-icons'>
							<li className='tool'>
								<span className='tool-name'>Android SDK</span>
							</li>
							<li className='tool'>
								<span className='tool-name'>NDK</span>
							</li>
							<li className='tool'>
								<span className='tool-name'>MediaPlayer</span>
							</li>
							<li className='tool'>
								<span className='tool-name'>GreenDAO</span>
							</li>
							<li className='tool'>
								<span className='tool-name'>Mpg123</span>
							</li>
							<li className='tool'>
								<span className='tool-name'>Compress Codec</span>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='content-section'>
				<div className='section-block two-col'>
					<div className='app-screen-wrapper align-left'>
						<Image
							className='app-screen'
							relativePath='count-members-screen.png'
						/>
					</div>
					<div className='section-content-wrapper align-right'>
						<h2 className='section-heading'>
							Features
						</h2>
						<ul className='features-list'>
							<li className='feature'>
								<Feature 
									iconID='audio'
									heading='Audio guiding'
								/>
							</li>
							<li className='feature'>
								<Feature 
									iconID='message'
									heading='Instant messaging'
								/>
							</li>
							<li className='feature'>
								<Feature 
									iconID='location'
									heading='Users’ location monitoring'
								/>
							</li>
							<li className='feature'>
								<Feature 
									iconID='alert'
									heading='Alerting system'
								/>
							</li>
							<li className='feature'>
								<Feature 
									iconID='bluetooth'
									heading='Wireless access'
								/>
							</li>
							<li className='feature'>
								<Feature 
									iconID='paper'
									heading='Rich data content'
								/>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className='content-section results-section'>
				<div className='section-block'>
					<div className='section-content-wrapper align-left'>
						<h2 className='section-heading'>
							Results
						</h2>
						<p className='section-paragraph'>
							We’ve successfully delivered a mobile system able to fully function without internet connection and exchange data between multiple users via BLE.
						</p>
						<p className='section-paragraph'>
							Having a ready-to-go solution, our client launched the application on the Israeli market. The mobile app is monthly used by thousands of tourists and helps the travel agency to provide quality experience to every tourist.
						</p>
						<p className='section-paragraph'>
							Lately, the company has started a massive rebranding program and set up a couple more products using the same core as in this mobile app. We are deeply content for such meaningful cooperation and high-quality results.
						</p>
					</div>
					<div className='app-screen-wrapper align-right'>
						<Image
							className='app-screen'
							relativePath='chat-screen.png'
						/>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage
