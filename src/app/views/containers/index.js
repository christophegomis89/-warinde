import { connect } from "react-redux";

import App from "../components";
import { updateCart, removeFromCart } from "../../lib/actions";

export const AppContainer = connect(
  function mapStateToProps(state) {
    return { items: state.items };
  },
  function mapDispatchToProps(dispatch) {
    return {
      onUpdateCart: (item, quantity) => dispatch(updateCart(item, quantity)),
    };
  }
)(App);
