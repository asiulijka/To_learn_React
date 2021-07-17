import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.string,
  }

  render() {
    const {cards} = this.props;
    return(
      <section className={styles.component}>
        
        <Icon name={settings.search.icon} />
        <h3 className={styles.title}> {settings.search.searchTitle}</h3>
        
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

      </section>
    );

  }

}

export default SearchResults;