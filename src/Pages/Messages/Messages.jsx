import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'
const Messages = () => {

  const currentUser = {
    id: 1,
    name: "John Doe",
    isSeller: true,
  };

  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt officia eum cumque doloremque nihil aliquam repellat a, quo nam blanditiis numquam unde sunt ullam ab, possimus ut deserunt mollitia nostrum';
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>

          <tr className='active'>
            <td>
              John Doe
            </td>
            <td><Link to="/message/1234" className='link'>{message.slice(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>1234</td>
            <td>
              <button>Mark  as Read</button>
            </td>
          </tr>

          <tr className='active'>
            <td>
              John Doe
            </td>
            <td><Link to="/message/1234" className='link'>{message.slice(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>1234</td>
            <td>
              <button>Mark  as Read</button>
            </td>
          </tr>

          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/1234" className='link'>{message.slice(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>1234</td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/1234" className='link'>{message.slice(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>1234</td>
            <td>
            </td>
          </tr>

          <tr>
            <td>
              John Doe
            </td>
            <td><Link to="/message/1234" className='link'>{message.slice(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>1234</td>
            <td>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages