import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CommentsList from '@/components/comments/CommentsList.vue'

describe('Registration', () => {
  const wrapper = mount(CommentsList)
  const instance = wrapper.vm as any // eslint-disable-line @typescript-eslint/no-explicit-any

  it('New comment', async () => {
    const date = new Date()
    const comment = instance.getNewComment(date, 'Description')

    expect(comment).toEqual({
      dateTime: date,
      description: 'Description'
    })
  })
})
