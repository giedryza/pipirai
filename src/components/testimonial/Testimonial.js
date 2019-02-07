import React from 'react';
import profile from '../../assets/img/profile.jpg';

const Testimonial = () => (
    <section className="testimonial">
        <div className="testimonial__bubble">
            <p className="testimonial__quote">
                Mėgaukimės maistu ne tik tam, kad išgyventumėm. Išmėginkim kažką
                neįprasto... eksperimentuokime, dalinkimės! Ne visada tai kas
                vadinama aštru turi aštrų skonį...
            </p>
            <p className="testimonial__author">‎Laura Garšvaitė</p>
            <p className="testimonial__author--secondary">Pipirų ūkininkė</p>
        </div>
        <img src={profile} alt="" className="testimonial__img" />
    </section>
);

export default Testimonial;
