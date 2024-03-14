import NavBar from "../_components/navbar";

const PagesLayout = ({
    children,
}:{
    children: React.ReactNode;
}) => {
  return (
    <div>
      <NavBar/>
      <main className='h-full'>
        {children} 
      </main>
    </div>
  )
}

export default PagesLayout