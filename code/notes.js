const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "Hidden for demo",
});
const note = new OpenAIApi(config);

const account = async () => {
    await note.createCompletion({
        model: "text-davinci-003",
        prompt: "Our solar system consists of our star, the Sun, and everything bound to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of moons; and millions of asteroids, comets, and meteoroids.",
        temperature: 0.4,
        max_tokens: 55,
        top_p: 1.2,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
};