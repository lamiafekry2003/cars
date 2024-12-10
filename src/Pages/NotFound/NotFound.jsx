import notfound from '../../assets/not-found/404-not-found.png'
export default function NotFound() {
  return (
    <div className=' flex justify-center items-center py-16'>
        <img src={notfound} alt="notfound" className='w-1/2' />
    </div>
  )
}
