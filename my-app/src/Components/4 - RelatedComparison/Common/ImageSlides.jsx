import React, { useRef } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Stars } from '../Common/Stars.jsx';
import { LeftArrow, RightArrow } from '../Common/ImageArrows.jsx';

export default function ImageSlides({ smallImg, largeImg, itemId}) {
  const visibility = React.useContext(VisibilityContext);
  const modalRef = useRef(null);


  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

    return (
      <div className="container"
      style={{
        margin: "0 0px",
        width: "200px",
        height: "300px"
      }}
      >
      <img width='300px' height='449px' style={{ marginTop: "0px", width: '200px', height: '300px' }} src={smallImg} alt='' />
    </div>
  );
}



function ModalContent({ogFeatures, features, title, ogTitle}) {
  let features1 = features.map(item => item.feature);
  let features2 = ogFeatures.map(item => item.feature);

  let mergedFeatures = [...new Set([...features1, ...features2])];

  return (
    <table className='table table-zebra'>
      <thead>
        <tr>
          <th>Feature</th>
          <th>{title}</th>
          <th>{ogTitle}</th>
        </tr>
      </thead>
      <tbody>
        {mergedFeatures.map(feature => {
          let featuresValue = features.find(item => item.feature === feature)?.value || 'X';
          let ogFeaturesValue = ogFeatures.find(item => item.feature === feature)?.value || 'X';

          return (
            <tr>
              <td>{feature}</td>
              <td>{featuresValue}</td>
              <td>{ogFeaturesValue}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}