
const download = (audioUrl) => {
    try {
        fetch(audioUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]))
            const fileName = audioUrl.split('/').pop()
            const a = document.createElement('a')
            a.href = url
            a.setAttribute('download', fileName)
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            })  
    }
    catch(error) {
    console.error('Error downloading audio: ', error)
    }
}

export const handleDownload = (audioUrl) => {
    download(audioUrl);
}

const stream = (audioUrl, audioId) =>{
    const audio = document.getElementById(`${audioId}`)
  
    if (audio.src == audioUrl){
      if (audio.paused) {
        audio.play()
      }
      else {
        audio.pause()
      }
    }
    else {
      audio.src = audioUrl
      audio.play()
    }
}

export const handleStream = (audioUrl, audioId) => {
    stream(audioUrl, audioId)
}


