import React, { useEffect, useState } from 'react'
import './mediaHub.css'
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function MediaHub() {

    const [mediaHubToggle, setMediaHubToggle] = useState(false);
    const [fullName, setFullName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [emailID, setEmailID] = useState('');
    const [messageBox, setMessageBox] = useState('');

    useEffect(() => {
        const mediaHubContent = document.querySelector('.media-hub-content');
        const mediaHub = document.querySelector('.media-hub');

        if (mediaHubToggle) {
            mediaHubContent.style.transform = 'translateX(0px)';
            mediaHub.style.backgroundColor = '#de4e4e';

        } else {
            mediaHubContent.style.transform = 'translateX(180vw)';
            mediaHub.style.backgroundColor = 'gray';
        }

    }, [mediaHubToggle])



    return (
        <>
            <div className="media-hub-content">
                <h2>Contact Me</h2>

                <form action="" onSubmit={(e) => { e.preventDefault() }}>
                    <TextField className='custom-field' value={fullName} onChange={e => { setFullName(e.target.value) }} size='small' fullWidth margin="dense" label="Full Name" required autoComplete="off" />
                    <TextField className='custom-field' value={phoneNum} onChange={e => { setPhoneNum(e.target.value) }} size='small' type='number' fullWidth margin="dense" label="Phone" required autoComplete="off" />
                    <TextField className='custom-field' value={emailID} onChange={e => { setEmailID(e.target.value) }} size='small' type='email' fullWidth margin="dense" label="E-Mail" required autoComplete="off" />
                    <TextField className='custom-field' value={messageBox} onChange={e => { setMessageBox(e.target.value) }} size='small' minRows={6} multiline type='text' fullWidth margin="dense" label="Message" required autoComplete="off" />

                    <div className="connection-wraper">
                        <Button variant='contained' type='submit'>Submit</Button>
                        <div className="social-media">
                            <a rel="noreferrer" href='https://www.instagram.com/urstrulysatyam_/' target='_blank'><span className="insta"></span></a>
                            <a rel="noreferrer" href='https://www.linkedin.com/in/satyamnagar/' target='_blank'><span className="linkedIn"></span></a>
                            <a rel="noreferrer" href='https://github.com/SatyamNagar/' target='_blank'><span className="github"></span></a>
                        </div>
                    </div>
                </form>
            </div>

            <div className='media-hub-container'>
                <motion.div onClick={() => { mediaHubToggle ? setMediaHubToggle(false) : setMediaHubToggle(true) }} drag='y' dragConstraints={{ left: 0, right: 0, top: -150, bottom: 150 }} className="media-hub"></motion.div>
            </div>
        </>
    )
}
