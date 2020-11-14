import React from 'react'

import Select from './Select'
import Image from './Image'

import './ContactForm.css'

export default function ContactForm() {
	return (
		<section className='contact-form-section'>
			<div className='office-on-map'>
				<Image relativePath='office-on-map.png'/>
			</div>
			<div className='section-content-wrapper align-center'>
				<h2 className='section-heading'>
					Contact Us
				</h2>
				<form className='contact-form'>
					<input
						className='field name-field'
						type='text' 
						name='name' 
						maxLength='50' 
						required={true}   
						placeholder='Name *'
					/>
					<input 
						className='field email-field'
						type='email' 
						name='email'
						maxLength='50' 
						required={true} 
						placeholder='Email *'
					/>
					<Select 
						label='I am looking for'
						options={
							['Web or mobile app', 'Hire developer(s)', 'Dedicated team', 'Project estimation', 'Free consultation']
						}
						selectID='services-menu'
					/>
					<Select 
						label='Budget'
						options={
							['to 5k$', 'from 5k$ to 10k$', 'from 10k$ to 20k$0', 'from 20k$ to 50k$', 'more than 50k$']
						}
						selectID='budget-menu'
					/>
					<label 
						className='visually-hidden' 
						htmlFor='message-field'
					>
						Tell us about your project.
					</label>
					<textarea 
						id='message-field' 
						className='message-field'
						name='message'
						placeholder='Hello, I would like to...'
					/>
					<label 
						className='visually-hidden' 
						htmlFor='attach-files-input'
					>
						Attach some files if needed.
					</label>
					{/* <input 
						id='attach-files-input' 
						type='file'
						name='attached-files'
						multiple={true}
					/> */}
					<button 
						className='submit-form-btn'
						type='submit'
					>
						Send
					</button>
				</form>
			</div>
		</section>
	)
}
