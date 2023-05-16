import { describe, it, expect } from 'vitest'
import getTemplateCompiler from 'lodash/template'
describe('compile template', () => {
    const template = `
    <%= author %>
    <% if(projectType){ %>
      projectType
    <% } %>
  `

    const templateCompile = getTemplateCompiler(template, { 'interpolate': /<%=([\s\S]+?)%>/g })
    it('should replace space', () => {
        expect(templateCompile({ author: 'Joey', projectType: 'vue' } as Scope)).toMatchInlineSnapshot(`
      "
          Joey
          
            projectType
          
        "
    `)
    })
})
