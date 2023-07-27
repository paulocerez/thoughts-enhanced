import { shallowMount } from '@vue/test-utils';
import axios from 'axios';
import CreateThought from '../../../src/views/CreateThought';

jest.mock('axios', () => ({
  post: jest.fn(() => Promise.resolve({ status: 201 }))
}));

describe('CreateThought.vue', () => {
  it('submits form and makes HTTP request to the correct endpoint', async () => {
    const wrapper = shallowMount(CreateThought);

    // Simulate form input
    wrapper.setData({
      title: 'Test Title',
      category: 'Test Category',
      thought: 'Test Thought'
    });

    // Simulate form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assert that axios.post was called with the correct arguments
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/api/posts', {
      title: 'Test Title',
      category: 'Test Category',
      thought: 'Test Thought'
    });
  });
});
