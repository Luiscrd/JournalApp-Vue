import { shallowMount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('Pruebas en el About View', () => {

  test('Debe renderizar el componente correctamente', () => {

      const wrapper = shallowMount(AboutView)

      expect( wrapper.html() ).toMatchSnapshot()

  });

})