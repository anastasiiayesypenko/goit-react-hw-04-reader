import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

class Controls extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };

  handleForwardClick = () => {
    this.props.onClick(1);
  };

  handleBackwardClick = () => {
    this.props.onClick(-1);
  };

  render() {
    const { index } = this.props;
    return (
      <section className={styles.controls}>
        <button
          type="button"
          className={styles.button}
          disabled={index <= 0}
          onClick={this.handleBackwardClick}
        >
          Назад{' '}
        </button>{' '}
        <button
          type="button"
          className={styles.button}
          disabled={index >= 11}
          onClick={this.handleForwardClick}
        >
          Вперед{' '}
        </button>{' '}
      </section>
    );
  }
}
export default Controls;
