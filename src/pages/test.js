import React, { useEffect } from 'react'

export default function Test() {

    const callback = (entries) => {
        entries.forEach((entry) => {
            let ele = entry.target.childNodes[0]
            console.log(ele)
            ele.play().then(() => {
                if (!ele.paused && !entry.isIntersecting) {
                    ele.pause()
                }
            })
        })
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback, { threshold: 1.0 });
        const elements = document.querySelectorAll("#videos")
        elements.forEach((element) => {
            observer.observe(element)
        })
    }, [])

    return (
        <>
            <div className="bg-info p-5" style={{ width: "100vw" }}>
                <div className="d-flex justify-content-center  mb-5 " id='videos'>
                    <video controls autoPlay muted style={{ height: "80vh", margin: "0 auto" }}>
                        <source src="/video/test.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="d-flex justify-content-center " id='videos'>
                    <video controls autoPlay muted style={{ height: "80vh", margin: "0 auto" }}>
                        <source src="/video/test2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </>
    )
};
