function revealToSpan(){
    document.querySelectorAll(".reveal")
        .forEach(function(elem)
        {
            // Created two spans
            let parent = document.createElement("span");
            let child = document.createElement("span");

            // added class to span of parent and child
            parent.classList.add("parent");
            child.classList.add("child");

            // span parent gets child and child gets elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            // elem replaces its value with parent span
            elem.innerHTML = "";
            elem.appendChild(parent);
    }); 
}

revealToSpan();

var tl = gsap.timeline();

tl
    .from(".child span", {
        x: 100,
        stagger: 0.20,
        duration: 2,
        ease: Power3.easeInOut
    })

    .to(".parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#loader", {
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "100%",
        top:0,
        duration: 1,
        delay: -0.8,
        ease: Circ.easeInOut
    })
    .to("#green", {
        height: "0%",
        duration: 1,
        delay:-0.5,
        ease: Circ.easeInOut
    })
 