const fsx = require('fs-extra')
const path = require('path')
const ejs = require('ejs')
const marked = require('marked')

fsx.removeSync('dist')
fsx.copySync('src/styles/icons', 'dist/styles/icons')
fsx.copySync('src/styles/img', 'dist/styles/img')
fsx.copySync('src/scripts', 'dist/scripts')
fsx.copySync('src/translations', 'dist/translations')

const translations = ['pl', 'en', 'no', 'ru', 'fn']

for (const language of translations) {
  loadTranslations(language)
  const html = ejs.render(
    fsx.readFileSync('src/index.ejs', 'utf-8'),
    loadTranslations(language),
    {
      views: [path.join(__dirname, 'src/partials')]
    }
  )
  fsx.outputFileSync(`dist/${language}/index.html`, html)
  if (language === translations[0]) {
    fsx.outputFileSync(`dist/index.html`, html)
  }
}

function loadTranslations (language) {
  const folderPath = `./src/translations/${language}`
  const filePath = path.join(folderPath, `${language}.json`)
  const json = JSON.parse(fsx.readFileSync(filePath))
  const files = fsx.readdirSync(folderPath)
    .filter(name => name.endsWith('.md'))
    .map(name => ({
      name: name.substring(0, name.length - 3),
      content: fsx.readFileSync(path.join(folderPath, name), 'utf-8'),
    }))
    .map(({ name, content }) => ({
      name,
      content: marked(content)
    }))
  for (const { name, content } of files) {
    json[name] = content
  }
  return json
}
