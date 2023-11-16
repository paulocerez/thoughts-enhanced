// CreateThought.spec.js
import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import CreateThought from "@/components/CreateThought.vue";

jest.mock("axios");

describe("CreateThought.vue", () => {
  it("sends a post request with the correct data", async () => {
    const wrapper = shallowMount(CreateThought);
    const thoughtData = {
      title: "Test Title",
      category: "Test Category",
      thought: "Test Thought",
    };

    // Simulate user input
    wrapper.setData(thoughtData);

    // Mock token storage
    localStorage.setItem("token", "test-token");

    // Simulate form submission
    await wrapper.vm.submitForm();

    // Check if axios post was called correctly
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/api/posts",
      thoughtData,
      {
        headers: { Authorization: "Bearer test-token" },
      }
    );
  });
});
