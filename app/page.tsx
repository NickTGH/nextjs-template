/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">We cook for justice</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/batBurger1.jfif" alt="batBurger1" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Gotham-style burger(GSB)</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">The Batcave special</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            reiciendis alias saepe nam atque molestias, perspiciatis itaque, ad
            perferendis minus odio laborum dolore, aliquid natus non quia
            debitis at omnis!
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/batBurger2.webp" alt="batBurger2" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Some text</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
          incidunt! Eius iste omnis unde maxime ut quidem. Eos, dolore
          repellendus ipsum voluptas possimus et dicta at ad nihil sit officiis!
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery">
          <img className="gallery-image" src="/batBurger3.jpg" alt="batBurger3" />
          <img className="gallery-image" src="/batBurger4.jpg" alt="batBurger4" />
          <img className="gallery-image" src="/batBurger5.webp" alt="batBurger5" />
          <img className="gallery-image" src="/batBurger6.jpg" alt="batBurger6" />
          <img className="gallery-image" src="/image01.jpg" alt="image01" />
          <img className="gallery-image" src="/image02.jpg" alt="image02" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Our clients</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/alfred.jfif" alt="alfred" />
            <h3 className="card-name">Alfred</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/robin1.webp" alt="robin1" />
            <h3 className="card-name">Dick</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/robin2.webp" alt="robin2" />
            <h3 className="card-name">Jason</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/robin3.png" alt="robin3" />
            <h3 className="card-name">Tim</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              pariatur ullam aliquid inventore nam, eligendi unde, obcaecati hic
              minima perferendis numquam. Aliquam esse non possimus mollitia,
              quisquam atque! Explicabo, hic?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
