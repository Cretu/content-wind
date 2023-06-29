export default defineAppConfig({
  // Configure Content Wind here
  cover: '/cover.jpg',

  socials: {
    twitter: 'Atinux',
    github: 'Atinux/content-wind'
  },

  prose: {
    h1: {
      icon: 'carbon:sailboat-coastal'
    },

    copyButton: {
      iconCopy: 'iconoir:3d-arc-center-pt',
      iconCopied: 'teenyicons:360-solid'
    }
  },

  nuxtIcon: {
    aliases: {
      light-mode: 'bx:arrow-back'
    }
  }
})