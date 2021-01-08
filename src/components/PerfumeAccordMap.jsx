import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as d3 from 'd3';

import theme from './styles/theme';
import { fadeIn } from './styles/keyframes';

const Wrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 260px;
  bottom: 60px;
  left: 50%;
  transform: translate(-50%);
  mix-blend-mode: multiply;
  animation: 2s ${fadeIn};
`;

const dragEventListener = d3.drag()
  .on('start', function () {
    d3.select(this).raise().attr('stroke', 'white');
  })
  .on('drag', function (e) {
    d3.select(this).attr('cx', e.x).attr('cy', e.y);
  })
  .on('end', function () {
    d3.select(this).raise().attr('stroke', null);
  });

const AccordMap = ({ accords, imageUrl, name }) => {
  const svgRef = useRef();

  const animateCircle = circle => {
    if (!svgRef.current) return;

    const updateCircle = circle
      .transition()
      .ease(d3.easeCubic)
      .duration(40000)
      .attr('opacity', d3.randomUniform(0.5, 1))
      .attr('cx', d3.randomUniform(-200, 500))
      .attr('cy', d3.randomUniform(20, 260))
      .on('end', () => updateCircle.call(animateCircle));
  };

  const handleMouseOver = function () {
    if (!svgRef.current) return;

    const self = d3.select(this);

    self
      .transition()
      .ease(d3.easeQuadOut)
      .duration(1200)
      .style('opacity', d3.randomUniform(0.5, 1))
      .style('transform', `translate(${d3.randomUniform(-40, 40)()}px, ${d3.randomUniform(-40, 40)()}px)`)
      .on('end', () => self.call(animateCircle));
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .attr('width', '100%')
      .attr('height', '90vh')
      .attr('viewBox', [0, 0, 300, 300])
      .style('background-color', theme.provincialPink);

    for (let i = 0; i < 30; i++) {
      accords.forEach(accord => {
        const circle = svg.append('circle')
          .attr('r', 0)
          .attr('cx', 150)
          .attr('cy', 220)
          .attr('fill', accord.styles.background)
          .attr('opacity', 0)
          .call(dragEventListener)
          .on('mouseover', handleMouseOver)
          .transition()
          .ease(d3.easeCubicOut)
          .duration(d3.randomUniform(2000, 10000))
          .attr('cx', d3.randomUniform(-200, 500))
          .attr('cy', d3.randomUniform(20, 260))
          .attr('r', 40 * parseInt(accord.styles.width) / 200)
          .attr('opacity', 0.9)
          .on('end', () => circle.call(animateCircle));
      });
    }

    return () => d3.select(svgRef.current).remove();
  }, []);

  return (
    <Wrapper>
      <ProductImage draggable={false} src={imageUrl} alt={name}/>
      <svg ref={svgRef}/>
    </Wrapper>
  );
};

AccordMap.propTypes = {
  accords: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AccordMap;
