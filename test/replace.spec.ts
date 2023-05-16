import { describe, it, expect } from 'vitest'
import { replaceSpace } from '../src/utils'

describe('replace space', () => {
    it('should replace space', () => {
        expect(replaceSpace(` a b
c

d
    
e 
f 
    
g 
     
     
h`)).toMatchInlineSnapshot(`
  " a b
  c

  d
  e
  f
  g
  h"
`)
    })
})
