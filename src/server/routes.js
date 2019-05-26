const routes = require('next-routes')

module.exports = routes()
  .add('/', '/')
  .add('/login', '/public/authentication/login')
  .add('/register', '/public/authentication/register')
  .add('/about', '/public/about')
  .add('/projects', '/public/projects')
  .add('/services', '/public/services')
  .add('/blog', '/public/blog')
  .add('/contact', '/public/contact')
  .add('/privacy', '/public/legal/privacy')
  .add('/terms', '/public/legal/terms')
  .add('/templates/colors', '/public/templates/colors')
  .add('/confirmation', '/public/authentication/confirmation')
  .add('/changepassword', '/public/authentication/changepassword')
  .add('/forgotpassword', '/public/authentication/forgotpassword')
  .add('/search', '/public/search')
  .add('/dashboard', '/dashboard')
  .add('/dashboard/profile', '/dashboard/profile')

/*
  '/admin': { page: '/admin/login' },
  '/admin/menu': { page: '/admin/menu' },
  '/admin/tools': { page: '/admin/tools/modules' },
  '/admin/tools/labels': { page: '/admin/tools/labels' },
  '/admin/pages': { page: '/admin/pages/home' },
  '/admin/pages/about': { page: '/admin/pages/about' },
  '/admin/pages/changepassword': { page: '/admin/pages/changepassword' },
  '/admin/pages/contact': { page: '/admin/pages/contact' },
  '/admin/pages/forgotpassword': { page: '/admin/pages/forgotpassword' },
  '/admin/pages/login': { page: '/admin/pages/login' },
  '/admin/pages/register': { page: '/admin/pages/register' },
  '/admin/pages/privacy': { page: '/admin/pages/privacy' },
  '/admin/pages/terms': { page: '/admin/pages/terms' },
  '/admin/pages/projects': { page: '/admin/pages/projects' },
  '/admin/pages/dashboard': { page: '/admin/pages/dashboard' },
  '/admin/pages/dashboard/profile': { page: '/admin/pages/dashboard/profile' },
  '/admin/pages/blog': { page: '/admin/pages/blog' },
  '/admin/pages/blog/category': { page: '/admin/pages/blog/category' },
  '/admin/pages/blog/post': { page: '/admin/pages/blog/post' },
  '/admin/pages/blog/posts': { page: '/admin/pages/blog/posts' }
*/
