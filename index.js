const pattern = /@deprecated\:\w*/

function deprecationHandler(documentation) {
  for (var [key, value] of documentation._props.entries()) {
    if (value.description.includes("@deprecated")) {
      value.deprecated = true

      /* default expected value of annotation */
      let deprecatedAnnotation = "@deprecated "

      /* extended metadata format: @deprecated:metadata */
      const match = value.description.match(pattern)
      if (match) {
        deprecatedAnnotation = match[0]
        value.deprecationData = deprecatedAnnotation.replace("@deprecated:", "")
      }

      /* strip annotation */
      value.description = value.description.replace(deprecatedAnnotation, "")
    }
  }
}

module.exports = deprecationHandler
