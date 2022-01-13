import AddPost from '../AddPost/AddPost'
import Post from '../Posts/Post'
import './PostList.css'







export default function PostList() {
    return(
        <div className='container'>
            <div className="forumContainer">
                <div id='addPost' className='row col-sm-2' >
                <AddPost />
                </div>
                
                <Post />
                
            </div>
            <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link"  aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" >
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link"  aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
        </div>
    )
};
