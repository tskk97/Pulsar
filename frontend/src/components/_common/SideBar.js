import React from 'react';

const SideBar = ({
    sections=[{
        title: '',
        content: [],
    }],
    selected={},
    handleSelect,
    page='',
}) => {
    return (
        <div className="sidebar-container">
            {
                page === 'friends' && sections.map((section, i) => (
                    <div key={i} className="sidebar-section-container friends">
                        <div className="title">{section?.title || ''}</div>
                        <div className="content-container">
                            {
                                section?.content?.length > 0 && section?.content?.map((obj, j) => (
                                    <div key={j} className={"content-detail" + (selected.id === obj.id ? ' selected' : '')} onClick={() => handleSelect(obj)}>
                                        <div className="icon"></div>
                                        <div className="name">{obj?.name || ''}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            {
                page === 'playlists' && sections.map((section, i) => (
                    <div key={i} className="sidebar-section-container playlists">
                        <div className="title">{section?.title || ''}</div>
                        <div className="content-container">
                            {
                                section?.default?.length > 0 && section?.default?.map((obj, j) => (
                                    <div key={j} className={"content-detail" + (selected.value === obj.value ? ' selected' : '')} onClick={() => handleSelect(obj)}>
                                        <div className="name">{obj?.name || ''}</div>
                                    </div>
                                ))
                            }
                            {
                                section?.content?.length > 0 && section?.content?.map((obj, k) => (
                                    <div key={k} className={"content-detail" + (selected.value === obj.value ? ' selected' : '')} onClick={() => handleSelect(obj)}>
                                        <div className="name">{obj?.name || ''}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SideBar;