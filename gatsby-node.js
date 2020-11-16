exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  if (reporter.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }
}