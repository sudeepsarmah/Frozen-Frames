import { format } from 'date-fns'
import MyImg1 from '../assets/1.png'
import '../css/BlogPost.css'


export default function BlogPost() {

    const date = new Date()
    const formattedDate = format(date, 'dd MMM, yyyy')
    return (
        <div className="blog-post">
            <div className="blog-post-image">
                <img src={MyImg1} alt="" />
            </div>
            <div className='blog-post-details'>
                <div className='blog-post-date'>
                    <p>{formattedDate} • 1 min read</p>
                </div>
                <div className='blog-post-article'>
                    <h3 className='blog-post-heading'>50 code snippets that will help you save time</h3>
                    <p className='bl0g-post-summary'>Every time you have to write the same code snippets over and over again..</p>
                </div>
                <hr />
                <div className='blog-post-footer'>
                    <div className='blog-post-views'>
                        <p>0 views • 0 comments</p>
                    </div>
                    <div className='blog-post-favorite'>
                        ❤️
                    </div>
                </div>
            </div>
        </div>
    )
}