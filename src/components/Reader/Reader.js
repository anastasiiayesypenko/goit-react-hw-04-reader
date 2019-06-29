import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import styles from './Reader.module.css';
import publications from './publications.json';

class Reader extends React.Component {
  state = {
    index: 0,
    items: publications,
  };

  static propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    this.setPageAccordingToUrlParse();

    // eslint-disable-next-line no-unused-expressions
    // numberOfItem >= 1 && numberOfItem <= items.length
    //   ? console.log('ok')
    //   : console.log('zalupa');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state) {
      this.setPageAccordingToUrlParse();
    }
  }

  setPageAccordingToUrlParse = () => {
    const { location } = this.props;
    const parsedNumber = queryString.parse(location.search).item;
    const numberOfItem = +parsedNumber - 1;
    const { items } = this.state;
    if (parsedNumber >= 1 && parsedNumber <= items.length) {
      this.setState({
        index: numberOfItem,
      });
    } else {
      this.setState(
        {
          index: 0,
        },
        this.changeUrl,
      );
    }
  };

  changePage = step => {
    const { index } = this.state;
    this.setState(
      {
        index: index + step,
      },
      this.changeUrl,
    );
  };

  changeUrl() {
    const { history, location } = this.props;
    const { index } = this.state;
    history.push({
      pathname: location.pathname,
      search: `item=${index + 1}`,
    });
  }

  render() {
    const { index, items } = this.state;
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} />{' '}
        <Counter items={items} index={index} />{' '}
        <Controls onClick={this.changePage} index={index} />{' '}
      </div>
    );
  }
}
export default Reader;
