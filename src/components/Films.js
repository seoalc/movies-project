import React from 'react';

class Films extends React.Component {
    state = {
        films: '',
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://www.omdbapi.com/?apikey=b0f3a0b9&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({films: data}))

    }

    render () {
        return console.log(this.state.count)
    }
}

export default Films;
