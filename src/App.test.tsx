import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const setup = () => {
  let wrapper = shallow<typeof App>(<Provider store={store}><App/></Provider>)
  return wrapper
  
}
describe('App component', () =>{
  test('renders without error', () => {
      const wrapper = setup()                 
      expect(wrapper.html()).toMatchSnapshot()
  })
})