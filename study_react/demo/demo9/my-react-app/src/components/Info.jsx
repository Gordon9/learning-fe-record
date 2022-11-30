// import {require} from 'browserify'
import photo from '../assets/sherlock-holmes.webp';

export default function Info() {
  return (
    <div className='info'>
      <div className='info-photo'><img src={photo} alt="sherlock-holmes" /></div>
      <div className='info-name'>
        <h1>Sherlock Holmes</h1>
        <p>Frontend Developer</p>
        <a href="#">gordontam.com</a>
      </div>
      <div className='info-buttons'>
        <a href="#email" className='button-email'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" className='email-icon'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
</svg>
Email</a>
        <a href="#linkedin" className='button-linkedin'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="linkedin-icon w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
</svg>
Linkedin</a>
      </div>
    </div>
  )
}