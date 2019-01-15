const docgen = require("react-docgen")
const deprecationHandler = require("./index")
const test = require("ava")

const handlers = docgen.defaultHandlers.concat(deprecationHandler)

const code = `
  import React from 'react'
  import PropTypes from 'prop-types'

  const Component = () => <div/>

  Component.propTypes = {
    /** @deprecated dont use this prop */
    old: PropTypes.any,
    /** this isn't deprecated, use it */
    new: PropTypes.any,
    /** @deprecated:meta with metadata */
    extended: PropTypes.any,
  }

  export default Component
`

const data = docgen.parse(code, null, handlers)

test("Old prop should have deprecated set to true", t => {
  t.is(data.props.old.deprecated, true)
})
test("New prop should not have deprecated key", t => {
  t.is(data.props.new.deprecated, undefined)
})
test("extended prop should have metadata", t => {
  t.is(data.props.extended.deprecationData, "meta")
})
