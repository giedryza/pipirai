import React from 'react';
import { ReactComponent as IconLocation } from '../../../assets/svg/location.svg';
import { ReactComponent as IconEmail } from '../../../assets/svg/email.svg';
import { ReactComponent as IconPhone } from '../../../assets/svg/phone.svg';
import { ReactComponent as IconFacebook } from '../../../assets/svg/facebook.svg';

const Icon = ({ name, className }) => {
    switch (name) {
        case 'location':
            return <IconLocation className={className} />;
        case 'email':
            return <IconEmail className={className} />;
        case 'phone':
            return <IconPhone className={className} />;
        case 'facebook':
            return <IconFacebook className={className} />;
        default:
            return null;
    }
};

export default Icon;
