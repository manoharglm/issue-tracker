import React,{ Component} from 'react';
import store from './store';
import { Provider } from 'react-redux'
import IssueTracker from './Components/IssueTracker'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IssueTracker />
      </Provider>
    );
  }
}
