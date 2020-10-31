import React from 'react';
import classNames from 'classnames';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Franck Kabasele',
    paragraph: 'As a web developer, I always look forward building secure, scalable, and robust application.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" id='projects'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          {/* <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Nodejs  Express  Mongoose  MongoDB 
                  </div> 
                <h3 className="mt-0 mb-12">
                  MyTravelApp
                  </h3>
                <p className="m-0 mb-12">
                 MyTravelApp is a full stack application for a travel agency, that allow user to search, and book tours for their next vacation. 
                 </p>

              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/franck.jpg')}
                  alt="Features split 01"
                  width={828}
                  height={596} />
              </div>
            </div> 
          </div> */}
        </div>
        </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;