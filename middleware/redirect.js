export default function (context) {
  console.log('context.route.path', context.route.path)
  if (context.route.path === '/') {
    context.redirect(302, '/list')
  }
}
