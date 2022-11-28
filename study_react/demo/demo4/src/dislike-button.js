"use strict";

const e2 = React.createElement;

class DislikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disliked: false };
  }

  render() {
    if (this.state.disliked) {
      return "You disliked this.";
    }

    return e2(
      "button",
      { onClick: () => this.setState({ disliked: true }) },
      "Dislike"
    );
  }
}

const domContainer2 = document.querySelector("#dislike_button_container");
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e2(DislikeButton));
