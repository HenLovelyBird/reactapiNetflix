import React from 'react';

class testLifeCycle extends React.Component {
    state = { name: ""}
    constructor(props){
        super(props)

        this.state = {

        }
        console.log("The constructor has been invoked")
    }
    render() {
        console.log("The component has been rendered")
        return (
            <div className="my-5">
                Hello
            </div>
        );
    }

    componentDidMount = async () => {
        console.log("The component has been mounted")

        this.setState({
            name: "Strive School"
        })
    }
}

export default testLifeCycle;