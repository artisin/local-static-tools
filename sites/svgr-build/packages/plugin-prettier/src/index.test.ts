/* eslint-disable @typescript-eslint/no-var-requires */
import prettier from '.'

const state = { componentName: 'Foo' }

describe('prettier', () => {
  it('should prettify code', () => {
    const result = prettier(
      `const foo = <div></div>`,
      {
        prettier: true,
        runtimeConfig: true,
      },
      state,
    )
    expect(result).toBe('const foo = <div></div>\n')
  })

  it('should support config.prettierConfig', () => {
    const result = prettier(
      `const foo = <div></div>`,
      {
        prettier: true,
        runtimeConfig: true,
        prettierConfig: { semi: true },
      },
      state,
    )
    expect(result).toBe('const foo = <div></div>;\n')
  })

  it('should use state.filePath to detect configuration', () => {
    const result = prettier(
      `const foo = <div></div>`,
      { prettier: true, runtimeConfig: true },
      { ...state, filePath: '/tmp' },
    )
    expect(result).toBe('const foo = <div></div>;\n')
  })

  it('should resolve the prettier config with the editorconfig option', () => {
    jest.resetModules()
    jest.doMock('prettier')
    /* eslint-disable global-require */
    const prettierPlugin = require('.').default
    const { resolveConfig } = require('prettier')
    /* eslint-enable global-require */

    prettierPlugin(
      `const foo = <div></div>`,
      {
        prettier: true,
        runtimeConfig: true,
      },
      {},
    )
    expect(resolveConfig.sync).toHaveBeenCalledWith(expect.any(String), {
      editorconfig: true,
    })
  })

  it('should not load runtime configuration with `runtimeConfig: false`', () => {
    jest.resetModules()
    jest.doMock('prettier')
    /* eslint-disable global-require */
    const prettierPlugin = require('.').default
    const { resolveConfig } = require('prettier')
    /* eslint-enable global-require */

    prettierPlugin(
      `const foo = <div></div>`,
      {
        prettier: true,
        runtimeConfig: false,
      },
      {},
    )
    expect(resolveConfig.sync).not.toHaveBeenCalled()
  })
})
