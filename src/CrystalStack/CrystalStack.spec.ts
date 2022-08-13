import { shallowMount } from "@vue/test-utils";
import CrystalStack from "./CrystalStack.vue";

describe("CrystalStack", () => {
  it("should render text correctly", () => {
    const wrapper = shallowMount(CrystalStack);

    expect(wrapper.findAll('.stack')).toHaveLength(1)
  });
});
