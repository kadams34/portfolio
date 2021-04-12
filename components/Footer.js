import React from 'react'

const Footer = () => {

    function getCurrentYear() {
        return new Date().getFullYear()
    }

    return (
        <>
        <footer className="bg-dark text-white py-3">
            <p className="text-center mb-0">©<a className="text-white text-decoration-none" href="https://github.com/kadams34">Kevin Adams</a>&nbsp;|&nbsp;{getCurrentYear()}</p>
        </footer>
        </>
    )
}

export default Footer