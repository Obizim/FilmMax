import React from 'react'

function Footer() {
    

    return (
        <div className="border-t border-black flex items-center justify-between lg:p-12 py-6 px-4 font-quicksand">
             <div><h1 className="text-xl text-red-600">&copy; FilmMax
             </h1>
             <p>Reach out ➡</p>
             </div>
            <div className="space-x-4 lg:text-xl text-normal">
            <a href="https://twitter.com/Obizim_" target="_blank" rel="noreferrer"><i className="fab fa-twitter transition hover:text-blue-400" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Obizim" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/obizim/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in hover:text-blue-500"></i></a>
            </div>
        </div>
    )
}

export default Footer