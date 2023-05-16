import { mount } from '@vue/test-utils';
import CreateThought from '../../../src/views/CreateThought.vue';
import axios from 'axios';



jest.mock('axios');

describe('CreateThought', () => {
  it('sends data to the backend when the form is submitted', async () => {
    const wrapper = mount(CreateThought);

    // Fill in form inputs
    await wrapper.find('[data-testid="title"]').setValue('Test Title');
    await wrapper.find('[data-testid="category"]').setValue('Test Category');
    await wrapper.find('[data-testid="thought"]').setValue('Test Thought');

    // Mock axios.post to return a successful response
    axios.post.mockResolvedValue({ status: 201 });

    // Simulate form submission
    await wrapper.find('[data-testid="submit"]').trigger('click');

    // Assert that axios.post was called with the correct data
    expect(axios.post).toHaveBeenCalledWith(
      `${backendUrl}/api/posts`,
      {
        title: 'Test Title',
        category: 'Test Category',
        thought: 'Test Thought'
      }
    );

    // Assert that form inputs were reset
    expect(wrapper.vm.title).toBe('');
    expect(wrapper.vm.category).toBe('');
    expect(wrapper.vm.thought).toBe('');

    // Assert that router.push was called with the correct path
    expect(wrapper.vm.$route.path).toBe('/history');
  });
});
