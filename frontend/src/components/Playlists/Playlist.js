import React from 'react';

const Playlist = ({
    currSong={},
    playlist={},
    handleSelect,
    handleAction,
}) => {
    return (
        <div className="playlist-container">
            <div className="header">
                <div className="icon"></div>
                <div className="info">
                    <div className="name">{playlist?.name}</div>
                    <div className="count">{playlist?.songs?.length} songs</div>
                </div>
            </div>
            <div className="table-container">
                <div className="header-container">
                    <div className="num">#</div>
                    <div className="name">Name</div>
                    <div className="album">Album</div>
                    <div className="year">Year</div>
                    <div className="duration">Duration</div>
                </div>
                {
                    playlist.songs.length > 0 && playlist.songs.map((song, i) => (
                        <div className={"song-container" + (song.id === currSong.id ? ' selected' : '')} key={i}>
                            <div className="num">{i+1}</div>
                            <div className="name" onClick={() => handleSelect(song, i)}>
                                {
                                    song.art ?
                                    <img className="art" src={song.art} alt="" />
                                    :
                                    <div className="album"></div>
                                }
                                <div>
                                    <div className="title">{song.name}</div>
                                    <div className="artist">{song.artist}</div>
                                </div>
                            </div>
                            <div className="album">{song.album}</div>
                            <div className="year">{song.release}</div>
                            <div className="duration">{song.duration}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Playlist;
