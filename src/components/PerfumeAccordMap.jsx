import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { select, drag, randomUniform, easeCircleInOut, easeCubic, easeQuadOut } from 'd3';

const imageStyleOption = {
  position: 'absolute',
  width: '260px',
  bottom: '60px',
  left: '50%',
  transform: 'translate(-50%)',
  mixBlendMode: 'multiply',
};

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

const animateCircle = circle => {
  const updateCircle = circle
    .transition()
    .ease(easeCubic)
    .duration(40000)
    .attr('opacity', randomUniform(0.5, 1))
    .attr('cx', randomUniform(-200, 500))
    .attr('cy', randomUniform(20, 260))
    .on('end', () => updateCircle.call(animateCircle));
};

const handleMouseOver = function () {
  const self = select(this);
  self
    .transition()
    .ease(easeQuadOut)
    .duration(1200)
    .style('opacity', randomUniform(0.5, 1))
    .style('transform', `translate(${randomUniform(-40, 40)()}px, ${randomUniform(-40, 40)()}px)`)
    .on('end', () => self.call(animateCircle));
};

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
        const circle = svg.append('circle')
          .attr('r', 0)
          .attr('cx', randomUniform(-200, 500))
          .attr('cy', randomUniform(20, 260))
          .attr('fill', accord.styles.background)
          .attr('opacity', 0)
          .call(dragEventListener)
          .on('mouseover', handleMouseOver)
          .transition()
          .ease(easeCircleInOut)
          .duration(randomUniform(1200, 2000))
          .attr('r', 40 * parseInt(accord.styles.width) / 200)
          .attr('opacity', 0.9)
          .on('end', () => circle.call(animateCircle));
      });
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img style={imageStyleOption} src={imageUrl} alt={name}/>
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
