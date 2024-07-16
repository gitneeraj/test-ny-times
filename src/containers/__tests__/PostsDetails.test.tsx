import { renderWithProviders } from '@/app/test-utils'
import { screen } from '@testing-library/react'
import { MemoryRouter, useParams } from 'react-router-dom'
import PostDetails from '../PostsDetails'
import { DEFAULT_IMAGE } from '@/constants/global'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

const mockData = {
  status: 'OK',
  copyright: 'Copyright (c) 2024 The New York Times Company.  All Rights Reserved.',
  num_results: 20,
  results: [
    {
      uri: 'nyt://article/2bc52c57-7bf3-5023-bc3f-3573a9a79d10',
      url: 'https://www.nytimes.com/2024/06/13/opinion/jd-vance-interview.html',
      id: 100000009510003,
      asset_id: 100000009510003,
      source: 'New York Times',
      published_date: '2024-06-13',
      updated: '2024-07-15 17:22:41',
      section: 'Opinion',
      subsection: 'test',
      nytdsection: 'opinion',
      adx_keywords:
        'Content Type: Personal Profile;Vice Presidents and Vice Presidency (US);Presidential Election of 2024;United States Politics and Government;Conservatism (US Politics);Russian Invasion of Ukraine (2022);Storming of the US Capitol (Jan, 2021);Constitution (US);Vance, J D;Biden, Joseph R Jr;Trump, Donald J;Republican Party;Senate;Ohio;Ukraine;Russia',
      column: null,
      byline: 'By Ross Douthat',
      type: 'Article',
      title: 'What J.D. Vance Believes',
      abstract:
        'In a long conversation, the first-term senator from Ohio talks about Trump, populism, the 2020 election, Ukraine and the Republican V.P. slot.',
      des_facet: [
        'Content Type: Personal Profile',
        'Vice Presidents and Vice Presidency (US)',
        'Presidential Election of 2024',
        'United States Politics and Government',
        'Conservatism (US Politics)',
        'Russian Invasion of Ukraine (2022)',
        'Storming of the US Capitol (Jan, 2021)',
        'Constitution (US)',
      ],
      org_facet: ['Republican Party', 'Senate'],
      per_facet: ['Vance, J D', 'Biden, Joseph R Jr', 'Trump, Donald J'],
      geo_facet: ['Ohio', 'Ukraine', 'Russia'],
      media: [
        {
          type: 'image',
          subtype: 'photo',
          caption: '',
          copyright: 'Jeff Dean/Associated Press',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2024/06/16/multimedia/13douthatNew-zcjv/13douthatNew-zcjv-thumbStandard.jpg',
              format: 'Standard Thumbnail',
              height: 75,
              width: 75,
            },
            {
              url: 'https://static01.nyt.com/images/2024/06/16/multimedia/13douthatNew-zcjv/13douthatNew-zcjv-mediumThreeByTwo210.jpg',
              format: 'mediumThreeByTwo210',
              height: 140,
              width: 210,
            },
            {
              url: 'https://static01.nyt.com/images/2024/06/16/multimedia/13douthatNew-zcjv/13douthatNew-zcjv-mediumThreeByTwo440.jpg',
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
describe('Posts Details', () => {
  it('should render', () => {
    ;(useParams as jest.Mock).mockReturnValue({ id: '100000009510003' })

    renderWithProviders(
      <MemoryRouter>
        <PostDetails />
      </MemoryRouter>,
      { preloadedState: { posts: { posts: mockData } } },
    )

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('should render default image', () => {
    ;(useParams as jest.Mock).mockReturnValue({ id: '100000009510003' })

    renderWithProviders(
      <MemoryRouter>
        <PostDetails />
      </MemoryRouter>,
      {
        preloadedState: {
          posts: { posts: { ...mockData, results: [{ ...mockData.results[0], media: [] }] } },
        },
      },
    )

    const displayedImage = document.querySelector('img') as HTMLImageElement
    expect(displayedImage.src).toContain(DEFAULT_IMAGE)
  })

  it('should render 404', () => {
    ;(useParams as jest.Mock).mockReturnValue({ id: '000-000' })

    renderWithProviders(
      <MemoryRouter>
        <PostDetails />
      </MemoryRouter>,
      { preloadedState: { posts: { posts: mockData } } },
    )

    expect(screen.getByText(/404/i)).toBeInTheDocument()
  })
})
