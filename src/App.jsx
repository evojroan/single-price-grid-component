import './App.css';
function App() {
  return (
    <>
      <div className='grid  sm:grid-cols-1 lg:grid-cols-2 rounded-md w-[640px]   overflow-hidden font-karla   '>
        <div className='col-span-2 bg-white p-8 sm:col-span-1 sm:w-[320px] lg:col-span-2 '>
          <h1 className='text-3xl font-extrabold text-[#2AB2AF] my-2.5 sm:text-2xl'>
            Join our community
          </h1>
          <h3 className='text-xl text-[#C0DF34] my-2.5 sm:text-base'>
            30-day, hassle-free money back guarantee{' '}
          </h3>
          <p className='text-slate-400'>
            Gain access to our full library of tutorials along with expert code
            reviews. Perfect for any developers who are serious about honing
            their skills.
          </p>
        </div>

        <div className='bg-[#2AB2AF] p-8 text-white sm:w-[320px]'>
          <h3 className='text-xl mb-2.5  sm:text-base'>Monthly Subsciption </h3>
          <span className='inline-block text-4xl my-2.5'>$29</span>
          <span className='inline-block  text-white font-thin my-2.5 ml-3'>
            per month
          </span>
          <p className='my-2.5'>Full access for less than $1 a day</p>
          <button className='bg-[#C0DF34] rounded-md w-full mt-[20px] h-10'>
            Sign up
          </button>
        </div>

        <div className='bg-[#52e0e0] p-8 text-white sm:w-[320px]'>
          <h3 className='text-xl mb-2.5  sm:text-base'>Why us </h3>
          <div className=''>
            <p>Tutorials by industry experts</p>
            <p>Peer & expert code review</p>
            <p>Coding exercises</p>
            <p>Access to our GitHub repos</p>
            <p>Community forum</p>
            <p>Flashcard decks</p>
            <p> New videos every week</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
