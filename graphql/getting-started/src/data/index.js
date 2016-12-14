const videoA = {
  id: 'a',
  title: 'graphql server example',
  duration: 180,
  watched: true,
}

const videoB = {
  id: 'b',
  title: 'some random porn',
  duration: 12,
  watched: false,
}

const videos = [videoA, videoB]

const getVideoById = id => new Promise(resolve => {
    const [video] = videos.filter(video => video.id === id)
    resolve(video)
})

const getVideos = () => new Promise(resolve => resolve(videos))

exports.getVideoById = getVideoById
exports.getVideos = getVideos
