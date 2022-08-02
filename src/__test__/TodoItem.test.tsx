import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux';
import TodoItem, { todoItemProps } from '../components/TodoItem';
import store from '../redux/store';

const setup = ({item}:todoItemProps) => {
   let wrapper = shallow<typeof TodoItem>(<Provider store={store}><TodoItem item={item} /></Provider>)
   return wrapper
   
}
describe('TodoItem component', () =>{
    test('renders without error', () => {
        let item = {
            id:'jjjj',
            name:'todo1',
            completed:true
        }
        const wrapper = setup({item}) 
        expect(wrapper.html()).toMatchSnapshot()
    })
})