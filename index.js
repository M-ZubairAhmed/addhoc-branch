module.exports = robot => {
  robot.on('pull_request.opened', async context => {
    console.log('To', context.payload.pull_request.base.ref)
    console.log('content', context.payload.pull_request)
    const params = context.payload.pull_request
    console.log(params)
    console.log(context.issue)
    const statusParams = context.issue({ state: 'closed' })
    context.github.issues.addLabels(context.issue({ labels: ['invalid'] }))
    context.github.pullRequests.update(statusParams)
    return context.github.issues.createComment(
      context.issue({ body: 'thanls' }),
    )
  })
}
