import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RegisterUser from '@/view/RegisterUser.vue'

describe('Registration', () => {
  const wrapper = mount(RegisterUser)
  const instance = wrapper.vm as any // eslint-disable-line @typescript-eslint/no-explicit-any

  it('Passwords are equal', async () => {
    instance.password = 'correctPassword'
    instance.confirmationPassword = 'correctPassword'

    await wrapper.vm.$nextTick()

    expect(instance.isPasswordsEqual).toBe(true)
  })

  it('Passwords are not equal', async () => {
    instance.password = 'correctPassword'
    instance.confirmationPassword = 'wrongPassword'

    await wrapper.vm.$nextTick()

    expect(instance.isPasswordsEqual).toBe(false)
  })
})
