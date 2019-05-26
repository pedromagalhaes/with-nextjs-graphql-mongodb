export default (context, target) => {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target })
    context.res.end()
  } else if (typeof window !== 'undefined') {
    window.location.href = target
  }
}
