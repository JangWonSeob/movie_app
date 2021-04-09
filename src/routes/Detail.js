import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        console.log(this.props);
        const{ location, history } = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    render(){
        const { location, history } = this.props;
        if(location.state) {
            return <span>
                <h2 class="movie__title">{location.state.title}</h2>
                <p>{history.location.state.summary}</p>
            </span>;
        } else {
            return null;
        }
    }
}

export default Detail;

