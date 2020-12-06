import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select, drag, randomUniform, easeCircleInOut } from 'd3';

const dragEventListener = drag()
  .on('start', function () {
    select(this).raise().attr('stroke', 'white');
  })
  .on('drag', function (e) {
    select(this).attr('cx', e.x).attr('cy', e.y);
  })
  .on('end', function () {
    select(this).raise().attr('stroke', null);
  });

const AccordMap = ({ accords, imageUrl, name }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .attr('width', '100vw')
      .attr('height', '90vh')
      .attr('viewBox', [0, 0, 300, 300])
      .style('background-color', '#FFF6F0');

    for (let i = 0; i < 30; i++) {
      accords.forEach(accord => {
        svg.append('circle')
          .attr('r', 0)
          .attr('cx', randomUniform(-200, 500))
          .attr('cy', randomUniform(20, 260))
          .attr('fill', accord.styles.background)
          .attr('opacity', 0)
          .call(dragEventListener)
          .transition()
          .ease(easeCircleInOut)
          .duration(randomUniform(1200, 2000))
          .attr('r', 40 * parseInt(accord.styles.width) / 200)
          .attr('opacity', 0.8);
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img style={{ position: 'absolute', width: '260px', bottom: '60px', left: '50%', transform: 'translate(-50%)', mixBlendMode: 'multiply' }} src={imageUrl} alt={name}/>
      <svg ref={svgRef}/>
    </div>
  );
};

AccordMap.propTypes = {
  accords: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AccordMap;
