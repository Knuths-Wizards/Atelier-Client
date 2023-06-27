import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RatingsReviews from './RatingsReviews'
import dummyIO from './test-data/dummyIO'
import serverIO from './serverIO'
import sinon from 'sinon'


describe('Ratings and Reviews', ()=>{
  const RR = <RatingsReviews productId={0}/>
  sinon.stub(serverIO, "getReviews").callsFake(dummyIO.fakeReviews)

  describe('ReviewsList', ()=>{
    it('Should display two reviews', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
    })

    it('Should show the "more reviews" button', async ()=>{
      render(RR)
      await waitFor(()=>{
        let button = screen.getByText('More Reviews')
        expect(button).toBeVisible()
      })
    })

    it('Should display two more reviews when button is clicked', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      await userEvent.click(screen.getByText('More Reviews'))
      expect(screen.getAllByTestId('review').length).toBe(4)
    })

    it('Should hide the button if all reviews are displayed', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      let button = screen.getByText('More Reviews')
      await userEvent.click(button)
      await userEvent.click(button)
      await userEvent.click(button)
      button = screen.queryByText('More Reviews')
      expect(button).not.toBeVisible()
    })
  })

  describe('Review Tile', ()=>{

    it('Should show Star Rating', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      let reviews = screen.getAllByTestId('review')
      reviews.forEach((review)=>{
        expect(within(review).getByTestId('stars')).toBeInTheDocument()
      })
    })

    it('Should display review date', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      expect(screen.getByText('2023')).not.toBeNull()
    })
    it('Should display review summary (aka title)', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      expect(screen.getByText('Yes')).toBeInTheDocument()
      expect(screen.getByText('Best purchase')).toBeInTheDocument()
    })
    it('Should display review body', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      expect(screen.getByText('Yes')).toBeInTheDocument()
      expect(screen.getByText('I loved it')).toBeInTheDocument()
    })
    it('Should display reviewer name', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      expect(screen.getByText('JSON')).toBeInTheDocument()
      expect(screen.getByText('hello')).toBeInTheDocument()
    })
    it('Should ask if review was helpful', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      expect(screen.getByText('Was this review helpful?')).toBeInTheDocument()
      expect(screen.getByText('Yes (0)')).toBeInTheDocument()
    })

    it('Should update count when "Yes" is clicked', async ()=>{
      render(RR)
      await waitFor(()=>{
        expect(screen.getAllByTestId('review').length).toBe(2)
      })
      var links = screen.getAllByText(/Yes (\d+)/)
      links.forEach((link)=>{
        expect(within(link).getByText('Yes (0)')).toBeInTheDocument()
      })
      await userEvent.click(links[1])
      links = screen.getAllByText(/Yes (\d+)/)
      links.forEach((link, i)=>{
        expect(within(link).getByText(`Yes (${i})`)).toBeInTheDocument()
      })
    })
  })
})