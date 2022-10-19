import Episode from "./Episodes";

const episodes = [
    {
        id: 1,
        img: "https://via.placeholder.com/150",
        title: "Episode 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: "https://via.placeholder.com/150",
        title: "Episode 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: "https://via.placeholder.com/150",
        title: "Episode 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        img: "https://via.placeholder.com/150",
        title: "Episode 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
]


function EpisodesList() {
    const episodesComponents = episodes.map((episode) => {
        return (
            <Episode key={episode.id} img={episode.img} title={episode.title} description={episode.description} />)
    }
    )
    return (
        <div className="d-flex flex-rows flex-wrap justify-content-center">
            {episodesComponents}
        </div>
    )
}

export default  EpisodesList;