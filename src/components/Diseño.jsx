function Diseño(){
    return(
        <section className="flex">
            <div className="w-1/4 mx-auto border-2 h-96 my-10">                
                <nav className="h-1/4 navL"><h2 className="text-center pt-2 text-black font-bold text-lg">Light Mode</h2></nav>
                <main className="flex h-2/4 mainL"><button className="buttonL m-auto px-9 py-4 rounded-md text-white font-bold text-md">Boton</button></main>
                <footer className="h-2/4 footerL">
                <p className="text-black font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper lacus justo, ac condimentum nunc finibus id. Integer sit amet ultrices orci. Mauris nec elit suscipit tellus aliquam posuere sit amet vitae diam. Phasellus malesuada est sapien, et lobortis enim blandit eget. Cras dictum laoreet faucibus. Nunc velit libero, facilisis eget tempus at, congue ut sem.
                    </p>
                </footer>
            </div>

        
            <div className="w-1/4 mx-auto border-2 h-96 my-10">                
                <nav className="h-1/4 navD"><h2 className="text-center pt-2 text-white font-bold text-lg">Dark Mode</h2></nav>
                <main className="flex h-2/4 mainD"><button className="buttonD m-auto px-9 py-4 rounded-md text-white font-bold text-md">Boton</button></main>
                <footer className="h-2/4 footerD">
                    <p className="text-white font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper lacus justo, ac condimentum nunc finibus id. Integer sit amet ultrices orci. Mauris nec elit suscipit tellus aliquam posuere sit amet vitae diam. Phasellus malesuada est sapien, et lobortis enim blandit eget. Cras dictum laoreet faucibus. Nunc velit libero, facilisis eget tempus at, congue ut sem.
                    </p>
                </footer>
            </div>
        </section>
    )
}
export default Diseño;