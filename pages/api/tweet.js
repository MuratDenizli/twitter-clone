import Twit from '../../lib/twit'

export default (req, res) => {
  Twit.get('search/tweets', { from: 'muratdenizli29', count: 20 }, function (
    err,
    data,
    response
  ) {
    if (err) {
      return res.status(400).json({ message: 'Ups! bir hata oldu.' })
    }
    res.status(200).json(data)
  })
}

// export default async function handler(req, res) {
//   const data = await fetch(`https://polls.apiblueprint.org/questions`)
//   const items = await data.json()
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.json(items).end()
// }
