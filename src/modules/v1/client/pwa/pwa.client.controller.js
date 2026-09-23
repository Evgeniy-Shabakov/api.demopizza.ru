import { prisma } from '#lib/prisma.js'

export const pwaClientController = {
   async get(request, reply) {
      const { brandName } = await prisma.company.findFirstOrThrow({
         select: {
            brandName: true
         }
      })

      reply.type('application/manifest+json')
      return {
         name: brandName,
         short_name: brandName,
         start_url: '/',
         theme_color: '#ffffff',
         background_color: '#F5F5F5',
         display: 'standalone',
         icons: [
            { src: '/images/pwa/pwa-icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { src: '/images/pwa/pwa-icon-512x512.png', sizes: '512x512', type: 'image/png' }
         ]
      }
   },
}