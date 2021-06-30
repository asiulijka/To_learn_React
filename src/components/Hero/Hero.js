import React from 'react';
import styles from './Hero.scss';
import PropTypes, { string } from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        {/* <img className={styles.image} src='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'></img> */}
        {/* <img className={styles.image} src='https://images.pexels.com/photos/6320590/pexels-photo-6320590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img> */}
        {/* <img className={styles.image} src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F09%2F15%2FThe-Mandalorian5.jpg'></img> */}
        <img className={styles.image} src={props.titleImage}></img>
    </header> 
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    titleImage: PropTypes.string,
};

export default Hero;
