// ThoughtHistory.spec.js
import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import ThoughtHistory from "@/components/ThoughtHistory.vue";

jest.mock("axios");

describe("ThoughtHistory.vue", () => {
  const mockPosts = [
    {
      id: 1,
      userId: 1,
      title: "Test Title 1",
      category: "Test Category 1",
      thought: "Test Thought 1",
      isEditing: false,
    },
    {
      id: 2,
      userId: 1,
      title: "Test Title 2",
      category: "Test Category 2",
      thought: "Test Thought 2",
      isEditing: false,
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockPosts });
  });

  it("fetches posts and renders them on mount", async () => {
    const wrapper = shallowMount(ThoughtHistory, {
      global: {
        mocks: {
          $router: [],
        },
      },
    });

    // Wait for the nextTick for the component to update after the promise resolution
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.posts).toEqual(mockPosts);
    expect(wrapper.findAll(".card").length).toBe(mockPosts.length);
  });

  it("deletes a post when delete button is clicked", async () => {
    axios.delete.mockResolvedValue({});

    const wrapper = shallowMount(ThoughtHistory, {
      global: {
        mocks: {
          $router: [],
        },
      },
    });

    await wrapper.vm.$nextTick();

    // Simulate delete post
    await wrapper.vm.deletePost(1);

    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:8000/api/posts/1"
    );
    expect(wrapper.vm.posts.length).toBe(mockPosts.length - 1);
  });

  // Add more tests for editPost, savePost, cancelEdit as needed
});
