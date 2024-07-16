const mockData = {
  results: [
    {
      uri: 'nyt://article/4a9e8b6f-44db-5707-8f18-49b8e5636ef5',
      url: 'https://www.nytimes.com/2024/07/15/us/politics/pennsylvania-virginia-polls-biden-trump.html',
      id: 100000009567445,
      asset_id: 100000009567445,
      source: 'New York Times',
      published_date: '2024-07-15',
      updated: '2024-07-15 18:54:28',
      section: 'U.S.',
      subsection: 'Politics',
      nytdsection: 'u.s.',
      adx_keywords:
        'Presidential Election of 2024;Polls and Public Opinion;Biden, Joseph R Jr;Trump, Donald J;New York Times/Siena College Poll',
      column: null,
      byline: 'By Adam Nagourney and Ruth Igielnik',
      type: 'Article',
      title: 'Biden Facing Challenges in Two Must-Win States, Times/Siena Polls Find',
      abstract:
        'The polls, taken before the assassination attempt on Donald J. Trump, found President Biden trailing Mr. Trump in Pennsylvania, a swing state critical to his re-election hopes, and slightly ahead in Virginia, a state he won by 10 points in 2020.',
      des_facet: ['Presidential Election of 2024', 'Polls and Public Opinion'],
      org_facet: ['New York Times/Siena College Poll'],
      per_facet: ['Biden, Joseph R Jr', 'Trump, Donald J'],
      geo_facet: [],
      media: [
        {
          type: 'image',
          subtype: 'photo',
          caption: '',
          copyright: 'The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2024/07/11/multimedia/2024-07-09-pa-polls-index/2024-07-09-pa-polls-index-thumbStandard-v5.png',
              format: 'Standard Thumbnail',
              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2024/07/11/multimedia/2024-07-09-pa-polls-index/2024-07-09-pa-polls-index-mediumThreeByTwo210-v5.png',
              format: 'mediumThreeByTwo210',
              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2024/07/11/multimedia/2024-07-09-pa-polls-index/2024-07-09-pa-polls-index-mediumThreeByTwo440-v5.png',
              format: 'mediumThreeByTwo440',
              height: 293,
              width: 440,
            },
          ],
        },
      ],
      eta_id: 0,
    },
  ],
}
describe('e2e flow', () => {
  it('should render', () => {
    cy.visit('http://localhost:3000')
  })

  it('displays post details', () => {
    cy.intercept('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*', mockData)
    cy.visit('http://localhost:3000')
    cy.intercept('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*', mockData)
    cy.visit('localhost:3000/post/100000009567445')
    cy.contains(mockData.results[0].title).should('exist')
    cy.contains(mockData.results[0].updated).should('exist')
    cy.contains(mockData.results[0].byline).should('exist')
  })
})

