import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}>
        </Hero>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          <Column titleCol={'Animals'} />
          <Column titleCol={'Plants'} />
          <Column titleCol={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;
