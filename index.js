import axios from 'axios'
import cheerio from 'cheerio'

const REQ_URL = 'https://www.facebook.com/marketplace/category/vehicles/?minYear=2010&topLevelVehicleType=motorcycle&exact=false'
const POST_LIST_CLASS = '.bq4bzpyk.j83agx80.btwxx1t3.lhclo0ds.jifvfom9.muag1w35.dlv3wnog.enqfppq2.rl04r1d5'
const POST_CLASS = ''

const res = await axios(REQ_URL)
console.log(res.data)

const $ = cheerio.load(res.data)
const listings = $(POST_CLASS).attr('href')
console.log(listings);
