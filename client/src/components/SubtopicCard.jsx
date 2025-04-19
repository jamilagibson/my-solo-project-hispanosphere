function SubtopicCard({ title, content, songTitle, artist, videoUrl }) {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="mb-2">{content}</p>

            {videoUrl && (
                <p className="mt-2">
                    <span className="font-semibold">🎵 {songTitle}</span> by {artist}
                    <br />
                    <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                    >
                        Listen on YouTube
                    </a>
                </p>
            )}
        </div>
    );
}

export default SubtopicCard;