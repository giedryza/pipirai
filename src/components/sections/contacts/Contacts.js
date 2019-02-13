import React from 'react';
import Icon from '../../utils/common/Icon';
import Map from '../../utils/common/Map';

const Contacts = () => {
    const contacts = [
        { icon: 'location', info: 'Raudondvario sen., Kauno raj.' },
        { icon: 'phone', info: '370 655 29000' },
        { icon: 'email', info: 'info@pipre.lt' },
        { icon: 'facebook', info: 'pipre.lt' }
    ];

    const renderContacts = () =>
        contacts.map(contact => (
            <li key={contact.icon} className="contacts__item">
                <a href="/" className="contacts__link">
                    <Icon name={contact.icon} className="contacts__icon" />
                    <p>{contact.info}</p>
                </a>
            </li>
        ));

    return (
        <section className="contacts">
            <div className="contacts__details">
                <h2 className="contacts__label">Susisiekime</h2>
                <ul className="contacts__list">{renderContacts()}</ul>
            </div>
            <Map
                location={{
                    lat: 54.9427163,
                    lng: 23.7668943
                }}
                zoom={13}
            />
        </section>
    );
};

export default Contacts;
