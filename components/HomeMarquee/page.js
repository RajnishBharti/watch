import Link from 'next/link'
import st from './marque.module.css'

export default function page() {
  return (
    <>
    {/* <img src="/images/service-section.svg" className="img-fulid" /> */}
    <div className={st.marqueebg}>
      <div className={st.marqueebgColor}>
    <div className='container'>
      <div className={st.content}>
        <div className='text-white'>
        <h2 className='text-white h2 text-left underline pb-3'>Service Center</h2>
        <p className='pb-4 normText text-white'>State-of-the-art facility to deliver <br/>the care your watch deserves.</p>
        <Link class="blackBtn d-table ms-md-0 mx-auto" href="/watch-care"><span>Discover More</span></Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}



