import React from "react";

const SimpleHome = () => {

    return(
        <div>
            <header>
                <h1>Fateen's Fortune-Telling Chamber</h1>
                <h2>Find what you seek, be it an object, person, or luck.</h2>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#location">Location</a></li>
                        <li><a href="#reviews">Reviews</a></li>
                        <li><a href="#secrets">Secrets</a></li>
                    </ul>
                </nav>
            </header>
            <section id="about">
                <div>
                    <h2>About Me</h2>
                    <a href="#top">Top</a>
                </div>
                <h3>Greeting</h3>
                <p>
                I am Fateen. If ever a problem clouds your brow, you shall come to me. Mr. Duking, this town's leader, took my fortune-telling to heart. He searched high and low for the wild Pokémon I had foretold. His search has been rewarded. He appears to have found several locations where wild Pokémon appear.
                </p>
                <h3>Bio</h3>
                <article>
                    <ul>
                        <li><b>Name:</b> Fateen (Japanese: ビーディ Beedy).</li>
                        <li><b>Alias:</b> "Mother of Pyrite Town".</li>
                        <li><b>What I do:</b> I give you fortunes to help you through challenges.</li>
                        <li><b>Speciality:</b> scrying in a crystal ball.</li>
                        <li><b>Bulbapedia page:</b> <a rel="noreferrer" target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/Fateen">click here.</a></li>
                    </ul>
                </article>
            </section>
            <section id="location">
                <div>
                    <h2>Location</h2>
                    <a href="#top">Top</a>
                </div>
                <h3>I am in Pyrite Town Orre!</h3>
                <ul>
                        <li><b>How to find me:</b> Go to the very entrance of Pyrite Town in Orre.</li>
                        <li><b>Town name:</b> Pyrite Town (Japanese: パイラタウン Pyra Town)</li>
                        <li><b>Town description:</b> The town is hewn out of a crimson-colored canyon and is laced with bits of old trash and mining debris, the latter a reminder of the town's mining past. Most buildings and machinery found within Pyrite are saturated with rust.</li>
                        <li><b>Bulbapedia page:</b> <a rel="noreferrer" target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/Pyrite_Town">click here.</a></li>
                    </ul>
            </section>
            <section id="reviews">
                <div>
                    <h2>Reviews</h2>
                    <a href="#top">Top</a>
                </div>
                <h3>Reviews from my customers!</h3>
                <ul>
                        <li><b>Mr. Duking:</b> I highly resepect Fateen. All the town citizens know about her.</li>
                        <li><b>Pokemon trainer:</b> 10/10 I caught them all!</li>
                        <li><b>Town citizen:</b> I think she's alright. Her predictions are a little ominous - she said something about my Pikachu turning on me.</li>
                    </ul>
            </section>
            <section id="secrets">
                 <div>
                    <h2>Secrets</h2>
                    <a href="#top">Top</a>

                </div>
                <h3>Here you will find my secret discounts and events just for you!</h3>
                <h4>Discount #1</h4>
                <ul>
                        <li><b>Title:</b> 10% Off!</li>
                        <li><b>Date:</b> Only on Monday</li>
                        <li><b>Description:</b> All day, every Monday until December 1st. You know where to find me.</li>
                </ul>
                <h4>Discount #2</h4>
                <ul>
                        <li><b>Title:</b> Lifetime subscription.</li>
                        <li><b>Date:</b> Anytime.</li>
                        <li><b>Description:</b> Infinite visits to my shop.</li>
                </ul>
                <h4>Event #1</h4>
                <ul>
                        <li><b>Title:</b> Purify your shadow pokemon.</li>
                        <li><b>Date:</b> August 1st</li>
                        <li><b>Description:</b> Not a cult.</li>
                </ul>

            </section>
            <footer>
                <h3>Visit again.</h3>
                <h5>Whatever your problem may be, my fortune-telling shall lead to the solution.</h5>
            </footer>
        </div>
    )
}

export default SimpleHome;