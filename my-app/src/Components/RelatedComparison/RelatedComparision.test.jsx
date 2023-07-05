import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RelatedComparison from './RelatedComparison.jsx'
import Outfits from './Outfits/Outfits.jsx'


describe('Ratings and Reviews', ()=>{
  const RC = <RelatedComparison/>


  describe('RelatedComparison', ()=>{
    it('Should display Related', async ()=>{
      render(RC)
      await waitFor(()=>{
          let Related = screen.getByText('Related')
          expect(Related).toBeVisible()
      })
    })

    it('Should display Outfits', async ()=>{
      render(RC)
      await waitFor(()=>{
        let Outfits = screen.getByText('Outfits')
        expect(Outfits).toBeVisible()
      })
    })

  })

})