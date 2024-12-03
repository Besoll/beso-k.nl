import React from 'react'

const DownloadCV = ({
    downloadPasswordForCV, otherClasses
} : {
    downloadPasswordForCV: string;
    otherClasses: string;
}) => {

    
  return (
    <div
        className={`${otherClasses} `}
        onClick={() => {
            const password = prompt('Please enter the password to download the CV. If you do not have the password, feel free to request it using the contact form below:');
            if (password === downloadPasswordForCV) {

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'cv_download_success',
                    formURL: window.location.href
                });
                window.location.href = '/Beso_Kavzharadze_CV.pdf';
            } else {
                alert('Incorrect password. If you need access, please reach out to me through the contact form to request the correct password.');

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'cv_download_failed',
                    formURL: window.location.href
                });
                
            }
            }}
    >
        Download CV
    </div>
  )
}

export default DownloadCV