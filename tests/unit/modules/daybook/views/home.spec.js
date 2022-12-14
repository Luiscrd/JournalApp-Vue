import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('Pruebas en el Home View', () => {

      test('Debe renderizar el componente correctamente', () => {

          const wrapper = shallowMount(HomeView)

          expect( wrapper.html() ).toMatchSnapshot()

      })
    test('Hacer clic en un boton debe redirecionar a no-entry', () => {

        const mockRouter = {
            push: jest.fn()
        }

        const wrapper = shallowMount(HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect(mockRouter.push).toHaveBeenCalled()

        expect(mockRouter.push).toHaveBeenCalledWith({ name: 'no-entry' })

    });

})