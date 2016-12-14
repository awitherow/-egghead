const videoA = {
  id: 'a',
  title: 'graphql server example',
  duration: 180,
  released: true,
}

const videoB = {
  id: 'b',
  title: 'some random porn',
  duration: 12,
  released: false,
}

const videos = [videoA, videoB]

const getVideoById = id => new Promise(resolve => {
    const [video] = videos.filter(video => video.id === id)
    resolve(video)
})

const getVideos = () => new Promise(resolve => resolve(videos))

const createVideo = ({ title, duration, released}) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    released
  }

  videos.push(video)
  return video
}

exports.getVideoById = getVideoById
exports.getVideos = getVideos
exports.createVideo = createVideo
