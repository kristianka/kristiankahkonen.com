import { AboutMe } from "@/components/AboutMe";
import React from "react";

export default function Home() {
    return (
        <main className="">
            <div>
                <div className="m-5 grid grid-cols-2">
                    <AboutMe />
                    <div className="m-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae amet
                        ea, architecto eius nostrum et quia iusto labore deserunt, reprehenderit
                        officia harum inventore itaque! Possimus necessitatibus tenetur vero
                        doloremque optio!
                    </div>
                </div>
            </div>
        </main>
    );
}
