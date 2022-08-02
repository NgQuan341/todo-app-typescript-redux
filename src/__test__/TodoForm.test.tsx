import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux';
import TodoForm from '../components/TodoForm';
import store from '../redux/store';

const setupShallow = () => {
   let wrapper = shallow<typeof TodoForm>(<Provider store={store}><TodoForm /></Provider>)
   return wrapper
}
const setupMount = () => {
    let wrapper = mount<typeof TodoForm>(<Provider store={store}><TodoForm /></Provider>)
    return wrapper
 }
 
describe('TodoForm component', () =>{
    test('renders without error', () => {
        const wrapper = setupShallow()                 
        expect(wrapper.html()).toMatchSnapshot()
    })
    // test('input should call handleInputChange on change event', () =>{
    //     const wrapper = setupMount();
    //     const myMethod = jest.spyOn(wrapper,handleAddButtonClick)
    //     const event = {target:{value: 'todo1'}};

    // })
    // test ('test find button in TodoForm', () =>{
    //     const wrapper = setupMount()   
    //     expect(wrapper.find(`[name='submit-button']`)).toBeTruthy();            
    // })
})