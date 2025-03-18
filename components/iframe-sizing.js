import { useEffect } from "react";

/*
this is custom javascript so that the calculator, when loaded in an iframe, dynamically updates the document height to the parent. 
This is to avoid double scrollbars and provide a better user experience.
It also displays a full screen icon to expand the iframe content to the maximum screen size.
*/

export default function IframeResizer() {
    useEffect(() => {
        console.log("[Iframe] IframeResizer Hook Mounted");

        function updateHeight() {
            const height = document.documentElement.scrollHeight;
            window.parent.postMessage({ iframeHeight: height }, '*');
        }

        // Run on load and whenever the page changes
        updateHeight();
        window.addEventListener('resize', updateHeight);

        // Monitor DOM changes (e.g., expanding divs)
        const observer = new MutationObserver(() => {
            console.log("[Iframe] DOM changed, updating height.");
            updateHeight();
        });
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });

        // Fullscreen Button Injection
        setTimeout(() => {
            const h4Element = document.querySelector("h4.text-balance.text-2xl");

            if (h4Element) {
                console.log("[Iframe] Found h4 element, adding fullscreen button.");

                // Create the fullscreen button
                const fullscreenBtn = document.createElement("button");
                fullscreenBtn.innerHTML = "⛶";  // Unicode fullscreen icon
                fullscreenBtn.title = "Full screen"; // Hover tooltip
                fullscreenBtn.style.position = "absolute";
                fullscreenBtn.style.right = "10px";
                fullscreenBtn.style.top = "50%";
                fullscreenBtn.style.transform = "translateY(-50%)";
                fullscreenBtn.style.fontSize = "1.5rem";
                fullscreenBtn.style.background = "transparent";
                fullscreenBtn.style.outline = "none";  // Prevents click focus outline
                fullscreenBtn.style.border = "none";   // Ensures no unwanted border
                fullscreenBtn.style.cursor = "pointer";
                fullscreenBtn.style.color = "#333";

                // Function to toggle fullscreen mode
                function toggleFullscreen() {
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen().then(() => {
                            fullscreenBtn.innerHTML = "✕"; // Change to close icon
                            fullscreenBtn.title = "Exit full screen"; // Update tooltip
                        });
                    } else {
                        document.exitFullscreen().then(() => {
                            fullscreenBtn.innerHTML = "⛶"; // Change back to fullscreen icon
                            fullscreenBtn.title = "Full screen"; // Update tooltip
                        });
                    }
                }

                // Attach click event to toggle fullscreen
                fullscreenBtn.addEventListener("click", toggleFullscreen);

                // Wrap the h4 in a relative container
                const wrapper = document.createElement("div");
                wrapper.style.position = "relative";
                wrapper.style.display = "inline-block";
                wrapper.style.width = "100%";

                h4Element.parentNode.replaceChild(wrapper, h4Element);
                wrapper.appendChild(h4Element);
                wrapper.appendChild(fullscreenBtn);
            } else {
                console.warn("[Iframe] Main div h4 title element not found.");
            }
        }, 500);  // Delay to ensure React has fully loaded

        return () => {
            console.log("[Iframe] useIframeSizing Hook Unmounted");
            observer.disconnect();
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return null; 
}
