const fs = require('fs')
const path = require('path')
const https = require('https')

const ICONS = {
  'nextdotjs': 'ffffff',
  'anthropic': 'D97757',
  'supabase': '3ECF8E',
  'json': 'ffffff',
  'langchain': 'ffffff',
  'redis': 'DC382D',
  'moonshotai': 'ffffff',
  'stripe': '008CDD',
  'graphql': 'E10098'
}

const dir = path.join(__dirname, '../public/icons/simpleicons')

Object.entries(ICONS).forEach(([slug, color]) => {
  const url = `https://cdn.simpleicons.org/${slug}/${color}`
  const file = path.join(dir, `${slug}.svg`)

  https.get(url, (res) => {
    let data = ''
    res.on('data', chunk => data += chunk)
    res.on('end', () => {
      // Inject width and height to fix Safari mobile bug
      if(data.includes('<svg ')) {
        if(!data.includes('width=')) {
          data = data.replace('<svg ', '<svg width="100%" height="100%" ')
        }
      }
      fs.writeFileSync(file, data)
      console.log(`Downloaded ${slug}`)
    })
  }).on('error', err => {
    console.error(`Error downloading ${slug}:`, err.message)
  })
})
