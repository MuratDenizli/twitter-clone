import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Murat Denizli"
        slug="muratdenizli29"
        datetime={new Date('2020-08-02')}
        text={`Tweet1`}
      />
      <Tweet
        name="Murat Denizli"
        slug="muratdenizli29"
        datetime={new Date('2020-08-02')}
        text={`Tweet 2
        
        buda aşağıya geçilmiş hali`}
      />
    </Layout>
  )
}

export default HomePage
