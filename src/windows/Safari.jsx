import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControlls} from "#components/index.js";
import {
    ChevronRight,
    PanelLeft,
    ChevronLeft,
    ShieldHalf,
    SearchIcon,
    ShareIcon,
    PlusIcon, CopyIcon, MoveRight
} from "lucide-react";
import {blogPosts} from "#constants/index.js";

const Safari = () => {
    return (
        <>
        <div id="window-header">
            <WindowControlls target="safari" />

            <PanelLeft className="ml-10 icon" />
            <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
            </div>

            <div className="flex-1 flex-center gap-3">
                <ShieldHalf className="icon" />
                <div className="search">
                    <SearchIcon className="icon" />
                    <input className="flex-1 " type="text" placeholder="Search or enter website name" />

                </div>

            </div>

            <div className="flex items-center gap-5">
                <ShareIcon className="icon" />
                <PlusIcon className="icon" />
                    <CopyIcon className="icon" />
            </div>

        </div>

            <div className="blog">
                    <h2>My Developer Blog</h2>

                    <div className="space-y-8">
                        {
                            blogPosts.length === 0
                                ? (
                                    <div className="blog-post">
                                        <h3>There are no blogs</h3>
                                    </div>
                                )
                                : (
                                    blogPosts.map(({ id, image, title, date, link }) => (
                                        <div key={id} className="blog-post">
                                            <div className="col-span-2">
                                                <img src={image} alt={title} />
                                            </div>
                                            <div className="content">
                                                <p>{date}</p>
                                                <h3>{title}</h3>
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="icon-hover"
                                                >
                                                    Check out the full post <MoveRight className="icon-hover"/>
                                                </a>
                                            </div>
                                        </div>
                                    ))
                                )
                }
                    </div>

            </div>

        </>
    )
}


const SafariWindow=WindowWrapper(Safari,"safari")
export default SafariWindow
