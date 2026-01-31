import React, { useState } from 'react';
import Hero from '../components/Common/Hero';
import './Timeline.css';

const TimelineEvent = ({ year, title, description, date, isOrange = true, isLeft = false, isCenter = false, isSmallDate = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerClass = `
    steps-container
    ${isOrange ? 'bg-orange' : 'bg-white'}
    ${isLeft ? 'left' : ''}
    ${isCenter ? 'center' : ''}
  `.trim();

  const dateClass = `date ${isSmallDate ? 'small' : ''}`;

  return (
    <div className={containerClass}>
      <div className="content">
        <div className="year">{year}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={`hidden-elements-box ${isExpanded ? 'expanded' : ''}`}>
          <figure>
            <img src="https://via.placeholder.com/500x330" alt="" />
          </figure>
        </div>
        <button
          className={`icon-toggle-box ${isExpanded ? 'clicked' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      <i className="step-line"></i>
      <div className={dateClass}>{date}</div>
    </div>
  );
};

const DualTimelineEvent = ({ leftYear, leftTitle, leftDescription, rightYear, rightTitle, rightDescription, centerDate }) => {
  const [leftExpanded, setLeftExpanded] = useState(false);
  const [rightExpanded, setRightExpanded] = useState(false);

  return (
    <div className="steps-container bg-orange center">
      <div className="content">
        <div className="year">{leftYear}</div>
        <h2>{leftTitle}</h2>
        <p>{leftDescription}</p>
        <div className={`hidden-elements-box ${leftExpanded ? 'expanded' : ''}`}>
          <figure>
            <img src="https://via.placeholder.com/500x330" alt="" />
          </figure>
        </div>
        <button
          className={`icon-toggle-box ${leftExpanded ? 'clicked' : ''}`}
          onClick={() => setLeftExpanded(!leftExpanded)}
        />
      </div>
      <i className="step-line"></i>
      <div className="date">{centerDate}</div>
      <i className="step-line"></i>
      <div className="content">
        <div className="year">{rightYear}</div>
        <h2>{rightTitle}</h2>
        <p>{rightDescription}</p>
        <div className={`hidden-elements-box ${rightExpanded ? 'expanded' : ''}`}>
          <figure>
            <img src="https://via.placeholder.com/500x330" alt="" />
          </figure>
        </div>
        <button
          className={`icon-toggle-box ${rightExpanded ? 'clicked' : ''}`}
          onClick={() => setRightExpanded(!rightExpanded)}
        />
      </div>
    </div>
  );
};

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      year: '2021',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '2000',
      isOrange: true,
    },
    {
      id: 2,
      year: '1996',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '1996',
      isOrange: false,
      isLeft: true,
      isSmallDate: true,
    },
    {
      id: 3,
      year: '2000',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '2000',
      isOrange: true,
    },
    {
      id: 4,
      isDual: true,
      leftYear: '2021',
      leftTitle: 'Lorem ipsum dolor',
      leftDescription: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      rightYear: '2021',
      rightTitle: 'Lorem ipsum dolor',
      rightDescription: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      centerDate: '2002',
    },
    {
      id: 5,
      year: '2021 - 2022',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '2003',
      isOrange: true,
    },
    {
      id: 6,
      year: '2021',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '2004',
      isOrange: false,
      isLeft: true,
    },
    {
      id: 7,
      year: '2021',
      title: 'Lorem ipsum dolor',
      description: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.',
      date: '2005',
      isOrange: true,
    },
  ];

  return (
    <div className="bg-gradient_solid">
      <Hero
        title="Historical Milestones"
        description="Explore the journey of Shree Venkateshwara Arts and Science College, from its founding to its current achievements."
        image="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
      />
      <div className="container">
        <div className="steps">
          {timelineData.map((item) => (
            item.isDual ? (
              <DualTimelineEvent
                key={item.id}
                leftYear={item.leftYear}
                leftTitle={item.leftTitle}
                leftDescription={item.leftDescription}
                rightYear={item.rightYear}
                rightTitle={item.rightTitle}
                rightDescription={item.rightDescription}
                centerDate={item.centerDate}
              />
            ) : (
              <TimelineEvent
                key={item.id}
                year={item.year}
                title={item.title}
                description={item.description}
                date={item.date}
                isOrange={item.isOrange}
                isLeft={item.isLeft}
                isSmallDate={item.isSmallDate}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
}