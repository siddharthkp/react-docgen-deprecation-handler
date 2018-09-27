function deprecationHandler(documentation) {
  for (var [key, value] of documentation._props.entries()) {
    if (value.description.includes("@deprecated ")) {
      value.deprecated = true
      value.description = value.description.replace("@deprecated ", "")
    }
  }
}

module.exports = deprecationHandler
