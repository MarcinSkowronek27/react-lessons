import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.node,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}>
        </Hero>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleCol={'Animals'}/>
          <Column titleCol={'Plants'}/>
          <Column titleCol={'Minerals'}/>
        </div>
      </section>
    )
  }
}

export default List;
