import React from "react";

function About() {
  return (
    <div>
      <div className="min-h-screen  dark:bg-slate-900 dark:text-white mt-20">
        <div className="max-w-screen2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
          <div className="w-full order-2 md:order-1  mt-12 md:mt-32">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold ">
                Welcome to <span className="text-pink-500">BookNest!</span>
              </h1>
              <p className="text-xl ">
                Your one-stop place for getting books which you really need!{" "}
                <br></br> Find Your Next Great Read Here!
              </p>
              <p className="text-2xl">
                Welcome to BookNest! This project is close to my heart, as it’s
                not just another college assignment but a platform inspired by
                my deep connection to books and writing. Growing up, I watched
                my father immerse himself in the world of words, sharing his
                thoughts and stories as a writer. His passion for literature has
                always been a source of inspiration for me, sparking my own
                interest in reading and creativity. BookNest is my way of
                bringing together readers, students, and book lovers into one
                space where they can explore, share, and even sell books. Here,
                you’ll find a community-driven platform where everyone has a
                voice—whether it’s through rating, commenting, or adding their
                own books to share with others. This journey of building
                BookNest has allowed me to bridge my passion for technology with
                a love for literature that runs in my family. Thank you for
                being a part of it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
