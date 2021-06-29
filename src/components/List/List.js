import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>All the things can do I!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} 
              titleImage={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column title='Sleep' />
          <Column title='Eat' />
          <Column title='Repeat' />
        </div>
      </section>
    )
  }
}

export default List;
