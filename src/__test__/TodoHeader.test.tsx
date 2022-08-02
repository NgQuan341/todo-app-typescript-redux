
import { shallow, mount } from 'enzyme'
import TodoHeader from '../components/TodoHeader';
import { Typography } from 'antd';

const setupShallow = () => {
   let wrapper = shallow<typeof TodoHeader>(<TodoHeader />)
   return wrapper
}
const setupMount = () => {
    let wrapper = mount<typeof TodoHeader>(<TodoHeader />)
    return wrapper
 }
 
describe('TodoHeader component', () =>{
    test('renders without error', () => {
        const wrapper = setupShallow()                 
        expect(wrapper.html()).toMatchSnapshot()
    })
    // test ('test text in component Typography', () =>{
    //     const wrapper = setupShallow()        
    //     // expect(wrapper.find(<Typography/>)).text().toEqual('TODO APP')
        
    // })
})