import { shallowMount } from "@vue/test-utils";
import CrystalStack from "./CrystalStack.vue";

describe("SampleComponent", () => {
  it("should render text correctly", () => {
    const header = "header text";
    const body = "body text";
    const wrapper = shallowMount(CrystalStack, {
      props: { headingText: header, bodyText: body }
    });

    const headerText = wrapper.find("h2");
    const bodyText = wrapper.find("p");
    expect(headerText.text()).toMatch(header);
    expect(bodyText.text()).toMatch(body);
  });
});
