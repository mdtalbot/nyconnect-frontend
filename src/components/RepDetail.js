import React from 'react';
import RepLinks from './RepLinks'


export default function RepDetail(props) {
    if (!props.selectedReps.address && props.selectedReps.length > 0) {
      console.log('GOT IT')
      return (
        <div className="detail-view">
          <div className="ui items" >
            <div className="item" >
              <div className="image" >
                <img className="rep-photo" src={props.selectedReps.photoUrl} alt='../../public/assets/unavailable.jpg'/>
              </div>
              <div className="content">
                <div className="header">
                  {props.selectedReps.name}
                </div>
                <div className="metadata">
                  {props.selectedReps.party}
                </div>

                <div className="description" >
                  {props.selectedReps.phones}
                  <br /><br />
                  <br /><br />
                  <a href={props.selectedReps.urls}>Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      if (props.selectedReps.length == 0) {
        return <h2>Click a representative to see their information!</h2>
    } else {
        return (
          <div className="detail-view">
            <div className="ui items" >
              <div className="item" >
                <div className="image" >
                  <img className="rep-photo" src={props.selectedReps.photoUrl} alt="Image Unavailable." />
                </div>
                <div className="content">
                  <div className="header">
                    {props.selectedReps.name}
                  </div>
                  <br />
                  <div className="metadata">
                    {props.selectedReps.party}
                  </div>
                  <div className="description" >
                    {props.selectedReps.address ? props.selectedReps.address[0].line1 : "Address unavailable."}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].line2 : ''}
                    <br />
                    {props.selectedReps.address ? props.selectedReps.address[0].city : ''} {props.selectedReps.address ? props.selectedReps.address[0].state : ''} {props.selectedReps.address ? props.selectedReps.address[0].zip : ''}
                    <br />
                    {props.selectedReps.phones}
                    <br />
                    <a href={props.selectedReps.urls}>Website</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="extra">
              {props.selectedReps.channels ? props.selectedReps.channels.map((channel, index) => <RepLinks key={index} type={channel.type} id={channel.id}/>) : "No social media links available."}
            </div>
          </div>
        );
     }
  }
}

RepDetail.defaultProps = {
  selectedReps: {
    phones: 'Phone number unavailable.',
    urls: 'No website available.'
  }
}
