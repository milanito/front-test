import puppeteer from 'puppeteer'

describe('IntegrationsTest', () => {
  let browser

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    })
  })

  afterAll(() => browser.close())

  it('Home loads correctly', async () => {
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.table')

    page.close()
  }, 16000)

  it('Survey page loads correctly', async () => {
    const page = await browser.newPage()

    await page.goto('http://localhost:3000/survey/XX3/Melun')
    await page.waitForSelector('.grid')

    page.close()
  }, 16000)
})
