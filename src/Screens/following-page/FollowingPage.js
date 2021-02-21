import React, { useState } from 'react';
import kabadi from 'assets/images/kabadi.svg';
import swimmingpool from 'assets/images/swimmingpool.png';
import cricket from 'assets/images/cricket.svg';
import python from 'assets/images/python.png';
import java from 'assets/images/javaa.png';
import react from 'assets/images/react.png';
import ExplorePill from 'common-components/ExplorePill';
import { PillBlock } from '../welcome/Welcome.Style';
import {
  MainBlock,
  GlobalInterest,
  LeadingWriters,
  MyInterests,
  PageTitle,
  ExploreInterests,
  InterestTitle,
  InterestBorder,
  CategoryBlock,
  Category,
  CategoryImg,
  CategoryNameBlock,
  CategoryName,
  FollowButton,
} from './FollowingPage.style';

const FollowingPage = () => {
  const [categories, setCategories] = useState([
    {
      name: 'Sports',
      interestList: [
        {
          interestName: 'Kabadi',
          imagePath: kabadi,
          isHovered: false,
          isClicked: false,
        },
        {
          interestName: 'Swimming',
          imagePath: swimmingpool,
          isHovered: false,
          isClicked: false,
        },
        {
          interestName: 'Cricket',
          imagePath: cricket,
          isHovered: false,
          isClicked: false,
        },
        {
          interestName: 'Swimming',
          imagePath: swimmingpool,
          isHovered: false,
          isClicked: false,
        },
      ],
    },
    {
      name: 'Programming',
      interestList: [
        {
          interestName: 'Python',
          imagePath: python,
          isHovered: false,
          isClicked: false,
        },
        {
          interestName: 'Java',
          imagePath: java,
          isHovered: false,
          isClicked: false,
        },
        {
          interestName: 'ReactJs',
          imagePath: react,
          isHovered: false,
          isClicked: false,
        },
      ],
    },
  ]);
  const [pills, setPills] = useState([
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 1,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 2,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 3,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 4,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 5,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 6,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 7,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 8,
    },
    {
      value: ' விளையாட்டு ',
      isSelected: true,
      id: 9,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 10,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 11,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 12,
    },
    {
      value: 'விளையாட்டு',
      isSelected: true,
      id: 13,
    },
    {
      value: 'அரசியல்',
      isSelected: true,
      id: 14,
    },
    {
      value: 'ஆன்மீகம்',
      isSelected: true,
      id: 15,
    },
  ]);

  const getInterestPills = () => {
    return pills.map(({ value, isSelected, id }) => (
      <ExplorePill
        interest={value}
        isSelected={isSelected}
        onSelectInterest={(selectedId) => {
          const updatedPills = pills.map((singlePill) =>
            singlePill.id === selectedId ? { ...singlePill, isSelected: !singlePill.isSelected } : singlePill
          );
          setPills(updatedPills);
        }}
        id={id}
      />
    ));
  };

  const OnSelectInterest = (interestName, categoryName) => {
    const updatedCategory = categories.map((category) => {
      if (category.name === categoryName) {
        const updatedInterest = category.interestList.map((interest) => {
          if (interest.interestName === interestName) {
            return { ...interest, isClicked: !interest.isClicked };
          }
          return interest;
        });
        return { ...category, interestList: updatedInterest };
      }
      return category;
    });
    setCategories(updatedCategory);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MainBlock>
        <GlobalInterest>
          <p>This block has Global interest</p>
        </GlobalInterest>
        <LeadingWriters>
          <p>This block has Leading writers of the week</p>
        </LeadingWriters>
        <MyInterests>
          <PageTitle>Your interests</PageTitle>
          <PillBlock>{getInterestPills()}</PillBlock>
        </MyInterests>
        <ExploreInterests>
          <PageTitle>Explore Interests</PageTitle>
          {categories.map((category) => {
            return (
              <>
                <InterestTitle>{category.name}</InterestTitle>
                <InterestBorder />
                <CategoryBlock>
                  {category.interestList.map((interest) => {
                    return (
                      <Category>
                        <CategoryImg src={interest.imagePath} />
                        <CategoryNameBlock id="interestNameBlock">
                          <CategoryName>{interest.interestName}</CategoryName>
                          <FollowButton
                            onClick={() => OnSelectInterest(interest.interestName, category.name)}
                            isClicked={interest.isClicked}
                          />
                        </CategoryNameBlock>
                      </Category>
                    );
                  })}
                </CategoryBlock>
              </>
            );
          })}
        </ExploreInterests>
      </MainBlock>
    </div>
  );
};

export default FollowingPage;
