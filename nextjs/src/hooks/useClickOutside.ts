import { useEffect, useRef, MutableRefObject } from "react";

/** Detects clicks outside of a component. For example,
    closing a dropdown when clicking outside of it. */
export function useClickOutside<T extends HTMLElement>(
    handler: () => void
): MutableRefObject<T | null> {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                handler();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handler]);

    return ref;
}
