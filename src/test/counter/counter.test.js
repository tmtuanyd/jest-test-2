import React from 'react'
import Counter from "../../components/counter/Counter";
import {shallow} from 'enzyme'
import '../../setupTest'

describe('Counter component', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper =shallow(<Counter/>)
    })
    it('Start with a count of 0', ()=>{
        const text = wrapper.find('p').text()
        expect(text).toEqual('Current count: 0')
    })

    it('can increment the count when the button is clicked',()=>{
        const incrementBtn = wrapper.find('button.increment')
        incrementBtn.simulate('click')
        const text = wrapper.find('p').text()
        expect(text).toEqual('Current count: 1')
    })
    it('can decrement the count when the decrement button is clicked',()=>{
        const decrementBtn = wrapper.find('button.decrement')
        decrementBtn.simulate('click')
        const text = wrapper.find('p').text()
        expect(text).toEqual('Current count: -1')
    })
})