import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../erorr-indicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    onLoaded = (data) => {
      this.setState({
        data,
        loading: false,
        error: false
      });
    };
  
    onError = (err) => {
      this.setState({
        loading: false,
        error: true
      })
    }

    update = () => {
      this.props.getData()
      .then(this.onLoaded)
      .catch(this.onError);
    }

    render() {
      const { data, loading, error } = this.state;

      const hasData = !(error || loading)

      const errorMessage = error ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const context = hasData ? <View {...this.props} data={data}/> : null;

      return (
        <div>
          {errorMessage}
          {spinner}
          {context}
        </div>
      );
    }
  };
};

export default withData;
