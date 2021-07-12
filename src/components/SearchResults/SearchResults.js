import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }

  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,
    cards: PropTypes.array,
  }

  render() {
    const { cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name= 'icon' />
          </span>
          Title
        </h3>
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