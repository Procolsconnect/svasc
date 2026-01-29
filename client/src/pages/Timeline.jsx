import React, { useState } from 'react';
import Hero from '../components/Common/Hero';

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
      <style>{`
        :root {
          --primary: #FFA700;
        }

        .container {
          width: 1200px;
          display: table;
          margin: 0 auto;
        }

        .steps {
          position: relative;
          margin-top: 32px;
        }

        .steps img {
          max-width: 100%;
        }

        .steps .steps-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 50px 0;
        }

        @media (min-width: 1200px) {
          .steps .steps-container {
            align-items: end;
            justify-content: start;
            flex-direction: row;
          }
        }

        .steps .steps-container:after {
          content: "";
          position: absolute;
          width: 16px;
          background-color: var(--primary);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -8px;
          z-index: 1;
        }

        .steps .steps-container:first-child:after {
          top: 80%;
        }

        .steps .steps-container:last-child:after {
          bottom: 10%;
        }

        .steps .steps-container .step-line {
          width: 101px;
          background-color: var(--primary);
          height: 21px;
          margin-top: 41px;
          flex-shrink: 0;
          align-self: end;
          box-shadow: 14px 11px 21px rgba(0, 11, 30, 0.1);
          display: none;
        }

        @media (min-width: 1200px) {
          .steps .steps-container .step-line {
            display: block;
          }
        }

        .steps .steps-container.left {
          justify-content: center;
          flex-direction: column;
        }

        @media (min-width: 1200px) {
          .steps .steps-container.left {
            justify-content: end;
            flex-direction: row-reverse;
          }
        }

        .steps .steps-container.left .step-line {
          box-shadow: -13px 13px 21px rgba(0, 11, 30, 0.1);
        }

        .steps .steps-container.left .content:after {
          left: 0;
          right: -16px;
        }

        @media (min-width: 1202px) {
          .steps .steps-container.left .content:after {
            right: -30px;
          }
        }

        .steps .steps-container.center {
          justify-content: space-between;
        }

        .steps .steps-container.center .step-line:last-child {
          box-shadow: -13px 13px 21px rgba(0, 11, 30, 0.1);
        }

        .steps .steps-container.center .content:last-child:after {
          left: 0;
          right: -16px;
        }

        @media (min-width: 1202px) {
          .steps .steps-container.center .content:last-child:after {
            right: -30px;
          }
        }

        .steps .steps-container.bg-orange .step-line {
          background-color: #fff;
        }

        .steps .steps-container.bg-orange .content {
          background-color: var(--primary);
          color: #fff;
        }

        .steps .steps-container.bg -orange .content h2 {
          color: #fff;
        }

        .steps .steps-container.bg-orange .content:after {
          background: #fff;
        }

        .steps .steps-container.bg-orange .content .year {
          color: #fff;
        }

        .steps .steps-container.bg-white .step-line {
          background-color: var(--primary);
        }

        .steps .steps-container.bg-white .content {
          background-color: white;
          color: #6E6E6E;
        }

        .steps .steps-container.bg-white .content h2 {
          color: var(--primary);
        }

        .steps .steps-container.bg-white .content:after {
          background: var(--primary);
        }

        .steps .steps-container.bg-white .content .year {
          color: var(--primary);
        }

        .steps .steps-container .content {
          padding: 24px;
          position: relative;
          max-width: 460px;
          box-shadow: 0px -3px 23px rgba(0, 11, 30, 0.1);
          margin: 0 0 91px;
          flex-basis: auto;
        }

        @media (min-width: 1200px) {
          .steps .steps-container .content {
            margin: 0 0 21px;
            flex-basis: 460px;
          }
        }

        .steps .steps-container .content .year {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.4px;
          margin: 0 0 16px;
        }

        .steps .steps-container .content:after {
          content: "";
          position: absolute;
          left: -16px;
          bottom: -21px;
          height: 150px;
          right: 0;
          z-index: -1;
          box-shadow: 0px 16px 27px rgba(0, 11, 30, 0.1);
          display: none;
        }

        @media (min-width: 1202px) {
          .steps .steps-container .content:after {
            left: -30px;
          }
        }

        @media (min-width: 768px) {
          .steps .steps-container .content:after {
            display: block;
          }
        }

        .steps .steps-container .content p {
          font-size: 13px;
          line-height: 24px;
        }

        .steps .steps-container .content h2 {
          font-weight: 700;
          font-size: 25px;
          letter-spacing: 0.34px;
          line-height: 30px;
          margin: 0 0 18px;
        }

        .steps .steps-container .content .hidden-elements-box {
          display: none;
          padding-bottom: 60px;
        }

        .steps .steps-container .content .hidden-elements-box.expanded {
          display: block;
        }

        .steps .steps-container .content button.icon-toggle-box {
          background-color: #fff;
          border: 0;
          outline: 0;
          width: 50px;
          height: 50px;
          position: absolute;
          right: 0;
          bottom: 0;
          background-image: url(../Img/icon-btn.png);
          background-position: center;
          background-size: 100%;
          cursor: pointer;
        }

        .steps .steps-container .content button.icon-toggle-box.clicked {
          background-image: url(../Img/icon-btn-clicked.png);
        }

        .steps .steps-container .date {
          font-weight: 900;
          font-size: 30px;
          color: #ffffff;
          margin-bottom: 10px;
          width: 100px;
          height: 100px;
          background-color: var(--primary);
          border-radius: 50%;
          flex-shrink: 0;
          align-items: center;
          display: flex;
          justify-content: center;
          z-index: 10;
          position: absolute;
          text-align: center;
          line-height: 1;
          left: calc(50% - 40px);
          box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.25);
          bottom: 0;
          padding: 0 3px;
          word-break: break-word;
        }

        .steps .steps-container .date.small {
          font-size: 14px;
          color: var(--primary);
          width: 46px;
          height: 46px;
          background-color: #fff;
          left: calc(50% - 17px);
          bottom: 24px;
        }
      `}</style>

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